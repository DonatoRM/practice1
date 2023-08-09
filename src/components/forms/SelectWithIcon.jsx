import style from './SelectWithIcon.module.css';

const SelectWithIcon = ({ label, icon: Icon, ...props }) => (
	<div className={style.wrapper}>
		<span className={style.label}>{label}</span>
		<select {...props} className={style.select}></select>
		<Icon className={style.icon} />
	</div>
);

export default SelectWithIcon;
