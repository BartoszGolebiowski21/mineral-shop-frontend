import NavButton from '../NavBar/components/NavButton';


const Menu = () => {
  return (
    <div className="menu-container my-4">
      <NavButton href={`/products/`} className='menu-button'>
        Sklep
      </NavButton>

      <NavButton href={`/about/`} className='menu-button'>
        O nas
      </NavButton>

      <NavButton href={`/contact/`} className='menu-button'>
        Kontakt
      </NavButton>
    </div>
  )
};

export default Menu;