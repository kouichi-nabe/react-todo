import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import styles from './TodoForm.module.scss'

export default function TodoForm() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
        <button onClick={openModal} type="button" className={ styles.openBtn }></button>
        <Modal isOpen={isOpen} closeModal={closeModal}
        />
    </div>
  )
}
