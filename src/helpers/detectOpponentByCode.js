import * as R from 'ramda'
import parseCode from './parseCode'
import { isEmpty } from '../utils'

const isNotEquals = R.complement(R.equals)

/**
 * Detect opponent
 * @param  {String}  side
 * @param  {String}  code
 * @return {Boolean}
 */
function detectOpponentByCode (side, code) {
  if (isEmpty(code)) {
    return false
  }

  return R.compose(
    isNotEquals(side),
    R.prop('side'),
    parseCode
  )(code)
}

export default R.curry(detectOpponentByCode)
