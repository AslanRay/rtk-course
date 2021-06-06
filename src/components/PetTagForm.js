import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPetName, setPetTag } from '../actions/actionCreators/petTag';
import './PetTagForm.css';

const PetTagForm = () => {
  const store = useSelector(({ petTag }) => ({ petTag }));
  const { petTag: { petName, petTag } } = store;
  const dispatch = useDispatch();

  return (
    <div className="ContainerForm">
      <div>
        <span>Pet name:</span>
        <input className="InputForm" type="text" onChange={(e) => dispatch(setPetName({ petTag: e.target.value }))} value={petName} />
      </div>
      <div>
        <span>Pet tag:</span>
        <input className="InputForm" type="text" onChange={(e) => dispatch(setPetTag({ tagNumber: e.target.value }))} value={petTag} />
      </div>

      <button type="button" onClick={() => {}}>Create Pet Tag</button>
    </div>
  );
};

export default PetTagForm;
