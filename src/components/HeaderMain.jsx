import Navbar from 'react-bootstrap/Navbar';

import classes from './HeaderMain.module.css';

function HeaderMain() {
  return (
    <>
      <Navbar sticky="top" className={classes.navbar_custom}>
        <span>WhoYaGot??</span>
        <div></div>
      </Navbar>
    </>
  );
}

export default HeaderMain;
