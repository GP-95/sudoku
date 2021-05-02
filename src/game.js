/**Shuffles an array randomly */
export function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1))
		var temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
}

/**Shifts an array by step amount */
export function shiftArray(arr, step = 0) {
	const newArray = []
	let counter = step
	while (newArray.length < 9) {
		if (counter === 9) {
			counter = 0
		}
		newArray.push(arr[counter])
		counter++
	}
	return newArray
}

/** Creates an array of 9 arrays, each containing 9 numbers */
export function createBoard() {
	//   Declare state
	const base = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	const newBoard = []

	//   Shuffle row
	shuffleArray(base)

	//   Create board
	while (newBoard.length < 9) {
		if (newBoard.length === 0) {
			newBoard.push(base)
		} else if (newBoard.length === 3 || newBoard.length === 6) {
			newBoard.push(shiftArray(newBoard[newBoard.length - 1], 1))
		} else {
			newBoard.push(shiftArray(newBoard[newBoard.length - 1], 3))
		}
	}
	return newBoard
}

/** Gets a random int in a range */
export function randomInRange(min, max) {
	return Math.floor(Math.random() * (max - min)) + min
}
