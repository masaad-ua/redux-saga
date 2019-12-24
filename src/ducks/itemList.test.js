import {all, cps, call, put, take, takeEvery} from 'redux-saga/effects'

import {
    itemsFetchDataSaga,
    itemsHasErrored,
    itemsIsLoading,
    items, zitemsIsLoading
} from './itemList'


/**
 * Saga tests
 * */

it('should fetch data', () => {
    const saga = itemsFetchDataSaga();
    const url = 'http://5826ed963900d612000138bd.mockapi.io/items';
    const response =  fetch(url);

    expect(saga.next().value).toEqual(put(zitemsIsLoading(true)));
    expect(saga.next().value).not.toBeNull();



});