import { genericError } from 'thrown'
import { FILES } from './constants'

/**
 * Get file char
 * @param  {Number} fileNum
 * @return {String}
 */
export function getFile (fileNum) {
  if (typeof fileNum !== 'number') {
    throw genericError.create('getFile >')('invalid type', { fileNum })
  }

  return FILES[fileNum - 1] || ''
}
