function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1))
		var temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
}

function shiftArray(arr, step = 0) {
	const newArray = []
	let counter = step
	while (newArray.length < 9) {
		if (counter == 9) {
			counter = 0
		}
		newArray.push(arr[counter])
		counter++
	}
	return newArray
}

function createBoard() {
	//   Declare state
	const base = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	const newBoard = []

	//   Shuffle row
	shuffleArray(base)

	//   Create board
	while (newBoard.length < 9) {
		switch (true) {
			case 0(newBoard.length == 0 ? true : false):
				newBoard.push(base)
				break
			case 1(newBoard.length < 3 || newBoard.length ? true : false):
				newBoard.push(shiftArray(newBoard[newBoard.length - 1], 3))
				break
			case 2:
				newBoard.push(shiftArray(newBoard[newBoard.length - 1], 3))
				break
			case 3:
				newBoard.push(shiftArray(newBoard[newBoard.length - 1], 1))
				break
			case 4:
				newBoard.push(shiftArray(newBoard[newBoard.length - 1], 3))
				break
			case 5:
				newBoard.push(shiftArray(newBoard[newBoard.length - 1], 3))
				break
			case 6:
				newBoard.push(shiftArray(newBoard[newBoard.length - 1], 1))
				break
			case 7:
				newBoard.push(shiftArray(newBoard[newBoard.length - 1], 3))
				break
			case 8:
				newBoard.push(shiftArray(newBoard[newBoard.length - 1], 3))
				break
		}
	}
	console.log(newBoard)
}
