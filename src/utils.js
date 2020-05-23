import * as R from 'ramda'

const isNotBoolean = R.complement(R.is)(Boolean)

/**
 * @param  {String}   fnName
 * @return {Function}
 */
function _isEmpty (fnName) {
  /**
   * @param  {...*}    [...args]
   * @return {Boolean}
   */
  return (...args) => {
    const fn = args[fnName].bind(args)

    return fn((x) => R.isEmpty(x) || R.isNil(x))
  }
}

/**
 * @param  {String}   fnName
 * @return {Function}
 */
function _isExist (fnName) {
  /**
   * @param  {...*}    [...args]
   * @return {Boolean}
   */
  return (...args) => {
    const fn = args[fnName].bind(args)

    return fn((x) => !(R.isEmpty(x) || R.isNil(x)))
  }
}

/**
 * Merge object
 * @param  {Object} a
 * @param  {Object} b
 * @return {Object}
 */
const _mergeObj = R.curry(function _mergeObj (a, b) {
  // only allow 2 arguments
  return R.mergeWith(R.identity)(a, b)
})

/**
 * Merge text
 * @param  {...String} [...args]
 * @return {String}
 */
function _mergeTxt (...args) {
  if (isEmpty.or(...args)) {
    return ''
  }

  return ''.concat(...args)
}

/**
 * Is value empty?
 * @param  {*}       v
 * @return {Boolean}
 */
function isEmpty (v) {
  return R.isEmpty(v) || R.isNil(v)
}

isEmpty.and = _isEmpty('every')
isEmpty.or = _isEmpty('some')
isEmpty.lazy = R.thunkify(isEmpty)

/**
 * Is value exist?
 * @param  {*}       v
 * @return {Boolean}
 */
function isExist (v) {
  return !(R.isEmpty(v) || R.isNil(v))
}

isExist.and = _isExist('every')
isExist.or = _isExist('some')
isExist.lazy = R.thunkify(isExist)

/**
 * Simple merge
 * @param  {...Object} [...args]
 * @return {Object}
 */
function merge (...args) {
  return R.curry(_mergeObj).apply(null, args)
}

merge.txt = R.curry(_mergeTxt)

/**
 * Pass value if true, otherwise empty string
 * @param  {Boolean} is
 * @param  {*}       v
 * @return {*}
 */
const pass = R.curry(function pass (is, v) {
  if (isNotBoolean(is)) {
    throw new Error('Only accept boolean type!')
  }

  return is ? v : ''
})

/**
 * Is even number?
 * @param  {Number}  num
 * @return {Boolean}
 */
function isEven (num) {
  if (typeof num !== 'number') {
    throw new Error('This is not number!')
  }

  return num % 2 === 0
}

/**
 * Decide which function will use (only 2 options is allowed to use)
 * @param  {Array}    fns
 * @param  {Array}    args
 * @param  {Function} cb
 * @return {Array}
 */
const either = R.curry(function either (fns, args, cb) {
  if (fns.length !== 2 || args.length !== 2) {
    throw new Error('It is not same length!')
  }

  if (typeof cb !== 'function') {
    throw new Error('Callback is not function!')
  }

  const [a, b] = args
  const bool = cb(a, b)

  if (isNotBoolean(bool)) {
    throw new Error('Callback did not return boolean!')
  }

  const fn = bool ? fns[0] : fns[1]

  return fn(a, b)
})

/**
 * Simple increase
 * @param  {Number} from
 * @param  {Number} to
 * @return {Array}
 */
const increase = R.curry(function increase (from, to) {
  if (from > to) {
    throw new Error('from is bigger than to!')
  }

  return R.range(from, to)
})

/**
 * Simple decrease
 * @param  {Number} from
 * @param  {Number} to
 * @return {Array}
 */
const decrease = R.curry(function decrease (from, to) {
  if (from < to) {
    throw new Error('to is bigger than from!')
  }

  return R.compose(
    R.reverse,
    R.range(to + 1)
  )(from + 1)
})

/**
 * Delays a calculation until its result is needed
 * @param  {*}        v
 * @return {Function}
 */
function lazy (v) {
  return R.thunkify(R.identity)(v)
}

export { isEmpty, isExist, isEven, merge, pass, either, increase, decrease, lazy }
