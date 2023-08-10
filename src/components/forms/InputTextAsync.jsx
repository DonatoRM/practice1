import style from './InputTextAsync.module.css';
import ArrowsRotateIcon from '../icons/ArrowsRotateIcon';

const InputTextAsync = ({ label, value, error, placeholder, ...props }) => {
	let statusClass;
	if (value !== '') {
		if (error) statusClass = style.errorIcon;
		else statusClass = style.okIcon;
	}
	return (
		<label className={style.wrapper}>
			<span className={style.label}>{label}</span>
			<input
				{...props}
				type='text'
				placeholder={placeholder}
				className={style.input}
			></input>
			<ArrowsRotateIcon className={`${style.icon} ${statusClass}`} />
			<span className={style.error}>{error}</span>
		</label>
	);
};

export default InputTextAsync;
