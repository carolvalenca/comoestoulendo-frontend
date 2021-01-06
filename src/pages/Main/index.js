import React, { useEffect, useState } from 'react'

import './style.css'

import Header from '../../components/Header'
import LandingPageButton from '../../components/LandingPageButton'
import api from '../../services/api'
import deleteIcon from '../../assets/delete.svg'
import editIcon from '../../assets/pen.svg'
import plusIcon from '../../assets/icons8-plus-math-26.png'

function Main() {
    const [books, setBooks] = useState([]);
    const [booksToShow, setBooksToShow] = useState([]);

    useEffect(() => {
        //faz as requisicoes pra api
        const fetchData = async () => {
            let books = await api.get('/books/all')

            await setBooks(books.data)
            await setBooksToShow(books.data)
       }

       fetchData()
    }, [])

    function filterBooks(event){
        const filter = event.target.value
        let arr = []
        if (filter === "finished") {
            arr = books.filter(elem => elem.finished)
        } else if (filter === "notfinished") {
            arr = books.filter(elem => !elem.finished)
        } else {
            arr = books
        }

        setBooksToShow(arr)
    }

    return (
        <div id="main-container">
            <Header action="Fazer Logout" />
            <div>
                <select onChange={filterBooks}>
                    <option value="all">Todos</option>
                    <option value="notfinished">Não terminados</option>
                    <option value="finished">Terminados</option>
                </select>
                <button>Adicionar livro</button>
            </div>
            <div className="cards">
                {booksToShow && booksToShow.map(elem => (
                    <div className="card">
                        <span className={elem.finished ? "finished" : "notfinished"}>{elem.finished ? "lido" : "lendo"}</span>
                        <img src={elem.bookCover}></img>
                        <h4>{elem.name}</h4>
                        <div className="buttons">
                            <button className="delete"><img src={deleteIcon}></img></button>
                            <button className="delete edit"><img src={editIcon}></img></button>
                            <button className="plus">Ver mais</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Main