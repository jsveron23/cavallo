import { genericError } from 'thrown'
import { isNil } from 'ramda'
import { SIDE, TURN, OPPONENT } from './constants'

/**
 * Get side
 * @param  {String} text side or turn
 * @return {String}
 */
export function getSide (text) {
  if (isNil(text)) {
    throw genericError.create('getSide >')('undefined argument', { text })
  }

  const side = SIDE[text]

  if (isNil(side)) {
    throw genericError.create('getSide >')('invalid key', { text, side })
  }

  return side
}

/**
 * Get turn
 * @param  {String} text side or turn
 * @return {String}
 */
export function getTurn (text) {
  if (isNil(text)) {
    throw genericError.create('getTurn >')('undefined argument', { text })
  }

  const turn = TURN[text]

  if (isNil(turn)) {
    throw genericError.create('getTurn >')('invalid key', { text, turn })
  }

  return turn
}

/**
 * Get Opponent
 * @param  {String} text side or turn
 * @return {String}
 */
export function getOpponent (text) {
  if (isNil(text)) {
    throw genericError.create('getOpponent >')('undefined argument', { text })
  }

  const opponent = OPPONENT[text]

  if (isNil(opponent)) {
    throw genericError.create('getOpponent >')('invalid key', { text, opponent })
  }

  return opponent
}
