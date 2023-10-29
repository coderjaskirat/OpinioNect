export default function About(){
    return(
        <body>
            <header className="header">
                <h1>About Us</h1>
            </header>

            <section className="company-info">
                <h2>Company Information</h2>
                <div className="information">
                    OpinioNect is a platform that aims to enhance user engagement, provide transparent content ledger, and generate intelligent insights from user comments on reputable blog articles.
                    The articles are based on the transcription of parliament sessions, which are verified by block chain technology to ensure data integrity and credibility.
                    The comments are then categorized by machine learning into 10 questions, categorizing the most common and relevant queries.
                </div>
            </section>

            <section className="team">
                <h2 className="our-team">Team</h2>
                <div className="member">
                    <img src="../images/prabal-li.jpg" alt="Member 1"/>
                    <h3>Prabal Gupta</h3>
                    <p>Details about Member 1</p>
                </div>
                <div className="member">
                    <img src="../images/jaskirat-li.jpg" alt="Member 2"/>
                    <h3>Jaskirat Singh</h3>
                    <p>Details about Member 2</p>
                </div>
                <div className="member">
                    <img src="../images/laksh-li.jpg" alt="Member 3"/>
                    <h3>Laksh Kaul</h3>
                    <p>Details about Member 3</p>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2023 OpinioNect</p>
            </footer>

            <script src="script.js"></script>
        </body>
    )
}