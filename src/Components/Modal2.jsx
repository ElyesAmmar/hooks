import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function OpenModal({add,addtitle,adddescription,addimage,addrating}) {
  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
         <Modal.Body >
          <form>
              <label>
              Title:
              <input type="text" name="title" onChange={addtitle} />
              </label>
              <label>
              PosterURL:
              <input type="text" name="PosterURL" onChange={addimage} />
              </label>
              <label>
              Description:
              <input type="text" name="Description" onChange={adddescription} />
              </label>
              <label>
              rating:
              <input type="number" name="rating" onChange={addrating} />
              </label>
              
          </form>
     

         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={add}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OpenModal;