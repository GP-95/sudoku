/* eslint-disable */
function Button({
	customStyle,
	handleClick,
	type = 'button',
	name = 'Button',
}) {
	return (
		<button
			className={`p-2 w-44 m-2 border-2 border-transparent rounded focus:border-yellow-500 focus:outline-none ${customStyle}`}
			type={type}
			onClick={handleClick}>
			{name}
		</button>
	)
}

export default Button
