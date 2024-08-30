const _state = {
  settings: {
    gridSize: {
      rowsCount: 4,
      columnsCount: 4,
    }
  },
  points: {
    google: 12,
    players: [10, 11]
  },
  positions: {
    google: {
      x:0, y:3
    },
    players: [
      {x:2, y:2},
      {x:3, y:3}
    ]
  }
}



function _getPlayerIndexByNumber(playerNumber) {
  const playerIndex = playerNumber - 1
  if (playerIndex < 0 || playerIndex > _state.positions.players.length - 1) {
    throw new Error('Incorrect player number')
  }
  return playerIndex
}


//OBSERVER

let _observers = []

export function subscribe(observer) {
  _observers.push(observer)
}

export function unsubscribe(observer) {
  _observers = _observers.filter(o => o !== observer)
}

function _notifyObservers() {
  _observers.forEach(observer => {
    try {
      observer()
    } catch (error) {
      console.error(error)
    }
  })
}

setInterval(() => {
  _state.positions.google = { x: 2, y: 3 }
  _state.points.google++
  _notifyObservers()
}, 1000)

//INTERFACE/ADAPTER

export async function getGooglePoints() {
  return _state.points.google
}

/**
 * 
 * @param {number} playerNumber - one-based index of player
 * @returns {Promise<number>} number of points
 */
export async function getPlayerPoints(playerNumber) {
  const playerIndex = _getPlayerIndexByNumber(playerNumber)
  return _state.points.players[playerIndex]
}

/**
 * 
 * @param {number} playerNumber - one-based index of player
 * @returns {Promise<number>} number of points
 */
export async function getGridSize() {
  return {..._state.settings.gridSize}
}

export async function getGooglePosition() {
  return {..._state.positions.google}
}

export async function getPlayerPosition(playerNumber) {
  const playerIndex = _getPlayerIndexByNumber(playerNumber)
  return {..._state.positions.players[playerIndex]}
}