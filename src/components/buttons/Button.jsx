import style from './Button.module.css';

const Button = ({ label, ...props }) => (
	<button {...props} className={style.button}>
		{label}
	</button>
);

export default Button;
