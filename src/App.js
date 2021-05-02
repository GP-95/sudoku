import './tailwind.css'
import { createContext, useEffect, useState } from 'react'
import { createBoard } from './game'
import Row from './components/Row'
import Button from './components/Button'

export const ScoreContext = createContext()

function App() {
	const [board, setBoard] = useState([])
	const [score, setScore] = useState(0)

	useEffect(() => {
		setBoard(createBoard())
	}, [])

	useEffect(() => {
		if (score == 81) {
			alert('🎉 		You won!		🎉')
		}
	}, [score])
	return (
		<main className='w-screen h-screen flex flex-col justify-center items-center'>
			<div className='flex justify-center w-[250px]'>
				<Button
					name='New Game'
					customStyle='bg-purple-700 text-gray-100 hover:bg-purple-600 hover:shadow-md transition-colors transition-shadows'
					handleClick={() => {
						setScore(0)
						setBoard(createBoard())
					}}
				/>
			</div>
			<div className='flex flex-col items-center justify-center bg-green-500 p-4 rounded-lg'>
				<ScoreContext.Provider value={{ score, setScore }}>
					{board.map((row, index) => (
						<Row row={row} rowIndex={index} key={index} />
					))}
				</ScoreContext.Provider>
			</div>
		</main>
	)
}

export default App
