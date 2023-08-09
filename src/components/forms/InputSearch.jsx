import style from './InputSearch.module.css';
import MagnifyingGlass from '../icons/MagnifyingGlass';

const InputSearch = ({ placeholder, ...props }) => (
	<div className={style.wrapper}>
		<MagnifyingGlass className={style.icon} />
		<input
			{...props}
			className={style.input}
			placeholder={placeholder}
			type='text'
		></input>
	</div>
);

export default InputSearch;
