import style from './InputText.module.css';

const InputText = ({ label, error, placeholder, ...props }) => (
	<label className={style.wrapper}>
		<span className={style.label}>{label}</span>
		<input
			{...props}
			type='text'
			placeholder={placeholder}
			className={style.input}
		></input>
		<span className={style.error}>{error}</span>
	</label>
);

export default InputText;
