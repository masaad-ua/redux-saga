import { saga as peopleSaga } from '../ducks/ducksListOfUsers'
import { saga as authSaga } from '../ducks/itemList'
import { all } from 'redux-saga/effects'

export default function * rootSaga() {
    yield all([
        peopleSaga()
        //, authSaga()
    ])
}