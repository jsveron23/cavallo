/**
 * Columns
 * @type {Array}
 */
export const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

/**
 * Rows
 * @type {Array}
 */
export const RANKS = ['8', '7', '6', '5', '4', '3', '2', '1']

export const SIDE = {
  white: 'w',
  black: 'b',
  w: 'w',
  b: 'b'
}

export const TURN = {
  white: 'white',
  black: 'black',
  w: 'white',
  b: 'black'
}

export const OPPONENT = {
  white: 'black',
  black: 'white',
  w: 'black',
  b: 'white'
}

export const DARK_TILES = ['b', 'd', 'f', 'h']

export const LIGHT_TILES = ['a', 'c', 'e', 'g']

export const SNAPSHOT_WHITE = [
  'wPa2', 'wPb2', 'wPc2', 'wPd2', 'wPe2', 'wPf2', 'wPg2', 'wPh2',
  'wRa1', 'wNb1', 'wBc1', 'wQd1', 'wKe1', 'wBf1', 'wNg1', 'wRh1'
]

export const SNAPSHOT_BLACK = [
  'bRa8', 'bNb8', 'bBc8', 'bQd8', 'bKe8', 'bBf8', 'bNg8', 'bRh8',
  'bPa7', 'bPb7', 'bPc7', 'bPd7', 'bPe7', 'bPf7', 'bPg7', 'bPh7'
]

/**
 * Movements
 * [x, y] - axis
 * @type {Object}
 */
export const MOVEMENTS = {
  B: [
    [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7],
    [-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6], [-7, 7],
    [1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6], [7, -7],
    [-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6], [-7, -7]
  ],
  K: [
    [0, -1], [0, 1], [-1, 0], [1, 0], [-1, -1], [-1, 1], [1, -1], [1, 1]
  ],
  N: [
    [-1, -2], [-1, 2], [1, -2], [1, 2], [-2, -1], [-2, 1], [2, -1], [2, 1]
  ],
  P: [
    [0, 1]
  ],
  Q: [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
    [0, -1], [0, -2], [0, -3], [0, -4], [0, -5], [0, -6], [0, -7],
    [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0],
    [-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0], [-6, 0], [-7, 0],
    [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7],
    [-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6], [-7, 7],
    [1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6], [7, -7],
    [-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6], [-7, -7]
  ],
  R: [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
    [0, -1], [0, -2], [0, -3], [0, -4], [0, -5], [0, -6], [0, -7],
    [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0],
    [-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0], [-6, 0], [-7, 0]
  ]
}

/**
 * Special movements
 * @type {Object}
 */
export const SPECIALS = {
  K: ['castling'],
  N: ['jumpover'],
  P: ['doubleStep', 'enPassant', 'promotion']
}
