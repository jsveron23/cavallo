import { isNil } from 'ramda'

// prettier-ignore
const WHITE = [
  'wPa2', 'wPb2', 'wPc2', 'wPd2', 'wPe2', 'wPf2', 'wPg2', 'wPh2',
  'wRa1', 'wNb1', 'wBc1', 'wQd1', 'wKe1', 'wBf1', 'wNg1', 'wRh1'
]

// prettier-ignore
const BLACK = [
  'bRa8', 'bNb8', 'bBc8', 'bQd8', 'bKe8', 'bBf8', 'bNg8', 'bRh8',
  'bPa7', 'bPb7', 'bPc7', 'bPd7', 'bPe7', 'bPf7', 'bPg7', 'bPh7'
]

const FOR_WHITE = [...BLACK, ...WHITE]
const FOR_BLACK = [...WHITE, ...BLACK]

const SNAPSHOT_MAP = {
  w: FOR_WHITE,
  white: FOR_WHITE,
  b: FOR_BLACK,
  black: FOR_BLACK
}

/**
 * Get initial snapshot
 * @param  {String} str side or turn
 * @return {Array}
 */
function getSnapshot (str) {
  if (isNil(str)) {
    throw new Error('undefined argument')
  }

  const snapshot = SNAPSHOT_MAP[str]

  if (isNil(snapshot)) {
    throw new Error('invalid string is provided')
  }

  return snapshot
}

export default getSnapshot
