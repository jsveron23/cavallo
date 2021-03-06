import * as R from 'ramda'
import { parseCode } from '../helpers'
import { merge } from '../utils'

/**
 * Get next snapshot
 * @param  {String} selected prev
 * @param  {String} tile     next
 * @param  {Array}  snapshot prev
 * @return {Array}
 */
function getNextSnapshot (selected, tile, snapshot) {
  const { side, piece } = parseCode(selected)
  const mapCb = R.ifElse(
    R.equals(selected),
    () => merge.txt(side, piece, tile),
    R.identity
  )

  return snapshot.map(mapCb)
}

export default R.curry(getNextSnapshot)
