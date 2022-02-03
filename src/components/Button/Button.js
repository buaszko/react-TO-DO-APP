import styles from './Button.module.scss';

const Button = props => {
    return <input className={styles.button} placeholder={props.button} />
}
export default Button;