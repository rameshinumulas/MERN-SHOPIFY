import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ModalCom(props) {
  const { isOpen, handleCloseModal, modalTitle, children, closeTitle, submitTitlte,
    handleSubmitModal } = props;
  return (
    <div>
      <Modal
        show={isOpen}
        onHide={() => handleCloseModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            {closeTitle}
          </Button>
          <Button variant="primary" onClick={handleSubmitModal}>
            {submitTitlte}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
