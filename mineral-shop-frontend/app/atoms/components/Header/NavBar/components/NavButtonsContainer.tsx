import NavButton from './NavButton';
import CartIcon from '@/assets/svg-icons/CartIcon';
import MiniCart from '../../../CartButton/MiniCart';
import CartProductCounter from '../../../CartButton/CartProductCounter';


const NavButtonsContainer = () => {
  return (
    <div className="nav-container">
      <NavButton href="/cart" className="cart-button">
        <CartIcon />
        <CartProductCounter />
        Koszyk
      </NavButton>

      <MiniCart />
    </div>
  )
};

export default NavButtonsContainer;