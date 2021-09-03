import React from "react";
import '../../css/bootstrap-reboot.css';
import '../../css/custome-select.css';
import '../../css/style.css';
import '../../css/bootstrap-grid.css';
import '../../css/bootstrap.css';
import '../../css/bootstrap-grid.css';
import Twitter from "../../images/Twitter.svg";
import Github from "../../images/Github.svg";
import Medium from "../../images/Meduim.svg";
import Telegram from "../../images/Telegram.svg";

const Footer: React.FC<any> = () => {
    return (

        <footer className="py-3">
            <div className="container">
                <div className="copyright">
                    <p>@2021 Kulocker </p>
                </div>
                <nav className="navbar justify-content-center">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item mr-sm-3">
                            <a className="nav-link px-0" href="#"><img className="mr-2"
                                                                       src={Twitter}/></a>
                        </li>
                        <li className="list-inline-item mr-sm-3">
                            <a className="nav-link px-0" href="#"><img className="mr-2"
                                                                       src={Github}/></a>
                        </li>
                        <li className="list-inline-item mr-sm-3">
                            <a className="nav-link px-0" href="#"><img className="mr-2"
                                                                       src={Medium}/></a>
                        </li>
                        <li className="list-inline-item">
                            <a className="nav-link px-0" href="#"><img className="mr-2"
                                                                       src={Telegram}/></a>
                        </li>
                    </ul>
                </nav>

                <div className="disclaimer">
                    <p>Disclaimer: Kulocker is not endorsed by, directly affiliated with, or sponsored by Kucoin.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
