import React from 'react';
import { useGetPetTagFromAPIQuery } from '../services/api';
import './PetTagList.css';

const PetTagList = () => {
  const { isLoading: isLoadingData, isError, data: petsTag } = useGetPetTagFromAPIQuery();

  return (
    <div className="ListContainer">
      {isLoadingData && <span>Cargando ...</span>}

      {isError && <span>Error algo salio mal</span>}

      {!isLoadingData && !isError && petsTag.map((pt) => (
        <div className="ListRow" key={pt.id}>
          <span>{pt.petName}</span>
          <span>{pt.petTag}</span>
        </div>
      ))}
    </div>
  );
};

export default PetTagList;
