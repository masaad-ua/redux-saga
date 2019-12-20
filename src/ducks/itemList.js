import {all, cps, call, put, take, takeEvery} from 'redux-saga/effects'

export const ITEM_REQUEST = `ITEM_REQUEST`;

export function zitemsRequest(url){
    return {
        type: ITEM_REQUEST,
        payload: url
    }
}

export function zitemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function zitemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function zitemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function * itemsFetchDataSaga(url){
        yield put(aitemsIsLoading(true));
        fetch(url)
            .then((response) =>{
                if(!response.ok){
                    throw Error(response.status)
                }
                yield put(zitemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items)=> yield put(zitemsFetchDataSuccess(items)))
            .catch(()=> yield put(zitemsHasErrored(true)));
}

export function  itemsHasErrored(state = false, action) {
    switch(action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}


export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}

export const saga = function * () {
    yield takeEvery( ITEM_REQUEST, itemsFetchDataSaga)
};


/*Каждый редьюсер будет возвращать отдельное свойство состояния,
не зависимо от того сколько условий в этом редьюсере.
Мне нужно было некоторое время, чтобы это понять. */


/*По умолчанию создатели действий в Redux не поддерживают асинхронные действия, такие как получение данных,
поэтому мы будем использовать Redux Thunk.
Thunk позволяет нам писать создатели действий, которые возвращают функцию вместо самого действия.
Эта внутренняя функция может в качестве параметров принимать методы хранилища
(store) такие как dispatch и getState,
но мы будем использовать только dispatch.
По настоящему простым примером может быть отправка действия itemsHasErrored() через пять секунд.*/