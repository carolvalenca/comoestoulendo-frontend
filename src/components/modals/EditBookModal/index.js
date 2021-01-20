import React, { useState } from 'react'
import Modal from 'react-modal'
import { Alert } from 'reactstrap';

import './style.css'

import cross from '../../assets/cross.svg'

const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '42.6rem',
      padding: '2.5rem 4rem',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,.3)',
    }
  };

function EditBookModal({ elem, modalIsOpen, closeModal, handleEditForm }) {
    const [bookStatus, setBookStatus] = useState("notfinished");
    const [lastPage, setLastPage] = useState();
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const onDismiss = () => {
        setOpen(false)
    };

    async function openAlert(message) {
        await setOpen(true);
        await setAlertMessage(message)
        setTimeout(() => {
            setOpen(false)
        }, 2000)
    }

    async function handleForm(event) {
        event.preventDefault()
        console.log(lastPage)
        switch (bookStatus) {
            case "finished":
                console.log("TERMINADO")
                handleEditForm({ bookId: elem._id, lastPage: elem.bookPages, bookStatus })
                closeModal()
                setLastPage()
                break
            case "notfinished":
                console.log("NAO TERMINADO")
                if (lastPage > elem.bookPages) {
                    openAlert("nº de paginas superior ao total de paginas do livro")
                } else if (lastPage < elem.lastPage) {
                    openAlert("nº de paginas menor que a ultima pagina")
                } else {
                    handleEditForm({ bookId: elem._id, lastPage, bookStatus })
                    closeModal()
                    setLastPage()
                }
                break
        }
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            id="book-modal-container"
            contentLabel="Example Modal"
            ariaHideApp={false}
        >
            <button className="close-button" onClick={closeModal}>
                <img src={cross}></img>
            </button>
            <h3>{elem.name}</h3>
            <Alert color="danger" isOpen={open} toggle={onDismiss}>
                {alertMessage}
            </Alert>
            <form onSubmit={handleForm}>
                <div>
                    <input type="radio" value="finished" checked={bookStatus === "finished"} onChange={(e) => setBookStatus(e.target.value)}></input> Terminado
                </div>
                <div>
                    <input type="radio" value="notfinished" checked={bookStatus === "notfinished"} onChange={(e) => setBookStatus(e.target.value)}></input> Não terminado
                </div>
                {bookStatus === "notfinished" && <input type="number" value={lastPage} onChange={(e) => setLastPage(e.target.value)} placeholder="última página lida"></input>}
                <button type="submit" value="send">Salvar alterações</button>
            </form>
        </Modal>
    )
}

export default EditBookModal