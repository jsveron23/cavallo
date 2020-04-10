import { MOVEMENTS, SPECIALS } from './constants'

/**
 * Get normal movement
 * @param  {String} piece uppercase
 * @return {Array}
 */
export function getMovement (piece) {
  if (typeof piece !== 'string') {
    throw new Error('invalid piece type')
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
    throw new Error('invalid piece type')
  }

  return SPECIALS[piece.toUpperCase()] || []
}
