import React, {useEffect, useMemo, useState} from 'react';
import Search from "../images/new/Search.png";
import loupe from "../images/loupe.svg"
import Lock from "../images/new/lock.png";
import Work from "../images/new/Work.png";
import '../css/bootstrap-grid.css';
import '../css/bootstrap.css';
import '../css/bootstrap-grid.css';
import '../css/bootstrap-reboot.css';
import '../css/custome-select.css';
import '../css/style.css';
import {useHistory} from 'react-router-dom';
import Web3 from 'web3';
import {APPROVAL_ABI, BINANCE_TOKEN_ABI} from "../contracts/abis";
import {BINANCE_TOKEN_ADDRESS} from "../contracts/constants";
import {useDispatch} from 'react-redux';
import connectInputs from '../store/actions/inputAction';
import LockTokens from '../components/modal/lockTokens';

//0x9444e189dfd09b3fbeba502a87891bcec5101fb5
const getTotalProjects: (setTotalProjects: (a: number) => void, Contract: any) => void = async (setTotalProjects, Contract) => {
    const res = await Contract.methods.allDepositIds(1).call();
    setTotalProjects(res);
}

const Main: React.FC<{ setIsOpenLockTokens: (a: boolean) => void }> = ({setIsOpenLockTokens}) => {
    
    const dispatch = useDispatch();

    const web3 = new Web3(Web3.givenProvider);
    const TOKEN_CONTRACT = new web3.eth.Contract(BINANCE_TOKEN_ABI as any, BINANCE_TOKEN_ADDRESS);
    const [totalProjects, setTotalProjects] = useState<number>(0);
    const [address, setAddress] = useState<string>('');
    const [locks, setLocks] = useState<any>(null);
    const [lists, setLists] = useState<any>([]);

    const searchHandler = () => {
        dispatch(connectInputs(address));
    }

    useEffect(() => {
        const requestLockPairs: () => void = async () => {
            const quantity: number = await TOKEN_CONTRACT.methods.depositId().call();
            for (let i = 1; i <= quantity; i++) {
                try {
                    const lockInfo = await TOKEN_CONTRACT.methods.getDepositDetails(i).call();
                    const tokenContract = await new web3.eth.Contract(APPROVAL_ABI,  lockInfo[0] as string);
                    const symbol: string = await tokenContract.methods.symbol().call();
                    setLists((prevState: any) => [...prevState, [lockInfo, symbol]]);
                } catch (err) {
                    console.log(err)
                }
            }
        };
        getTotalProjects(setTotalProjects, TOKEN_CONTRACT);
        requestLockPairs();
    }, []);

    const findPair = async () => {
        console.log(TOKEN_CONTRACT.methods.getDepositsByWithdrawalAddress(address).call(), address);
        
        // const response = await TOKEN_CONTRACT.methods.getDepositsByWithdrawalAddress(address).call();
        // console.log(response, '////9877777777777');
        
        // setLocks(response); 
        // if (response.length === 0) setIsOpenLockTokens(true);

        // return;
    };


    const history = useHistory();
    return (
        <>
            <section className="hero_banner banner-sec banner-v2 banner-v3">
                <div className="container text-center">
                    {
                        // modal ? : null
                    }
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="font-40 text-yellow font-extrabold">Kulocker</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="search-bar-main">
                                <div className="input-group search-bar input-group-sm mb-3"
                                     style={{background: '#FFF', borderRadius: '15px'}}>
                                    <input type="text" className="form-control" style={{borderRadius: '15px'}}
                                           placeholder="Search by Address or Token Name"
                                           onChange={(e) => setAddress(e.target.value)} 
                                           onBlur={searchHandler}
                                           />
                                    <div className='input-group-prepend'>
                                        <a href="#" className="input-group-text" id="inputGroup-sizing-sm"
                                           onClick={findPair}><img className="fill-loupe"
                                            src={loupe} alt=""/></a>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-10"> 
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="locked-box">
                                        <div className="locked-circle">
                                            <img src={Lock} alt=""/>
                                        </div>
                                        <div className="locked-content">
                                            <h3>$ 275,892,173.03</h3>
                                            <p>Total locked</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="locked-box">
                                        <div className="locked-circle">
                                            <img src={Work} alt=""/>
                                        </div>
                                        <div className="locked-content">
                                            <h3>{totalProjects}</h3>
                                            <p>Total Projects</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className="container" style={{height: '40vh'}}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-filter table-responsive font-14 shadow-sm">

                                <table className="table">
                                    <thead>
                                    <tr className="text-yellow font-semibold">
                                        <th scope="col" className="border-0 pl-4">Token</th>
                                        <th scope="col" className="border-0">Contract</th>
                                        <th scope="col" className="border-0">Tokens Locked</th>
                                        <th scope="col" className="border-0">Next Unlock</th>
                                    </tr>
                                    </thead>
                                    <tbody id="myTable" className="font-semibold text-primary">
                                    {locks !== null && locks.length !== 0 && <tr>
                                        <th scope="row" className="pl-4 font-semibold" style={{cursor: 'pointer'}}><a
                                            className="text-white" onClick={() => history.push('./tokenOverview')}>Bitcoin
                                            (BTC)</a></th>
                                        <td>17-03-2021</td>
                                        <td>{locks}</td>
                                        <td>{locks}</td>
                                        <td>4 days left</td>
                                    </tr>}
                                    {lists.map((element: any) => {
                                        return (
                                            <tr>
                                                <th scope="row" className="pl-4 font-semibold"
                                                    style={{cursor: 'pointer'}}>
                                                    <a
                                                    className="text-white"
                                                    onClick={() => history.push('./tokenOverview')}>{element[1]}</a></th>
                                                <td>{element[0][1].slice(0, 5) + '...' + element[1].slice(-3)}</td>
                                                <td>{element[0][2]}</td>
                                                <td>{new Date(parseInt(element[0][3]) * 1000).toLocaleDateString()}</td>
                                            </tr>
                                        )
                                    })}
                                    {/*<tr>
                                        <th scope="row" className="pl-4 font-semibold">Ethereum (ETH)</th>
                                        <td>17-03-2021</td>
                                        <td>$2,422,090.28</td>
                                        <td>$2,422,090.28</td>
                                        <td>4 days left</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="pl-4 font-semibold">Binance Coin (BNB)
                                        </th>
                                        <td>17-03-2021</td>
                                        <td>$2,422,090.28</td>
                                        <td>$2,422,090.28</td>
                                        <td>4 days left</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="pl-4 font-semibold">Polkadot (DOT)</th>
                                        <td>17-03-2021</td>
                                        <td>$2,422,090.28</td>
                                        <td>$2,422,090.28</td>
                                        <td>4 days left</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="pl-4 font-semibold">Litecoin (LTC)</th>
                                        <td>17-03-2021</td>
                                        <td>$2,422,090.28</td>
                                        <td>$2,422,090.28</td>
                                        <td>4 days left</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="pl-4 font-semibold">Uniswap (UNI)</th>
                                        <td>17-03-2021</td>
                                        <td>$2,422,090.28</td>
                                        <td>$2,422,090.28</td>
                                        <td>4 days left</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="pl-4 font-semibold">Dogecoin (DOGE)</th>
                                        <td>17-03-2021</td>
                                        <td>$2,422,090.28</td>
                                        <td>$2,422,090.28</td>
                                        <td>4 days left</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="pl-4 font-semibold">Huobi Token (HT)</th>
                                        <td>17-03-2021</td>
                                        <td>$2,422,090.28</td>
                                        <td>$2,422,090.28</td>
                                        <td>4 days left</td>
                                    </tr>*/}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Main;