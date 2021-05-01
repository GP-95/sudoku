function Button({
	customStyle,
	handleClick,
	type = 'button',
	name = 'Button',
}) {
	return (
		<button
			className={`p-2 w-44 m-2 border focus:outline-none ${customStyle}`}
			type={type}
			onClick={handleClick}>
			{name}
		</button>
	)
}

export default Button
