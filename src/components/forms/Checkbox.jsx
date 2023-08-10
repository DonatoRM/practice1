import style from './Checkbox.module.css';
import CheckIcon from '../icons/CheckIcon';

const Checkbox = ({ label, position, ...props }) => (
	<div className={style.wrapper}>
		{position === 'left' ? <span className={style.label}>{label}</span> : ''}
		<label className={style.input}>
			<input {...props} className={style.check} type='checkbox'></input>
			<CheckIcon className={style.icon} />
		</label>
		{position === 'right' ? <span className={style.label}>{label}</span> : ''}
	</div>
);

export default Checkbox;
