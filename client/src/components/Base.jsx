import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
import AppBar from 'material-ui/AppBar';
import strings  from './lang_config.jsx';
import default_lang from './default_lang.jsx';

strings.setLanguage(default_lang.lang);

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const mainDiv = {
    innerHeight: window.innerHeight
};

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const Base = ({ children }) => (
  <div  style={{height: mainDiv.innerHeight}}>
    <div>
      <AppBar 
        title={
        <div className="top-bar-left">
        <IndexLink to="/" style={{color: 'white'}}>{strings.title}</IndexLink>
        </div>}>

        {Auth.isUserAuthenticated() ? (
          <div className="top-bar-right">
            <Link to="/logout" style={{color: 'white'}}>{strings.logout}</Link>
          </div>
        ) : (
          <div className="top-bar-right">
            <Link to="/login" style={{color: 'white'}}>{strings.login}</Link>
            <Link to="/signup" style={{color: 'white'}}>{strings.signup}</Link>
          </div>
        )}
      </AppBar>
    </div>
    { /* child component will be rendered here */ }
    {children}
  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;