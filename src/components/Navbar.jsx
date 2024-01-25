const Navbar = () => {
    return (
        <>
            <div className="header">

                <header className="header-content">

                    <a href="#logo" className="logo">
                        <img src="../../images/StudySyn.svg" alt="logoImage" className="logo-icon" />
                        <span className="logo-text">StudySync</span>
                    </a>

                    <nav className="nav">
                        <a href="#home" className="nav-link">Home</a>
                        <a href="#features" className="nav-link">Features</a>
                        <a href="#pricing" className="nav-link">Pricing</a>
                        <a href="#blog" className="nav-link">Blog</a>
                        <a href="#about" className="nav-link">About</a>
                    </nav>

                    <a href="#contact" className="contact-button">
                        Contact Us
                    </a>

                    <button type="button" className="menu-button">
                        <img src="./images/Hamburger.svg" alt="menuButton" className="menu-icon" />
                    </button>

                </header>

            </div>
        </>
    )
}

export default Navbar
