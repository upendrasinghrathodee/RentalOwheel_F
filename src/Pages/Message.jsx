import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Message(props){ 
    return <>
     <Modal show={props.showw} 
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{props.content}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
    </>
}

export default Message