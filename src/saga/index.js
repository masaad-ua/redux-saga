//import { saga as peopleSaga } from '../ducks/ducksListOfUsers'
import { saga as itemListSaga } from '../ducks/itemList'
import { all } from 'redux-saga/effects'

export default function * rootSaga() {
    yield all([
       // peopleSaga()
        itemListSaga()
    ])
}