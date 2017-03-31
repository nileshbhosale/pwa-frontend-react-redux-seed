import { call, put } from "redux-saga/effects";



// fetch the user's list
export function* fetchData(action) {
  // call the api to get the users list
  const data = Data;
  
  // save the data from file in state
  yield put({
    type : 'SAVE_DATA',
  });
}
