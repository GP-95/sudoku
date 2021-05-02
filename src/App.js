import './tailwind.css'
import { useEffect, useState } from 'react'
import { createBoard } from './game'
import Row from './components/Row'
import Button from './components/Button'

function App() {
	const [board, setBoard] = useState([])

	useEffect(() => {
		setBoard(createBoard())
	}, [])
	return (
		<main className='w-screen h-screen flex flex-col justify-center items-center'>
			<div className='flex justify-between w-[250px]'>
				<Button
					name='New Game'
					customStyle='bg-purple-500 text-gray-100 hover:bg-purple-600 shadow-md hover:shadow-none transition-colors transition-shadows'
					handleClick={() => setBoard(createBoard())}
				/>
				<Button
					name='Reset'
					type='reset'
					customStyle='bg-blue-600 text-gray-100 hover:bg-blue-700 shadow-md hover:shadow-none transition-colors transition-shadows'
					handleClick={() => alert('Todo')}
				/>
			</div>
			<div className='flex flex-col items-center justify-center bg-green-500 p-4 rounded-lg'>
				{board.map((row, index) => (
					<Row row={row} rowIndex={index} key={index} />
				))}
			</div>
		</main>
	)
}

export default App
