import React from "react";
import { Link } from "react-router-dom";

const style = {
    width: 250
};

const style1 = {
    margin: 5
};

const Footer = () => {
    return (
        <div>
            <footer class="site-footer">
                <a href="#top" class="smoothscroll scroll-top">
                    <span class="icon-keyboard_arrow_up" />
                </a>
                <div class="container">
                    <div className="text-center">
                        <img src="/images/log.jpg" style={style} />
                        <br />
                        <br />
                        <div class="">
                            <h3>Contact Us</h3>
                            <div class="footer-social">
                                <Link to="/" style={style1}>
                                    <span class="icon-facebook" />
                                </Link>
                                <Link to="/" style={style1}>
                                    <span class="icon-twitter" />
                                </Link>
                                <Link to="/" style={style1}>
                                    <span class="icon-instagram" />
                                </Link>
                                <Link to="/" style={style1}>
                                    <span class="icon-linkedin" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div class="row text-center">
                        <div class="col-12">
                            <p class="copyright">
                                <small class="block">
                                    &copy;{" "}
                                    <script>
                                        document.write(new
                                        Date().getFullYear());
                                    </script>{" "}
                                    <strong class="text-white">JobAdda</strong>{" "}
                                    <br /> Designed &amp; Developed by
                                    <br />
                                    Rishabh Shekher&emsp;&emsp;Ishan
                                    Arora&emsp;&emsp;Vikrant Singh
                                    <br />
                                    Manish Jagnani&emsp;&emsp;Srikar Anand
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
