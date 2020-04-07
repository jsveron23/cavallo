import { SPECIALS } from '../constants'

/**
 * Get special
 * @param  {String} piece
 * @return {Array}
 */
export function getSpecial (piece) {
  if (typeof piece !== 'string') {
    throw new Error('invalid piece type')
  }

  return SPECIALS[piece.toUpperCase()] || []
}
