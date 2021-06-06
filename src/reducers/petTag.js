import {
  PET_NAME_SETTED,
  PET_TAG_NUMBER_SETTED,
  GET_PET_TAG_ATTEMPTED,
  GET_PET_TAG_DONE,
  GET_PET_TAG_FAILED,
  // SET_PET_TAG_ATTEMPTED,
  // SET_PET_TAG_DONE,
  // SET_PET_TAG_FAILED,
} from '../actions/actionTypes/types';

const initialState = {
  petName: '',
  petTag: '',
  isLoadingData: false,
  isError: false,
  petsTag: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PET_NAME_SETTED:
      return {
        ...state,
        petName: action.petName,
      };
    case PET_TAG_NUMBER_SETTED:
      return {
        ...state,
        petTag: action.tagNumber,
      };
    case GET_PET_TAG_ATTEMPTED:
      return {
        ...state,
        isLoadingData: true,
      };
    case GET_PET_TAG_DONE:
      return {
        ...state,
        isLoadingData: false,
        petsTag: action.petsTag,
        isError: false,
      };
    case GET_PET_TAG_FAILED:
      return {
        ...state,
        isLoadingData: false,
        isError: true,
      };
    default:
      return state;
  }
}
