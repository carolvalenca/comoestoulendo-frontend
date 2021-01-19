import React from 'react'

import './style.css'

import deleteIcon from '../../assets/delete.svg'
import editIcon from '../../assets/pen.svg'

function BookCard({ elem, openModal, deleteBook }) {
    return (
        <div id="book-card-container">
            <span className={elem.finished ? "finished" : "notfinished"}>{elem.finished ? "lido" : "lendo"}</span>
            <img src={elem.bookCover}></img>
            <h4>{elem.name}</h4>
            <div className="buttons">
                <button className="delete" onClick={() => deleteBook(elem._id)}><img src={deleteIcon}></img></button>
                <button className="delete edit"><img src={editIcon}></img></button>
                <button className="plus" onClick={() => openModal(elem)}>Ver mais</button>
            </div>
        </div>
    )
}

export default BookCard