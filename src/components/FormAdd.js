import React, { useState } from 'react';
import { Form, FormGroup, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch } from 'react-redux'
import { addMovie } from '../redux/action';

const FormAdd = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [rate, setRate] = useState(null)

  const handleAdd = () => {
    dispatch(addMovie({title, rate}));
    setRate(null)
    setTitle('')
    toggle()
  }

  return (
    <div>
      <Button color="warning" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>set movie details</ModalHeader>
        <ModalBody>
            <Form>
                <FormGroup>
                    <Input type="text" placeholder='movie title' value={title} onChange={e=>setTitle(e.target.value)}/>
                    <Input type="number" placeholder='movie rate' min='1' max='5'value={rate} onChange={e=>setRate(e.target.value)}/>
                </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAdd}>Add Movie</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default FormAdd;
