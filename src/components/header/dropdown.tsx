import React, {useRef} from "react";
import '../../css/bootstrap-reboot.css';
import '../../css/custome-select.css';
import '../../css/style.css';
import Home from "../../images/Home.svg";
import Docs from "../../images/Docs.svg";
import Audit from "../../images/Audit.svg";
import Code from "../../images/Code.svg";
import StackingSvg from "../../images/Staking.svg";
import {useHistory} from 'react-router-dom';

const DropdownMenu: React.FC<{ isOpen: boolean, setTokenLockOpen: (a: boolean) => void, setOpenMenu: (a: boolean) => void }> = ({
                                                                                                                                    isOpen,
                                                                                                                                    setTokenLockOpen,
                                                                                                                                    setOpenMenu
                                                                                                                                }) => {
    const history = useHistory();

    return (
        <>
            {isOpen ? <li>
                <div className="nav-dropDown-Container">
                    <div className="row gutter-2">
                        <div className="col-12">

                            <ul className="nav flex-column text-drop">
                                <li className="nav-item py-2">
                                    <a className="text-primary" href="#" onClick={() => history.push('/')}><img
                                        className="mr-2"
                                        src={Home}/> Home
                                    </a>
                                </li>
                                <li className="text-primary py-2">
                                    <a className="text-primary" href="#"><img className="mr-2"
                                                                              src={Docs}/> Docs</a>
                                </li>
                                <li className="nav-item text-primary py-2">
                                    <a className="text-primary" href="#"><img className="mr-2"
                                                                              src={Audit}/> Audit
                                    </a>
                                </li>
                                <li className="nav-item text-primary py-2">
                                    <a className="text-primary" href="#"><img className="mr-2"
                                                                              src={Code}/> Code
                                    </a>
                                </li>
                                <li className="nav-item text-primary py-2">
                                    <a className="text-primary" href="#"><img className="mr-2"
                                                                              src={StackingSvg}/> Staking</a>
                                </li>
                                <li className="nav-item text-primary py-2">
                                    <a className="btn btn-primary d-block text-white" onClick={() => {
                                        setOpenMenu(false);
                                        setTokenLockOpen(true);
                                    }}>Create Lock</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </li> : null}
        </>
    );
};

export default DropdownMenu;
