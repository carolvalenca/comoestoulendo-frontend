import React from 'react'
import Modal from 'react-modal'

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

function BookModal({ elem, modalIsOpen, closeModal }) {

    function convertDate(data) {
        var date = new Date(data),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [day, mnth, date.getFullYear()].join("/");
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            id="book-modal-container"
            contentLabel="Example Modal"
        >
            <button className="close-button" onClick={closeModal}>
                <img src={cross}></img>
            </button>
            <h3>{elem.name}</h3>
            <img className="book-cover" src={elem.bookCover}></img>
            <div className="book-info">
                <p>Autor(a): </p>
                <span>{elem.author}</span>
            </div>
            <div className="book-info">
                <p>Quantidade de páginas:</p>
                <span>{elem.bookPages}</span>
            </div>
            <div className="book-info">
                <p>Última página lida:</p>
                <span>{elem.lastPage}</span>
            </div>
            <div className="book-info">
                <p>Média de páginas lidas por dia:</p>
                <span>{elem.pagesPerDay}</span>
            </div>
            <div className="book-info">
                <p>Dia de início da leitura:</p>
                <span>{convertDate(elem.startDate)}</span>
            </div>
            <div className="book-info">
                <p>Última atualização:</p>
                <span>{convertDate(elem.lastDate)}</span>
            </div>
            <div className="book-info">
                <p>Situação:</p>
                <span>{elem.finished ? "terminado" : "não terminado"}</span>
            </div>
        </Modal>
    )
}

export default BookModal