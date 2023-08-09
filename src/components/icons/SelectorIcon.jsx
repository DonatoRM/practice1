const SelectorIcon = props => (
	<svg
		{...props}
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth={2}
		viewBox='0 0 24 24'
	>
		<path stroke='none' d='M0 0h24v24H0z' />
		<path d='M8 9l4-4 4 4M16 15l-4 4-4-4' />
	</svg>
);

export default SelectorIcon;
