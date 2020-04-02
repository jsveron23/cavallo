import { isNil } from 'ramda'

const SIDE = {
  white: 'w',
  black: 'b',
  w: 'w',
  b: 'b'
}

/**
 * Get side
 * @param  {String} str side or turn
 * @return {String} side, 1 character
 */
function getSide (str) {
  if (isNil(str)) {
    throw new Error('undefined argument')
  }

  const side = SIDE[str]

  if (isNil(side)) {
    throw new Error('[side] is invalid')
  }

  return side
}

export default getSide
