import React from "react";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import Store from '../../AppGlobalStore';

import currentUserQuery from "../../queries/currentUserQuery"

const Header = props => {
  const user = Store.state.user;
  const team = [Store.state.user.teams];

  const handleLogout = e => {
    e.preventDefault();
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("store");
    window.location = "/";
  };

  const renderPortalDropDown = () => {
    return (
      <div className="header-dropdown portal">
        <button className="header-portal-btn" >
          <span>CHOOSE A PORTAL</span>
          <i className="fa fa-chevron-down" />
        </button>
        <div className="header-dropdown-content--centered portal">
          {team.length > 1
            ? <React.Fragment>
              <div className="label">Team Portal</div>
              {team.map(team => {
                return (<Link to={"/team" + team.id}>{team.title}</Link>)
              })}
              <hr />
            </React.Fragment>
            : null
          }
          <Link to="/voyage">Voyage Portal</Link>
          <hr />
          <Link to="/profile">User Profile</Link>
        </div>
      </div>
    )
  }

  const renderAvatar = () => {
    return (
      <div className="header-dropdown">
        <img className="avatar" src={user.avatar ? user.avatar : require('../../assets/blank image.png')} alt="user avatar" />
        <div className="header-mask" />
        <div className="header-dropdown-content avatar">
          {/* <Link to="/settings">Settings</Link> */}
          <Link to="/" onClick={e => handleLogout(e)}>Log out</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="header header-dark">
      <div className="header-container">
        <div className="header-left">
          <div className="nav-logo">
            <Link className="nav-light" to="/">CHINGU</Link>
          </div>
        </div>

        {user && renderPortalDropDown()}

        <div className="header-right">
          {user && renderAvatar()}
          {!user && <Link to="/login" className="header-btn">LOG IN</Link>}
        </div>
      </div>
    </div>
  )
}

export default graphql(currentUserQuery)(Header);