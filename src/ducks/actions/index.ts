import streams from '../../apis/streams'
import { 
  SIGN_IN, 
  SIGN_OUT, 
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM, 
} from "./types";

export const signIn = (userId: string) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = ( formValues: any ) => async( dispatch: any, getState: any ) => {
  const { userId } = getState().auth;

  const response = await streams.post('/streams', { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
};

export const fetchStreams = () => async ( dispatch: any ) => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = ( id: string ) => async (dispatch: any) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const deleteStream = ( id: string ) => async (dispatch: any) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id })
};

export const editStream = ( id: string, formValues: string ) => async (dispatch: any) => {
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
};