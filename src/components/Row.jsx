import Box from './Box'
import { randomInRange } from '../game'
import { useEffect, useState } from 'react'

function Row({ row, rowIndex }) {
	const [hiddenBoxes, setHiddenBoxes] = useState([])
	useEffect(() => {
		const numOfHiddenField = randomInRange(5, 8)
		const boxArr = []
		for (let i = 0; i < numOfHiddenField; i++) {
			let randomDigit = randomInRange(0, 9)
			while (boxArr.includes(randomDigit)) {
				randomDigit = randomInRange(0, 9)
			}
			boxArr.push(randomDigit)
		}
		setHiddenBoxes(boxArr)
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
