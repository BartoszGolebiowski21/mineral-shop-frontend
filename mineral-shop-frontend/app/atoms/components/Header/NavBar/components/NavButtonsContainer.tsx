import NavButton from './NavButton';
import HeartIcon from '@/assets/svg-iconts/HeartIcon';
import PersonIcon from '@/assets/svg-iconts/PersonIcon';
import CartButton from '../../../CartButton/CartButton';
import CartIcon from '@/assets/svg-iconts/CartIcon';
import MiniCart from '../../../CartButton/MiniCart';


const NavButtonsContainer = () => {
  return (
    <div className="nav-container">
      {/* <NavButton href="/wishlist">
        <HeartIcon />
        Ulubione
      </NavButton>

      <NavButton href="/account">
        <PersonIcon />
        Konto
      </NavButton> */}
      <NavButton href="/cart" className="cart-button">
        <CartIcon />
        Koszyk
      </NavButton>

      <MiniCart />
    </div>
  )
};

export default NavButtonsContainer;