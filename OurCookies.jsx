import React from 'react';

function Cookies() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="mt-3"></div>
                    <div className="col-md-8 col-md-offset-2">
                        <div>
                            <div id="AD-cookie-policy">
                                <h1>Cookie List</h1>
                                <p className="text-align-center mb-8">Last updated: May 17, 2022</p>

                                <div id="cookie-policy-description">
                                    A cookie is a small piece of data (text file) that a website – when visited by a
                                    user – asks your browser to store on your device in order to remember information
                                    about you, such as your language preference or login information. Those cookies are
                                    set by us and called first-party cookies. We also use third-party cookies – which
                                    are cookies from a domain different than the domain of the website you are visiting
                                    – for our advertising and marketing efforts. More specifically, we use cookies and
                                    other tracking technologies for the following purposes:
                                </div>

                                <section>
                                    <h4 className="cookie-policy-group">Performance Cookies</h4>
                                    <p className="cookie-policy-group-desc">
                                        These cookies allow us to count visits and traffic sources so we can measure and
                                        improve the performance of our site. They help us to know which pages are the
                                        most and least popular and see how visitors move around the site. All
                                        information these cookies collect is aggregated and therefore anonymous. If you
                                        do not allow these cookies we will not know when you have visited our site, and
                                        will not be able to monitor its performance.
                                    </p>
                                </section>
                                <section>
                                    <h4 className="cookie-policy-group">Targeting Cookies</h4>
                                    <p className="cookie-policy-group-desc">
                                        These cookies may be set through our site by our advertising partners. They may
                                        be used by those companies to build a profile of your interests and show you
                                        relevant adverts on other sites. They do not store directly personal
                                        information, but are based on uniquely identifying your browser and internet
                                        device. If you do not allow these cookies, you will experience less targeted
                                        advertising.
                                    </p>
                                </section>
                                <section>
                                    <h4 className="cookie-policy-group">Strictly Necessary Cookies</h4>
                                    <p className="cookie-policy-group-desc">
                                        These cookies are necessary for the website to function and cannot be switched
                                        off in our systems. They are usually only set in response to actions made by you
                                        which amount to a request for services, such as setting your privacy
                                        preferences, logging in or filling in forms. You can set your browser to block
                                        or alert you about these cookies, but some parts of the site will not then work.
                                        These cookies do not store any personally identifiable information.
                                    </p>
                                </section>
                                <section>
                                    <h4 className="cookie-policy-group">Functional Cookies</h4>
                                    <p className="cookie-policy-group-desc">
                                        These cookies enable the website to provide enhanced functionality and
                                        personalisation. They may be set by us or by third party providers whose
                                        services we have added to our pages. If you do not allow these cookies then some
                                        or all of these services may not function properly.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row"></div>
            </div>
            <div className="mb-3"></div>
        </React.Fragment>
    );
}
export default Cookies;
