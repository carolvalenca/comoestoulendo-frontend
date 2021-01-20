import React, { useEffect, useState } from 'react'

import './style.css'

import Header from '../../components/Header'
import LandingPageButton from '../../components/LandingPageButton'
import api from '../../services/api'

import BookCard from '../../components/BookCard'
import BookModal from '../../components/modals/BookModal'
import EditBookModal from '../../components/modals/EditBookModal'

function Main() {
    const [books, setBooks] = useState([]);
    const [booksToShow, setBooksToShow] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [bookInfo, setBookInfo] = useState({});
    const [lastOption, setLastOption] = useState("all");

    useEffect(() => {
        //faz as requisicoes pra api
        const fetchData = async () => {
            let books = await api.get('/books/all')

            await setBooks(books.data)
            await setBooksToShow(books.data)
        }
        
        fetchData()
    }, [])

    async function deleteBookCard(id) {
        const allBooks = await api.delete(`books/delete/${id}`)

        await setBooks(allBooks.data)

        const booksShow = filterBooks(lastOption, allBooks.data)

        await setBooksToShow(booksShow)
    }

    function handleForm(data) {
        console.log(data)
    }

    //funcao responsavel por fechar o modal
    function closeModal(){
        setIsOpen(false);
    }

    //funcao responsavel por abrir o modal e receber as informacoes da disciplina necessarias p o modal
    function openModal(bookInfo) {
        setIsOpen(true);

        console.log(bookInfo)
        setBookInfo(bookInfo)
    }

    function filterBooks(filter, arra){
        let arr = []
        if (filter === "finished") {
            arr = arra.filter(elem => elem.finished)
        } else if (filter === "notfinished") {
            console.log(filter === "notfinished")
            arr = arra.filter(elem => !elem.finished)
            console.log(arr)
        } else {
            arr = arra
        }

        return arr
    }

    async function changeBooksSelected(filter){
        const booksSelected = filterBooks(filter, books)

        await setLastOption(filter)
        await setBooksToShow(booksSelected)
    }

    return (
        <div id="main-container">
            <Header action="Fazer Logout" />
            <BookModal elem={bookInfo} modalIsOpen={modalIsOpen} closeModal={closeModal} />
            <div className="sla">
                <select onChange={(event) => changeBooksSelected(event.target.value)}>
                    <option selected value="all">Todos</option>
                    <option value="notfinished">Não terminados</option>
                    <option value="finished">Terminados</option>
                </select>
                <button>Adicionar livro +</button>
            </div>
            <div className="cards">
                {booksToShow && booksToShow.map(elem => (
                    <BookCard key={elem._id} elem={elem} openModal={openModal} deleteBook={deleteBookCard} handleEditForm={handleForm}/>
                ))}
            </div>
        </div>
    )
}

export default Main