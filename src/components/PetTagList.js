import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPetTagFromAPI } from '../actions/actionCreators/petTag';
import './PetTagList.css';

const PetTagList = () => {
  const store = useSelector(({ petTag }) => ({ petTag }));
  const dispatch = useDispatch();
  const { petTag: { petsTag, isLoadingData, isError } } = store;

  useEffect(() => {
    dispatch(getPetTagFromAPI());
  }, [dispatch]);

  return (
    <div className="ListContainer">
      {isLoadingData && <span>Cargando ...</span>}

      {isError && <span>Error algo salio mal</span>}

      {!isLoadingData && !isError && petsTag.map((pt) => (
        <div className="ListRow" key={pt.id}>
          <span>{pt.petName}</span>
          <span>{pt.tagNumber}</span>
        </div>
      ))}
    </div>
  );
};

export default PetTagList;
