import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPetName, setPetTag } from '../slices/petTag';
import { useSetPetTagFromAPIMutation } from '../services/api';
import './PetTagForm.css';

const PetTagForm = () => {
  const store = useSelector(({ petTag }) => ({ petTag }));
  const { petTag: { petName, petTag } } = store;
  const dispatch = useDispatch();

  const body = { petName, petTag };

  const [setPetTagFromAPI] = useSetPetTagFromAPIMutation();

  function handlePetName(event) {
    dispatch(setPetName({ petName: event.target.value }));
  }

  function handlePetTag(event) {
    dispatch(setPetTag({ petTag: event.target.value }));
  }

  return (
    <div className="ContainerForm">
      <div>
        <span>Pet name:</span>
        <input className="InputForm" type="text" onChange={handlePetName} value={petName} />
      </div>
      <div>
        <span>Pet tag:</span>
        <input className="InputForm" type="text" onChange={handlePetTag} value={petTag} />
      </div>

      <button type="button" onClick={() => setPetTagFromAPI({ body })}>Create Pet Tag</button>
    </div>
  );
};

export default PetTagForm;
