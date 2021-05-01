import { useEffect, useState } from 'react'

function Box({ digit, columnIndex, hidden }) {
	const [boxValue, setBoxValue] = useState('')
	useEffect(() => {
		if (!hidden) {
			setBoxValue(digit)
			return
		}

		setBoxValue('')
	}, [hidden, digit])
	return (
		<input
			className={`sm:w-14 sm:h-14 w-8 h-8 text-gray-50 bg-gray-900 focus:bg-gray-700 hover:bg-gray-600 hover:border-blue-400 hover:border-opacity-50 focus:border-blue-400 focus:border-opacity-80 cursor-pointer border-2 border-transparent m-1 focus:outline-none text-center transition-color ${
				columnIndex === 2 || columnIndex === 5 ? 'mr-3' : null
			}`}
			type='text'
			value={boxValue}
			onChange={(e) => setBoxValue(e.target.value)}
			onClick={() => console.log(digit)}
		/>
	)
}

export default Box
