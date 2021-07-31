import React from 'react';
import Button from './Button';
import '../styles/Modal.css';

const ModalEdit = props => {
  const { modalState, close, data, del } = props;
  const delById = id => del(id)

  if (!modalState) {
    return null;
  }

  return (
    <div className="modal__container">
      <div className="modal">
        <div className="modal__header">
          <h3 className="modal__title"> Delete Task</h3>
        </div>
        <div className="modal__body">
          <p> 
            Delete
            <span>{" "}"{data.title}"{" "} </span>
            from list ?
          </p>
        </div>
        <div className="modal__footer">
          <div className="btn__group">
            <Button variant="danger" text="Cancel" action={() => close('delete')}/>
            <Button variant="success" text="Delete" action={() => delById(data.id)}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalEdit;