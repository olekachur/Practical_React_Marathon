import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart_slice';

const CartItem = (props) => {
  const { id, title, quantity, price } = props.item;
  const dispatch = useDispatch();

  const decHandler = () => dispatch(cartActions.removeItem(id));

  const incHandler = () => dispatch(cartActions.addItem({ id }));

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(price * quantity).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decHandler}>-</button>
          <button onClick={incHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
