// @flow
import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
// actions
import { changeSidebarType, changeSidebarTheme } from '../redux/actions';

import * as layoutConstants from '../constants/layout';

// components

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import('./Topbar'));
const LeftSidebar = React.lazy(() => import('./LeftSidebar'));
const Footer = React.lazy(() => import('./Footer'));

const loading = () => <div className=""></div>;

const VerticalLayout = ({ children }) => {
    const dispatch = useDispatch();

    const { leftSideBarTheme, leftSideBarType } = useSelector((state) => ({
        layoutWidth: state.Layout.layoutWidth,
        leftSideBarTheme: state.Layout.leftSideBarTheme,
        leftSideBarType: state.Layout.leftSideBarType,
        showRightSidebar: state.Layout.showRightSidebar,
    }));

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    /**
     * Open the menu when having mobile screen
     */
    const openMenu = () => {
        setIsMenuOpened((prevState) => {
            setIsMenuOpened(!prevState);
        });

        if (document.body) {
            if (isMenuOpened) {
                document.body.classList.remove('sidebar-enable');
            } else {
                document.body.classList.add('sidebar-enable');
            }
        }
    };

    const updateDimensions = useCallback(() => {
        // activate the condensed sidebar if smaller devices like ipad or tablet
        if (window.innerWidth >= 768 && window.innerWidth <= 1028) {
            dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED));
        } else if (window.innerWidth > 1028) {
            dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED));
        }
    }, [dispatch]);

    useEffect(() => {
        dispatch(changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_DARK));

        // activate the condensed sidebar if smaller devices like ipad or tablet
        if (window.innerWidth >= 768 && window.innerWidth <= 1028) {
            dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED));
        }

        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [dispatch, updateDimensions]);

    const isCondensed = leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED;
    const isLight = leftSideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_LIGHT;

    return (
        <>
            <div className="wrapper">
                <Suspense fallback={loading()}>
                    <LeftSidebar isCondensed={isCondensed} isLight={isLight} isUserProfileHidden={true} />
                </Suspense>
                <div className="content-page">
                    <div className="content">
                        <Suspense fallback={loading()}>
                            <Topbar openLeftMenuCallBack={openMenu} isLogoHidden={true} />
                        </Suspense>
                        <Container fluid>
                            <Suspense fallback={loading()}>{children}</Suspense>
                        </Container>
                    </div>

                    <Suspense fallback={loading()}>
                        <Footer />
                    </Suspense>
                </div>
            </div>
        </>
    );
};

VerticalLayout.propTypes = {
    children: PropTypes.shape({}),
};
export default VerticalLayout;
