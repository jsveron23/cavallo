import { FILES } from './constants'

/**
 * Get file char
 * @param  {Number} fileNum
 * @return {String}
 */
export function getFile (fileNum) {
  if (typeof fileNum !== 'number') {
    throw new Error('invalid type')
  }

  return FILES[fileNum - 1] || ''
}
