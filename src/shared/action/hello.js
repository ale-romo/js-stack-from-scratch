// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
import { helloEndpointRoute } from '../../shared/routes'

export const SAY_HELLO = 'SAY_HELLO'
export const SAY_HELLO_ASYNC_REQUEST = 'SAY_HELLO_ASYNC_REQUEST'
export const SAY_HELLO_ASYNC_SUCCESS = 'SAY_HELLO_ASYNC_SUCCESS'
export const SAY_HELLO_ASYNC_FAILURE = 'SAY_HELLO_ASYNC_FAILURE'

export const WEATHER_REQUEST = 'WEATHER_REQUEST'
export const WEATHER_SUCCESS = 'WEATHER_SUCCESS'
export const WEATHER_FAILURE = 'WEATHER_FAILURE'

export const sayHello = createAction(SAY_HELLO)
export const sayHelloAsyncRequest = createAction(SAY_HELLO_ASYNC_REQUEST)
export const sayHelloAsyncSuccess = createAction(SAY_HELLO_ASYNC_SUCCESS)
export const sayHelloAsyncFailure = createAction(SAY_HELLO_ASYNC_FAILURE)

export const weatherRequest = createAction(WEATHER_REQUEST)
export const weatherSuccess = createAction(WEATHER_SUCCESS)
export const weatherFailure = createAction(WEATHER_FAILURE)

export const sayHelloAsync = (num: number) => (dispatch: Function) => {
  dispatch(sayHelloAsyncRequest())
  return fetch(helloEndpointRoute(num), { method: 'GET' })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      if (!data.serverMessage) throw Error('No message received')
      dispatch(sayHelloAsyncSuccess(data.serverMessage))
    })
    .catch(() => {
      dispatch(sayHelloAsyncFailure())
    })
}

export const weather = () => (dispatch: Function) => {
  dispatch(weatherRequest())
  return fetch('http://api.wunderground.com/api/c8f195e34e5a479d/forecast10day/q/CA/San_Diego.json', { method: 'GET' })
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res.json()
    })
    .then((data) => {
      if (!data.forecast.txt_forecast.date) throw Error('No message received')
      dispatch(weatherSuccess(data.forecast.txt_forecast.date))
    })
    .catch(() => {
      dispatch(weatherFailure())
    })
}
