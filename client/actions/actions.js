/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes';

export const addCard = (marketId) => ({
  type: types.ADD_CARD,
  payload: marketId,
});

export const deleteCard = (marketId) => ({
  type: types.DELETE_CARD,
  payload: marketId,
});

export const setNewLocation = (text) => ({
  type: types.SET_NEW_LOCATION,
  payload: text,
});

export const addMarket = (text) => ({
  type: types.ADD_MARKET,
  payload: text,
});

// add more action creators
