import React, { useState } from 'react';
import { Form, FormGroup, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { modifyMovie } from '../redux/action';
import { useDispatch } from 'react-redux'

const ModalModify = (props) => {
  const {
    buttonLabel,
    className,
    movie
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [title, setTitle] = useState(movie.title)

  const dispatch = useDispatch()

  const handleModify = () => {
      dispatch(modifyMovie(movie._id, title))
      toggle()
  }

  return (
    <div>
      <Button color="success" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <Form>
                <FormGroup>
                    <Input type="text" value={title} onChange={e=>setTitle(e.target.value)} />
                </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleModify}>Confirm</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalModify;
