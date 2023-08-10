import CheckIcon from '../icons/CheckIcon';
import style from './Checkbox.module.css';

const Checkbox = ({ label, ...props }) => (
	<div className={style.wrapper}>
		<span className={style.label}>{label}</span>
		<label className={style.input}>
			<input {...props} className={style.check} type='checkbox'></input>
			<CheckIcon className={style.icon} />
		</label>
	</div>
);

export default Checkbox;
