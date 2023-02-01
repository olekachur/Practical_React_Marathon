import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui_slice'
import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  const cartTotal = useSelector((state) => state.cart.totalQuantity);

  return (
    <button
      onClick={() => dispatch(uiActions.toggle())}
      className={classes.button}
      >
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotal}</span>
    </button>
  );
};

export default CartButton;
