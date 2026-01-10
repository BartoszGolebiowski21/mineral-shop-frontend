import MiniCart from './MiniCart';
import CartIcon from '@/assets/svg-icons/CartIcon';

const CartButton = () => {
  return (
    <>
      <div className="cart-button">
        <CartIcon />
        Koszyk
        <MiniCart />
      </div>
    </>
  )
};

export default CartButton;