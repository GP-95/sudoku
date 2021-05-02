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

	if (!hidden) {
		return (
			<input
				tabIndex={-1}
				className={`sm:w-14 sm:h-14 w-8 h-8 text-gray-700 bg-yellow-400 focus:bg-yellow-300 hover:bg-yellow-300 border rounded border-white cursor-pointer m-1 focus:outline-none text-center transition-color ${
					columnIndex === 2 || columnIndex === 5 ? 'mr-3' : null
				}`}
				type='text'
				value={boxValue}
				readOnly
				onClick={() => console.log(digit)}
			/>
		)
	}

	return (
		<input
			className={`sm:w-14 sm:h-14 w-8 h-8 text-gray-700 bg-yellow-400 focus:bg-yellow-300 hover:bg-yellow-300 border rounded border-white cursor-pointer m-1 focus:outline-none text-center transition-color ${
				columnIndex === 2 || columnIndex === 5 ? 'mr-3' : null
			}`}
			type='text'
			value={boxValue}
			minLength={1}
			maxLength={1}
			onChange={(e) => setBoxValue(e.target.value)}
			onClick={() => console.log(digit)}
		/>
	)
}

export default Box
