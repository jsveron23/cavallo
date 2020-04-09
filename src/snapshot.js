import { isNil } from 'ramda'
import { SNAPSHOT_WHITE, SNAPSHOT_BLACK } from './constants'

const FOR_WHITE = [...SNAPSHOT_BLACK, ...SNAPSHOT_WHITE]
const FOR_BLACK = [...SNAPSHOT_WHITE, ...SNAPSHOT_BLACK]

const SNAPSHOT_MAP = {
  w: FOR_WHITE,
  b: FOR_BLACK,
  white: FOR_WHITE,
  black: FOR_BLACK
}

/**
 * Get initial snapshot
 * @param  {String} text side or turn
 * @return {Array}
 */
export function getSnapshot (text) {
  if (isNil(text)) {
    throw new Error('undefined argument')
  }

  const snapshot = SNAPSHOT_MAP[text]

  if (isNil(snapshot)) {
    throw new Error('invalid string is provided')
  }

  return snapshot
}
