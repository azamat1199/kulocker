import React, {useState} from "react";
import LockGreenSmall from "../images/lock_green_small.svg";
import KscImg from "../images/KCS_Icon.svg";
import EthImg from "../images/ethereum-eth.svg";
import BitcoinImg from "../images/Bitcoin_btc.svg";
import LockMiddle from "../images/Lock_middle.svg";
import { StyledBtn } from "../styles/configureLock";
import "../css/bootstrap-grid.css";
import "../css/bootstrap.css";
import "../css/bootstrap-grid.css";
import "../css/bootstrap-reboot.css";
import "../css/custome-select.css";
import "../css/style.css";
import "../css/custome-select.css";
import 'react-calendar/dist/Calendar.css';
import SelectCurrency from "../components/selectCurrency";
import Web3 from 'web3';
import {APPROVAL_ABI, BINANCE_TOKEN_ABI} from "../contracts/abis";
import {BINANCE_TOKEN_ADDRESS} from "../contracts/constants";
import {useWeb3Core} from "../web3Connector";
import Calendar from 'react-calendar';
import {isNumber} from "util";

//1630078843 + 604800

const ConfigureLock: React.FC<{ addressOfToken: string | null, tokenName: string }> = ({addressOfToken, tokenName}) => {
    const [showSelect, setShowSelect] = useState(false);
    const [currency, setCurrency] = useState({name: "KCS Coin"});
    const [сurrencyIcon, setCurrencyIcon] = useState({icon: KscImg});
    const [lockAmount, setLockAmount] = useState<number>(0);
    const [timestamp, setTimestamp] = useState<string>('0');
    const [ableToLock, setAbleToLock] = useState<boolean>(false);
    const [selectState, setSelectState] = useState<string>('days');
    const [decimals, setDecimals] = useState<string>('0');
    const web3 = new Web3(Web3.givenProvider);
    const {account} = useWeb3Core();
    const TOKEN_CONTRACT = new web3.eth.Contract(BINANCE_TOKEN_ABI as any, BINANCE_TOKEN_ADDRESS);
    const Contract = new web3.eth.Contract(APPROVAL_ABI, addressOfToken as string);


    const lockTokens = async () => {
        if (addressOfToken === null || undefined || lockAmount === 0 || account === null) return 0;
        TOKEN_CONTRACT.methods.lockTokens(
            addressOfToken,
            (lockAmount * 10**parseInt(decimals)).toString(),
            Math.floor(convertToUnixDate(timestamp) / 1000),
            true
        ).send({from: account, value: 10 ** 18})
    };

    const approve: () => void = async () => { //pass contract abi with allowance method, and token address;
        if (addressOfToken === null || undefined) return 0;
        await Contract.methods.decimals().call().then((r: any)=> setDecimals(r));
        await Contract.methods.approve(account,  (lockAmount* 10**parseInt(decimals)).toString()).send({from: account}).then((r: any) => {
            if (r.status) {
                setAbleToLock(true);
            }
        });
        return
    };

    const convertToUnixDate: (a: string) => number = (timestamp) => {
        const current: number = new Date().getTime();
        switch (selectState) {
            case 'days':
                return current + parseInt(timestamp) * 24 * 60 * 60 * 1000;
            case 'month':
                return current + parseInt(timestamp) * 30 * 24 * 60 * 60 * 1000;
            case 'year':
                return current + parseInt(timestamp) * 365 * 24 * 60 * 60 * 1000;
            default:
                return 0;
        }
    }

    const dateInit: (value: string) => void = (value) => {
        switch (value) {
            case 'days':
                setSelectState('days');
                break;
            case 'month':
                setSelectState('month');
                break;
            case 'year':
                setSelectState('year');
                break;
            default:
                return;
        }
    };

    const dateWithTime = new Date(convertToUnixDate(timestamp));

    const handleChangeCurrency = (e: any) => {
        setCurrency({name: e.target.id});
        if (e.target.id === "KCS Coin") {
            setCurrencyIcon({icon: KscImg});
        }
        if (e.target.id === "ETH Coin") {
            setCurrencyIcon({icon: EthImg});
        }
        if (e.target.id === "BTC Coin") {
            setCurrencyIcon({icon: BitcoinImg});
        }
        setShowSelect(false);
    };

    return (
        <>
            <section className="hero_banner banner-sec banner-v2 banner-v3">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-12"></div>
                    </div>
                    <section className="create-lock configure-lock">
                        <div className="container px-1">
                            <div className="row min-vh-100 align-items-center mx-0">
                                <div className="col-md-12 px-0">
                                    <div className="row justify-content-center w-100 px-sm-5">
                                        <div className="col-md-12 col-lg-6 col-xl-6">
                                            <div className="card rounded-lg w-60 shadow">
                                                <div
                                                    className=" text-center border-bottom-0
                        dark-mode card-header"
                                                >
                                                    <img src={LockGreenSmall} alt="lock"/>
                                                    <span
                                                        style={{marginLeft: "3px"}}
                                                        className="font-16 font-weight-bold"
                                                    >
                            Lock Liquidity
                          </span>
                                                </div>
                                                <div className="card-body px-4 pb-4">
                                                    <div className="box-1 w-100 position-relative p-0">
                                                        <div
                                                            className="d-flex justify-content-between p-4
                        mb-2"
                                                        >
                                                            <div className="left-part">
                                                                <h6 className="font-weight-bold">
                                                                    Lock Amount
                                                                </h6>
                                                                <input className='inputSpec'
                                                                       onChange={(e) => setLockAmount(parseFloat(e.target.value))}/>
                                                            </div>

                                                            <div className="right-part">
                                                                {/*       <div>
                                                                    <div className="lang-select">
                                                                        <button
                                                                            className="btn-select"
                                                                            value={"en"}
                                                                            onClick={() => setShowSelect(!showSelect)}
                                                                        >
                                                                            <li>
                                                                                <img src={сurrencyIcon.icon} alt=""/>
                                                                                <span>{currency.name}</span>
                                                                            </li>
                                                                        </button>
                                                                        {showSelect && (
                                                                            <SelectCurrency
                                                                                handleChange={handleChangeCurrency}
                                                                                KSC={KscImg}
                                                                                ETH={EthImg}
                                                                                BTC={BitcoinImg}
                                                                            />
                                                                        )}
                                                                    </div>*/}
                                                                {tokenName}
                                                            </div>
                                                        </div>
                                                        <div className="text-center lock-ab">
                                                            <img src={LockMiddle} alt=""/>
                                                        </div>
                                                        <div
                                                            className="d-flex justify-content-between p-4
                        border-top"
                                                        >
                                                            <div className="left-part">
                                                                <h6 className="font-weight-bold">Unlock Day</h6>
                                                                <span
                                                                    className="text-gray">{dateWithTime.toLocaleDateString()}</span>
                                                            </div>
                                                            <div className="right-part">
                                                                <h6 className="font-weight-bold">Period</h6>
                                                                <input className='inputSpec'
                                                                       onChange={(e) => setTimestamp(e.target.value)}/>
                                                                <span className="text-gray font-weight-bold">
                                                            <select id="days" className="border-0" onChange={(e) => dateInit(e.target.value)}>
                                                                <option value="days">Days</option>
                                                                <option value="month">Month</option>
                                                                <option value="year">Year</option>
                                                            </select>
                                                            </span> 
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <StyledBtn className="text-center mt-5">
                                                        {ableToLock ?
                                                        
                                                            <a
                                                            href="#"
                                                            className=" lock-btn-configure px-sm-4 px-2 py-2 mb-2 btn btn-gray cbtn"
                                                            onClick={lockTokens}
                                                            >
                                                                Lock {tokenName}
                                                            </a> : <a
                                                                href="#"
                                                                className="btn btn-primary px-sm-4 px-2 py-2 mr-sm-3 mb-2"
                                                                onClick={approve}>
                                                                Approve Lock
                                                            </a>
                                                                }
                                                    </StyledBtn>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default ConfigureLock;
