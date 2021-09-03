import React from 'react';
import {Props} from './typesConnectWallet';
import '../../css/bootstrap-reboot.css';
import '../../css/custome-select.css';
import '../../css/style.css';
import Metamask from '../../images/meta-mask.png';
import TokenPocket from '../../images/TokenPocket.png';
import WalletConnect from '../../images/WalletConnect.png';
import {useWeb3Core} from "../../web3Connector";

const ConnectWallets: React.FC<Props> = ({isOpen, setIsOpen}) => {
    const {isConnected, connect} = useWeb3Core();

    let count: number = 1;
    let countModalClick: number = 0;


    const observeForClick: ()=> void = () => {
        ++count;
        if (countModalClick + count % 2 === 0) {
            setIsOpen(false);
        } else return;
    };

    const observeForModalClick: ()=> void = () => {
        for (let i: number = 0; i < 2; i++) {
            if (i + (count + 1) % 2 !== 0) {
                countModalClick = i;
                return;
            }
        }
    };

    return(
        <>
            {isOpen ?
                <div className="modalContainer" onClick={observeForClick}>
                    <div className="modal-dialog modal-dialog-centered" onClick={observeForModalClick}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-yellow font-weight-bold">Connect
                                    to a wallet</h5>
                                <button type="button" className="close" onClick={() => setIsOpen(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body" >
                                <form className="raido-select">
                                    <section className="payment-type cf">
                                        <input type="radio" name="radio3" id="metamask" value="metamask"/><label
                                        className="col" htmlFor="metamask" onClick={() => {
                                        connect();
                                        setIsOpen(false);
                                    }}>MetaMask
                                        <img src={Metamask} className="float-right mr-3"/></label>
                                        <input type="radio" name="radio3" id="TokenPocket" value="Tokenpocket"/>
                                        <label className="col" htmlFor="TokenPocket">TokenPocket<img src={TokenPocket}
                                                                                                     className="float-right mr-3"/></label>
                                        <input type="radio" name="radio3" id="walletConnect" value="walletConnect"/>
                                        <label className="col" htmlFor="walletConnect">walletConnect<img
                                            src={WalletConnect}
                                            className="float-right mr-3"/></label>
                                    </section>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                : null}

        </>
    );
};

export default ConnectWallets;