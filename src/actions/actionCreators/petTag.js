import {
  PET_NAME_SETTED,
  PET_TAG_NUMBER_SETTED,
  GET_PET_TAG_ATTEMPTED,
  GET_PET_TAG_DONE,
  GET_PET_TAG_FAILED,
  SET_PET_TAG_ATTEMPTED,
  SET_PET_TAG_DONE,
  SET_PET_TAG_FAILED,
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
      dispatch({ type: SET_PET_TAG_ATTEMPTED });

      const response = await fetch('http://localhost:3001/petTag');
      const payload = await response.json();

      if (payload.length) {
        dispatch({ type: GET_PET_TAG_DONE, petsTag: payload });
      } else {
        dispatch({ type: GET_PET_TAG_FAILED });
      }
    } catch (_) {
      dispatch({ type: GET_PET_TAG_FAILED });
    }
  };
}

export function setPetTagFromAPI({ body }) {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_PET_TAG_ATTEMPTED });

      const response = await fetch('http://localhost:3001/petTag', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const payload = await response.json();

      if (payload.ok) {
        dispatch({ type: SET_PET_TAG_DONE });
      } else {
        dispatch({ type: SET_PET_TAG_FAILED });
      }
    } catch (_) {
      dispatch({ type: SET_PET_TAG_FAILED });
    }
  };
}
