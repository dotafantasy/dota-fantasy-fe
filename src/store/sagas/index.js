import { fork } from 'redux-saga/effects';
import AuthSaga from './AuthSaga';

export default function* rootSaga() {
  yield [
    fork(AuthSaga),
    //fork(secondSaga),
    //fork(thirdSaga),
  ];
}
