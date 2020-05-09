import { genericError } from 'thrown'
import { MOVEMENTS, SPECIALS } from './constants'

/**
 * Get normal movement
 * @param  {String} piece uppercase
 * @return {Array}
 */
export function getMovement (piece) {
  if (typeof piece !== 'string') {
    throw genericError.create('getMovement >')('invalid type', { piece })
  }

  return MOVEMENTS[piece.toUpperCase()] || []
}

/**
 * Get special movement
 * @param  {String} piece
 * @return {Array}
 */
export function getSpecial (piece) {
  if (typeof piece !== 'string') {
    throw genericError.create('getSpecial >')('invalid type', { piece })
  }

  return SPECIALS[piece.toUpperCase()] || []
}
