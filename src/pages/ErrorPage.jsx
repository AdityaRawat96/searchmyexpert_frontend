import { Link } from 'react-router-dom';
import './ErrorPage.scss';
import { Fragment } from 'react';

function ErrorPage() {
  return (
    <Fragment>
      <div id="error_container">
        <h1>404</h1>
        <h3>Looks like the page you're looking for doesn't exist.</h3>
        <Link to="/">Take me back home</Link>
      </div>
    </Fragment>
  );
}

export default ErrorPage;
