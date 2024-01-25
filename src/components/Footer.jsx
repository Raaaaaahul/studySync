const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <footer className="footer">

                    <div className="footer-top">

                        <div className="comp-logo">
                            <a className="logo-link" href="#">
                                <img className="logo-svg" src="./images/StudySyn.svg" />
                                StudySync
                            </a>
                        </div>
                        <p className="filler-text">Seamless Learning for Brighter Futures.</p>
                        <div className="social">
                            <a className="social-link" href="#">
                                <img src="./images/instagram.svg" className="social-icon" />
                            </a>
                            <a className="social-link">
                                <img src="./images/linkedin.svg" className="social-icon" />
                            </a>
                            <a className="social-link">
                                <img src="./images/Microsoft.svg" className="social-icon" />
                            </a>
                            <a className="social-link">
                                <img src="./images/twitter.svg" className="social-icon" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-grid">

                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">
                                Products
                            </div>
                            <ul className="footer-links-list">
                                <li>
                                    <a href="#overview" className="footer-link">Overview</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Solutions</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Pricing</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Customers</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">
                                Company
                            </div>
                            <ul className="footer-links-list">
                                <li>
                                    <a href="#overview" className="footer-link">About</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Investor Relations</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Jobs</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Press</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Blog</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">
                                Support
                            </div>
                            <ul className="footer-links-list">
                                <li>
                                    <a href="#overview" className="footer-link">Contact</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Documentation</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Chat</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">FAQ</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">
                                Legal
                            </div>
                            <ul className="footer-links-list">
                                <li>
                                    <a href="#overview" className="footer-link">Terms of Service</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Cookie Settings</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </footer>
                <div className="footer-copyright">
                    © 2021 - Present StudySync. All rights reserved.
                </div>
            </div>
        </>
    )
}

export default Footer
