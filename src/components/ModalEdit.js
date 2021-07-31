import React from 'react';
import Button from './Button';
import '../styles/Modal.css';

const ModalEdit = props => {
  const { modalState, close, data, edit, update } = props;

  if (!modalState) {
    return null;
  }

  return (
    <div className="modal__container">
      <div className="modal">
        <div className="modal__header">
          <h3 className="modal__title"> Edit Task </h3>
        </div>
        <div className="modal__body">
          <input type="text" value={data.title} onChange={edit}/>
        </div> 
        <div className="modal__footer">
          <div className="btn__group">
            <Button variant="danger" text="Cancel" action={() => close('edit')}/>
            <Button variant="success" text="Edit" action={update}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalEdit;