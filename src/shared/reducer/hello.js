// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  SAY_HELLO,
  SAY_HELLO_ASYNC_REQUEST,
  SAY_HELLO_ASYNC_SUCCESS,
  SAY_HELLO_ASYNC_FAILURE,
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_FAILURE,
} from '../action/hello'

const initialState = Immutable.fromJS({
  message: 'Initial reducer message',
  messageAsync: 'Initial reducer message for async call',
  weatherMessage: 'Initial reducer message for weather call',
})

const helloReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SAY_HELLO:
      return state.set('message', action.payload)
    case SAY_HELLO_ASYNC_REQUEST:
      return state.set('messageAsync', 'Loading...')
    case SAY_HELLO_ASYNC_SUCCESS:
      return state.set('messageAsync', action.payload)
    case SAY_HELLO_ASYNC_FAILURE:
      return state.set('messageAsync', 'No message received, please check your connection')
    case WEATHER_REQUEST:
      return state.set('weatherMessage', 'Loading...')
    case WEATHER_SUCCESS:
      return state.set('weatherMessage', action.payload)
    case WEATHER_FAILURE:
      return state.set('weatherMessage', 'No message received, please check your connection weather')
    default:
      return state
  }
}

export default helloReducer
