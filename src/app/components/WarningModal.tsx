import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ContactEmail from '../../common/components/ContactEmail';

interface WarningModalProps {
  show: boolean;
  handleClose: () => void;
}

const WarningModal: React.FC<WarningModalProps> = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Nous contacter</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Si votre client de messagerie ne s'ouvre pas, veuillez nous envoyer un email à <ContactEmail />.
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default WarningModal;
