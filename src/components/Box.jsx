/* eslint-disable */
import { useEffect, useState, useContext } from 'react'
import { ScoreContext } from '../App'

function Box({ digit, columnIndex, hidden }) {
	const [boxValue, setBoxValue] = useState('')
	const { score, setScore } = useContext(ScoreContext)
	const [counted, setCounted] = useState(false)
	useEffect(() => {
		if (!hidden) {
			setBoxValue(digit)
			return
		}
		setBoxValue('')
	}, [hidden, digit])

	function handleChange(newValue) {
		setBoxValue(newValue)
		if (newValue == digit && !counted) {
			setScore((score) => score + 1)
			setCounted(true)
			return
		} else if (newValue != digit && counted) {
			setScore((score) => score - 1)
			setCounted(false)
			return
		}
	}

	return (
		<input
			className={` w-6 h-6 sm:w-8 sm:h-8 md:w-14 md:h-14 text-gray-700 bg-yellow-400 focus:bg-yellow-300 hover:bg-yellow-300 border rounded border-white cursor-pointer m-1 focus:outline-none text-center transition-color select-none ${
				columnIndex === 2 || columnIndex === 5 ? 'mr-3' : null
			}`}
			type='text'
			value={boxValue}
			minLength={1}
			maxLength={1}
			readOnly={!hidden}
			onChange={(e) => handleChange(e.target.value)}
			onClick={() => console.log(digit)}
		/>
	)
}

export default Box
