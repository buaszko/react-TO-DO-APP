import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch} from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardRedux';

const Card = props => {
    
  const cardId = props.id;
  const dispatch = useDispatch();

  const toggleIsFavorite = () => {
    dispatch(toggleCardFavorite(cardId));
  };

  const beRemoved = e => {
    e.preventDefault();
    dispatch (removeCard (cardId ))
  };

  return (
    <li className={styles.card}>{props.title}
      <button onClick={toggleIsFavorite} className={clsx(styles.button, props.isFavorite && styles.isFavorite) + ' fa fa-star-o' }>   
      </button>
      <button className={styles.buttonRemove} onClick={beRemoved}>
        <span className={styles.icon + ' fa fa-trash'}></span>
      </button>
    </li>
  )

};
export default Card;