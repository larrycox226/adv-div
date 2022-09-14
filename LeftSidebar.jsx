// @flow
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getMenuItems } from '../helpers/menu';

// components
import AppMenu from './Menu';

import logoSm from '../assets/images/logo_sm.png';
import logoDark from '../assets/images/logo-dark.png';
import logoDarkSm from '../assets/images/logo_sm_dark.png';
import logo from '../assets/images/logo.png';
import helpBoxImage from '../assets/images/help-icon.svg';
import profileImg from '../assets/images/users/avatar-1.jpg';

/* sidebar content */
const SideBarContent = ({ isUserProfileHidden }) => {
    return (
        <>
            {!isUserProfileHidden && (
                <div className="leftbar-user">
                    <Link to="/">
                        <img src={profileImg} alt="" height="42" className="rounded-circle shadow-sm" />
                        <span className="leftbar-user-name">Dominic Keller</span>
                    </Link>
                </div>
            )}

            <AppMenu menuItems={getMenuItems()} />

            <div className={classNames('help-box', 'text-center', { 'text-white': isUserProfileHidden })}>
                <Link to="/" className="float-end close-btn text-white">
                    <i className="mdi mdi-close" />
                </Link>

                <img src={helpBoxImage} height="90" alt="Helper Icon" />
                <h5 className="mt-3">Unlimited Access</h5>
                <p className="mb-3">Upgrade to plan to get access to unlimited reports</p>
                <button
                    className={classNames(
                        'btn',
                        'btn-sm',
                        isUserProfileHidden ? 'btn-outline-light' : 'btn-outline-primary'
                    )}>
                    Upgrade
                </button>
            </div>
            <div className="clearfix" />
        </>
    );
};

const LeftSidebar = ({ isCondensed, isLight, isLogoHidden, isUserProfileHidden }) => {
    const menuNodeRef = useRef(null);

    /**
     * Handle the click anywhere in doc
     */
    const handleOtherClick = (e) => {
        if (menuNodeRef && menuNodeRef.current && menuNodeRef.current.contains(e.target)) return;
        // else hide the menubar
        if (document.body) {
            document.body.classList.remove('sidebar-enable');
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOtherClick, false);

        return () => {
            document.removeEventListener('mousedown', handleOtherClick, false);
        };
    }, []);

    return (
        <React.Fragment>
            <div className="leftside-menu" ref={menuNodeRef}>
                {!isLogoHidden && (
                    <React.Fragment>
                        <Link to="/" className="logo text-center logo-light">
                            <span className="logo-lg">
                                <img src={isLight ? logoDark : logo} alt="logo" height="16" />
                            </span>
                            <span className="logo-sm">
                                <img src={isLight ? logoSm : logoDarkSm} alt="logo" height="16" />
                            </span>
                        </Link>

                        <Link to="/" className="logo text-center logo-dark">
                            <span className="logo-lg">
                                <img src={isLight ? logoDark : logo} alt="logo" height="16" />
                            </span>
                            <span className="logo-sm">
                                <img src={isLight ? logoSm : logoDarkSm} alt="logo" height="16" />
                            </span>
                        </Link>
                    </React.Fragment>
                )}

                {!isCondensed && (
                    <SimpleBar style={{ maxHeight: '100%' }} timeout={500} scrollbarMaxSize={320}>
                        <SideBarContent
                            menuClickHandler={() => {}}
                            isLight={isLight}
                            isUserProfileHidden={isUserProfileHidden}
                        />
                    </SimpleBar>
                )}
                {isCondensed && <SideBarContent isLight={isLight} isUserProfileHidden={isUserProfileHidden} />}
            </div>
        </React.Fragment>
    );
};

SideBarContent.propTypes = {
    isUserProfileHidden: PropTypes.bool,
};
LeftSidebar.propTypes = {
    isLogoHidden: PropTypes.bool,
    isUserProfileHidden: PropTypes.bool,
    isLight: PropTypes.bool,
    isCondensed: PropTypes.bool,
};

export default LeftSidebar;
