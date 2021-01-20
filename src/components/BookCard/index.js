import React, { useState } from 'react'

import './style.css'

import deleteIcon from '../../assets/delete.svg'
import editIcon from '../../assets/pen.svg'

import EditBookModal from '../modals/EditBookModal'

function BookCard({ elem, openModal, deleteBook, openEditModal, handleEditForm }) {
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);

    function closeEditModal(){
        setEditModalIsOpen(false);
    }

    function openEditModal() {
        setEditModalIsOpen(true);
    }

    return (
        <div id="book-card-container">
            <EditBookModal elem={elem} modalIsOpen={editModalIsOpen} closeModal={closeEditModal} handleEditForm={handleEditForm}/>
            <span className={elem.finished ? "finished" : "notfinished"}>{elem.finished ? "lido" : "lendo"}</span>
            <img src={elem.bookCover}></img>
            <h4>{elem.name}</h4>
            <div className="buttons">
                <button className="delete" onClick={() => deleteBook(elem._id)}><img src={deleteIcon}></img></button>
                {!elem.finished && <button className="delete edit" onClick={() => openEditModal()}><img src={editIcon}></img></button>}   
                <button className="plus" onClick={() => openModal(elem)}>Ver mais</button>
            </div>
        </div>
    )
}

export default BookCard