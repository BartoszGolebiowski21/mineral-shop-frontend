import NavButton from './NavButton';
import HeartIcon from '@/assets/svg-icons/HeartIcon';
import PersonIcon from '@/assets/svg-icons/PersonIcon';
import CartButton from '../../../CartButton/CartButton';
import CartIcon from '@/assets/svg-icons/CartIcon';
import MiniCart from '../../../CartButton/MiniCart';


const NavButtonsContainer = () => {
  return (
    <div className="nav-container">
      <NavButton href="/cart" className="cart-button">
        <CartIcon />
        Koszyk
      </NavButton>

      <MiniCart />
    </div>
  )
};

export default NavButtonsContainer;