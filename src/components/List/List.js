import { useSelector } from 'react-redux';
import styles from './List.module.scss';
import Column from '../Column/Column';
import SearchForm from '../SearchForm/SearchForm';


const List = () => {
  const columns = useSelector(state => state.columns);

  return (
    <div className={styles.list}>
      <header className={styles.header}>
            <h2 className={styles.title}></h2>
        </header>
        <p className={styles.description}></p>
        <SearchForm/>
        <section className={styles.columns}>
            {columns.map(column => <Column key={column.id} {...column} />
            )}
        </section>
    </div>
  )
}

export default List;