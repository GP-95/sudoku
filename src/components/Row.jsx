import Box from './Box'
import { randomInRange } from '../game'
import { useEffect, useState, useContext } from 'react'
import { ScoreContext } from '../App'

function Row({ row, rowIndex }) {
	const [hiddenBoxes, setHiddenBoxes] = useState([])
	const { setScore } = useContext(ScoreContext)

	useEffect(() => {
		const numOfHiddenField = randomInRange(6, 9)
		const boxArr = []
		for (let i = 0; i < numOfHiddenField; i++) {
			let randomDigit = randomInRange(0, 9)
			while (boxArr.includes(randomDigit)) {
				randomDigit = randomInRange(0, 9)
			}
			boxArr.push(randomDigit)
		}
		setHiddenBoxes(boxArr)
		setScore((score) => score + 9 - numOfHiddenField)
	}, [row])

	return (
		<div className={`${rowIndex === 2 || rowIndex === 5 ? 'mb-3' : null}`}>
			{row.map((digit, index) => (
				<Box
					digit={digit}
					columnIndex={index}
					key={digit}
					hidden={hiddenBoxes.includes(index) ? true : false}
				/>
			))}
		</div>
	)
}
export default Row
