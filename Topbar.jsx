// @flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// actions
import { showRightSidebar } from '../redux/actions';

// components

import logoSmDark from '../assets/images/logo_sm_dark.png';
import logoSmLight from '../assets/images/logo_sm.png';
import logo from '../assets/images/logo-light.png';

//constants
import * as layoutConstants from '../constants/layout';

const Topbar = ({ isLogoHidden, navCssClasses, openLeftMenuCallBack, isTopBarDark }) => {
    const dispatch = useDispatch();

    const [isopen, setIsopen] = useState(false);

    const navbarCssClasses = navCssClasses || '';
    const containerCssClasses = !isLogoHidden ? 'container-fluid' : '';

    const { layoutType } = useSelector((state) => ({
        layoutType: state.Layout.layoutType,
    }));

    /**
     * Toggle the leftmenu when having mobile screen
     */
    const handleLeftMenuCallBack = () => {
        setIsopen((prevState) => !prevState);
        if (openLeftMenuCallBack) openLeftMenuCallBack();
    };

    /**
     * Toggles the right sidebar
     */
    const handleRightSideBar = () => {
        dispatch(showRightSidebar());
    };

    return (
        <React.Fragment>
            <div className={`navbar-custom ${navbarCssClasses}`}>
                <div className={containerCssClasses}>
                    {!isLogoHidden && (
                        <Link to="/" className="topnav-logo">
                            <span className="topnav-logo-lg">
                                <img src={logo} alt="logo" height="16" />
                            </span>
                            <span className="topnav-logo-sm">
                                <img src={isTopBarDark ? logoSmLight : logoSmDark} alt="logo" height="16" />
                            </span>
                        </Link>
                    )}

                    <ul className="list-unstyled topbar-menu float-end mb-0">
                        <li className="notification-list topbar-dropdown d-xl-none"></li>
                        <li className="dropdown notification-list topbar-dropdown d-none d-lg-block"></li>
                        <li className="dropdown notification-list"></li>
                        <li className="dropdown notification-list d-none d-sm-inline-block"></li>
                        <li className="notification-list">
                            <button
                                className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none"
                                onClick={handleRightSideBar}>
                                <i className="dripicons-gear noti-icon"></i>
                            </button>
                        </li>
                        <li className="dropdown notification-list"></li>
                    </ul>

                    {/* toggle for vertical layout */}
                    {layoutType === layoutConstants.LAYOUT_VERTICAL && (
                        <button className="button-menu-mobile open-left disable-btn" onClick={handleLeftMenuCallBack}>
                            <i className="mdi mdi-menu" />
                        </button>
                    )}

                    {/* toggle for horizontal layout */}
                    {layoutType === layoutConstants.LAYOUT_HORIZONTAL && (
                        <Link
                            to="#"
                            className={classNames('navbar-toggle', { open: isopen })}
                            onClick={handleLeftMenuCallBack}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    )}

                    {/* toggle for detached layout */}
                    {layoutType === layoutConstants.LAYOUT_DETACHED && (
                        <Link to="#" className="button-menu-mobile disable-btn" onClick={handleLeftMenuCallBack}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

Topbar.propTypes = {
    isLogoHidden: PropTypes.bool,
    navCssClasses: PropTypes.string,
    openLeftMenuCallBack: PropTypes.func,
    isTopBarDark: PropTypes.string,
};

export default Topbar;
