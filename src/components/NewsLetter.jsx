const NewsLetter = () => {
    return (
        <>
            <div className="newsletter-container">
                <div className="newsletter-content">

                    <div className="news-left">
                        <img src="../../src/assets/images/img.png" loading="lazy" alt="news-img" />
                    </div>

                    <div className="news-right">

                        <div className="news-info">
                            <h2 className="news-title">Get the latest updates</h2>

                            <p className="news-desc">Sign up for our newsletter</p>
                        </div>

                        <form className="news-form">

                            <input className="news-email" placeholder="Email" />
                            <button className="news-send-button">
                                Send
                            </button>

                        </form>

                        <div className="privacy-policy">
                            By signing up to our newsletter you agree to our &nbsp;
                            <a className="news-link">
                                Terms of Service
                            </a>
                            &nbsp;and&nbsp;
                            <a className=" news-link ">
                                Privacy policy
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsLetter
