import Navbar from 'react-bootstrap/Navbar';

import classes from './Header.module.css';

function Header() {
  return (
    <>
      <Navbar fixed="top" className={classes.navbar_custom}></Navbar>
    </>
  );
}

export default Header;
