import { isNil } from 'ramda'
import { SIDE, TURN } from '../constants'

/**
 * Get side
 * @param  {String} text side or turn
 * @return {String} side, 1 character
 */
export function getSide (text) {
  if (isNil(text)) {
    throw new Error('Argument is undefined.')
  }

  const side = SIDE[text]

  if (isNil(side)) {
    throw new Error('`side` is invalid.')
  }

  return side
}

/**
 * Get turn
 * @param  {String} text side or turn
 * @return {String} side, 1 character
 */
export function getTurn (text) {
  if (isNil(text)) {
    throw new Error('Argument is undefined.')
  }

  const turn = TURN[text]

  if (isNil(turn)) {
    throw new Error('`turn` is invalid.')
  }

  return turn
}

/**
 * Get Opponent
 * @param  {String} text side or turn
 * @return {String} side, 1 character
 */
export function getOpponent (text) {
  if (isNil(text)) {
    throw new Error('Argument is undefined.')
  }

  const opponent = TURN[text]

  if (isNil(opponent)) {
    throw new Error('`opponent` is invalid.')
  }

  return opponent
}
