import {
  PET_NAME_SETTED,
  PET_TAG_NUMBER_SETTED,
  GET_PET_TAG_ATTEMPTED,
  // GET_PET_TAG_DONE,
  // GET_PET_TAG_FAILED,
  // SET_PET_TAG_ATTEMPTED,
  // SET_PET_TAG_DONE,
  // SET_PET_TAG_FAILED,
} from '../actionTypes/types';

export function setPetName({ petName }) {
  return { type: PET_NAME_SETTED, petName };
}

export function setPetTag({ tagNumber }) {
  return { type: PET_TAG_NUMBER_SETTED, tagNumber };
}

export function getPetTagFromAPI() {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_PET_TAG_ATTEMPTED });

      const response = await fetch('http://localhost:3001/petTag');
      const payload = await response.json();
      console.log(payload);
    } catch (_) {
      //
    }
  };
}
