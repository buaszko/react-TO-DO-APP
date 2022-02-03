import styles from './TextInput.module.scss';

const TextInput = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." />
            <button className={styles.button}>Search</button>
        </form>
    );
}

export default TextInput;