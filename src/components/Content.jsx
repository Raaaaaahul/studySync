const Content = () => {
    return (
        <>
            <div className="content">
                <section className="main-section">

                    <div className="content-left">
                        <p className="section-label">Very proud to introduce</p>
                        <h1 className="section-title">Seamless Learning for Brighter Futures</h1>
                        <p className="section-description">
                            Our innovative platform offers an effortless and seamless approach to learning, empowering students of all ages to achieve brighter futures. Join us on a transformative journey to simplify education and unlock your full potential.
                        </p>
                        <div className="button-group">
                            <a href="#start" className="start-button">Start Now</a>
                            <a href="#tour" className="tour-button">Take Tour</a>
                        </div>
                    </div>

                    <div className="content-right">

                        <div className="image-container">
                            <img src="../../images/usgs-hoS3dzgpHzw-unsplash.jpg" className="section-image" />
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default Content
