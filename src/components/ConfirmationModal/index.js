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

function ConfirmationModal({ modalIsOpen, closeModal }) {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            id="confirmation-modal-container"
            contentLabel="Example Modal"
        >
            <p>tem certeza que deseja excluir este registro?</p>
        </Modal>
    )
}

export default ConfirmationModal