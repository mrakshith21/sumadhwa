import Header from './Header';
import '../styles/style.css';

function Team() {
    return (
        <div>
            <section id="team" className="team">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Team</h2>
                        <p>
                        Meet Sumadhwa's manufacturing mavens, a tight-knit team, big on expertise, innovation, and transforming industry norms.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="member">
                                <div className="pic">
                                    <img
                                        src={require("../images/team/team-1.jpg")}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>Walter White</h4>
                                    <span>Chief Executive Officer</span>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="member" data-aos-delay="100">
                                <div className="pic">
                                    <img
                                        src={require("../images/team/team-2.jpg")}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Product Manager</span>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="member" data-aos-delay="200">
                                <div className="pic">
                                    <img
                                        src={require("../images/team/team-3.jpg")}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Team;
