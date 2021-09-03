import React, {useContext, useState} from "react";
import Logo from "../../images/Header_Logo.svg";
import '../../css/bootstrap-reboot.css';
import '../../css/custome-select.css';
import '../../css/style.css';
import Props from './types';
import {useWeb3Core} from "../../web3Connector";
import {useHistory} from 'react-router-dom';
import Menu from "../../images/Menu.svg";
import Web3 from "web3";
import DropdownMenu from "./dropdown";
import {KULOCKER_TOKEN_ABI} from "../../contracts/abis";
import {KULOCKER_TOKEN_ADDRESS} from "../../contracts/constants";


const Header: React.FC<Props> = ({setOpenModal, isOpenMenu, setOpenMenu, setLockTokensOpen}) => {
    const {isConnected, account, balance, chainId, disconnect} = useWeb3Core();
    const [tokenBalance, setTokenBalance] = useState<string>('');
    const [dropdown, setDropDown] = useState<boolean>(false);
    const web3: Web3 = new Web3(Web3.givenProvider);
    const KULOCKER_TOKEN = new web3.eth.Contract(KULOCKER_TOKEN_ABI, KULOCKER_TOKEN_ADDRESS);
    const history = useHistory();
    const handleClick: () => void = () => {
        setOpenMenu(!isOpenMenu);
    };

    if (isConnected) KULOCKER_TOKEN.methods.balanceOf(account).call().then((amount: string) => setTokenBalance(web3.utils.fromWei(amount)));

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light pl-0 pr-0 border-bottom">
                <div className="container">
                    <a className="navbar-brand" style={{cursor: 'pointer'}} onClick={() => history.push('/')}><img
                        src={Logo} alt="logo"/></a>
                    <ul className="navbar-nav right_menu ml-md-auto position-relative float-right order-sm-5 ">

                        <li className="nav-item mr-sm-2 mr-1 mr-sm-4">
                            <a className="btn btn-green mr-1">{isNaN(parseFloat(tokenBalance)) ? 0 : parseFloat(tokenBalance).toFixed(2)} KL..</a>

                            <a className="btn btn-green mr-1">{chainId === 322 || 321 ? parseFloat(balance ?? '0').toFixed(2) : 0} KCS</a>
                            {!isConnected ? <a className="btn btn-green" onClick={(e) => {
                                    setOpenModal(true);
                                    setOpenMenu(false);
                                }}>Connect
                                    Wallet</a> :
                                <div className="dropDownContainer">
                                    <a className="btn btn-green"
                                       onClick={() => setDropDown(!dropdown)}>{account !== null ? account.slice(0, 4) + '...' + account.slice(-3) : null}</a>
                                    {dropdown ? <div className="dropDownDisconnect">
                                        <button className="btn btn-danger" onClick={()=> {
                                            setDropDown(false);
                                            disconnect();
                                        }}>Disconnect</button>
                                    </div> : null}
                                </div>
                            }
                        </li>
                        <a className="nav-icon" role="button" onClick={handleClick}>
                            <img src={Menu}/>
                        </a>
                        <DropdownMenu isOpen={isOpenMenu} setTokenLockOpen={setLockTokensOpen}
                                      setOpenMenu={setOpenMenu}/>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
