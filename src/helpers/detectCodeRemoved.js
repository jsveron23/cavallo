import * as R from 'ramda'
import findCode from './findCode'
import { isEmpty } from '../utils'

/**
 * Detect whether code removed from snapshot
 * @param  {String}  code
 * @param  {Array}   snapshot
 * @return {Boolean}
 */
function detectCodeRemoved (code, snapshot) {
  return R.compose(
    isEmpty,
    findCode(snapshot)
  )(code)
}

export default R.curry(detectCodeRemoved)
