import React, {useState} from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import './css/bootstrap-grid.css';
import './css/bootstrap.css';
import './css/bootstrap-grid.css';
import './css/bootstrap-reboot.css';
import './css/custome-select.css';
import './css/style.css';
import ConnectWallets from "./components/modal/connectWalllets";
import Main from "./pages/main";
import ConfigureLock from "./pages/configureLock";
import TokenOverview from './pages/tokenOverview';
import LockTokens from "./components/modal/lockTokens";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App: React.FC = () => {
        const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
        const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
        const [isOpenLockTokens, setIsOpenLockTokens] = useState<boolean>(false);
        const [click, setClick] = useState<number>(0);
        const [addressOfToken, setAddressOfToken] = useState<string | null>(null);
        const [tokenName, setTokenName] = useState<string>('')


        const CheckForClick = () => {
            setClick((prevState: number) => ++prevState);
            if ((click) % 2 === 0) {
                setIsOpenMenu(false);
            } else return;
        };


        return (
            <Router>
                <div className="day-mode night1" onClick={() => {
                    CheckForClick();
                }}>
                    <Header setOpenModal={setIsOpenModal} setOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu}
                            setLockTokensOpen={setIsOpenLockTokens}/>
                    <div className="bg-body">
                        <Switch>
                            <Route path="/" exact>
                                <Main setIsOpenLockTokens={setIsOpenLockTokens}/>
                            </Route>
                            <Route path="/configureLock" exact>
                                <ConfigureLock addressOfToken={addressOfToken} tokenName={tokenName}/>
                            </Route>
                            <Route path="/tokenOverview" exact>
                                <TokenOverview/>
                            </Route>
                        </Switch>
                        <Footer/>
                    </div>
                </div>
                <ConnectWallets isOpen={isOpenModal} setIsOpen={setIsOpenModal}/>
                <LockTokens setAddressOfToken={setAddressOfToken} setIsOpenLockTokens={setIsOpenLockTokens}
                            isOpenLockTokens={isOpenLockTokens} tokenName={tokenName} setTokenName={setTokenName}/>
            </Router>
        );
    }
;

export default App;
