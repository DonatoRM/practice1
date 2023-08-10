import style from './ButtonWithIcon.module.css';

const ButtonWithIcon = ({ icon: Icon, ...props }) => {
	return (
		<label className={style.wrapper}>
			<button {...props} className={style.button}></button>
			<Icon {...props} className={style.icon} />
		</label>
	);
};

export default ButtonWithIcon;
