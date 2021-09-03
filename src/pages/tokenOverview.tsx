import React, { useEffect } from 'react';
import '../css/bootstrap-grid.css';
import '../css/bootstrap.css';
import '../css/bootstrap-grid.css';
import '../css/bootstrap-reboot.css';
import '../css/custome-select.css';
import '../css/style.css';
import KCS from '../images/KCS_Token.svg';
import BTC from '../images/BTC_Token.svg';
import Lock from '../images/Lock_Green_Big.svg';

const TokenOverview: React.FC<any> = () => {


  const time = new Date();
  useEffect(() => {
    localStorage.setItem('timee', JSON.stringify(time));
  },[]);

  const parseTime = localStorage.getItem(JSON.parse('timee'));

  function Progress() {
            
    };
  

    return (
        <>
            <section className="hero_banner banner-sec banner-v2 banner-v3">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">

                        </div>
                    </div>
        <section className="create-lock token-overview">
                        <div className="row min-vh-100 align-items-center mx-0">
                            <div className="col-md-12 px-0">
                                <div className="row justify-content-center w-100 px-sm-5">
                                    <div className="col-md-12 col-lg-6 col-xl-6">
                                        <div className="card rounded-lg w-60 shadow">
                                            <div className="card-header text-center border-bottom-0 pt-4">
                                                <span className="font-20 font-weight-bold">Token Overview</span>
                                            </div>

                                            <div className="card-body px-4 pb-4 pt-2">
                                                <div className="text-center" style={{color: '#FFF'}}>
                                                    <div>
                                                        <img src={KCS}/><span
                                                        className="ml-2 mr-2 font-weight-bold">KCS -</span>
                                                        <img src={BTC}/><span
                                                        className="ml-2 font-weight-bold">BTC</span>
                                                    </div>
                                                    <div className="mt-3">
                                                    <span
                                                        className="font-14 text-gray">0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B</span>
                                                    </div>
                                                </div>
                                                <div className="text-center mt-3">
                                                </div>
                                                <div className="mt-4" style={{color: '#FFF'}}>
                                                    <div className="box-1 d-flex justify-content-between p-4 mb-2">
                                                        <div className="left-part">
                                                            <h6 className="font-weight-bold font-20 mb-0 mt-3"> 99.99%
                                                                LOCKED</h6>
                                                        </div>
                                                        <div className="right-part">
                                                            <img src={Lock}/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="box-2 w-100 position-relative p-0 mt-4">
                                                    <div
                                                        className=" d-flex  justify-content-between px-sm-4 px-2 pt-4 pb-2 mb-2">
                                                        <div className="left-part">
                                                            <h6 className="font-weight-bold text-yellow">Total LP
                                                                tokens</h6>
                                                            <span className="text-gray">18784.38</span>
                                                        </div>

                                                        <div className="right-part">
                                                            <h6 className="font-weight-bold text-yellow">Total locked LP
                                                                tokens</h6>
                                                            <span className="text-gray">18781.8157</span>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className=" d-flex justify-content-between px-sm-4 px-2 pt-4 pb-2 mb-2">
                                                        <div className="left-part">
                                                            <h6 className="font-weight-bold text-yellow">Value</h6>
                                                            <span className="text-gray">18781.8157 LP tokens</span>
                                                        </div>

                                                        <div className="right-part">
                                                            <h6 className="font-weight-bold text-yellow">Unlock
                                                                Date</h6>
                                                            <span className="text-gray">05:30, 1st of Mar 2121</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <div className="hover:shadow-xl card mt-4 mb-4">
                                                <div className="card-body">
                                                    <div>
                                                        <div className="container">
                                                            <p className="title font-20 text-center">Your progress</p>


                                                            <div className="progress-box">

                                                                <div className="text-center">
                                                                    <div className="text-yellow text-center"><span
                                                                        className="font-extrabold">90   %</span> to
                                                                        Complete
                                                                    </div>

                                                                    <div className="progress blue" style={{backgroundColor: '#232323'}}>
                                                                    <span className="progress-left"> <span
                                                                        className="progress-bar"></span> </span> <span
                                                                        className="progress-right"> <span
                                                                        className="progress-bar"></span> </span>
                                                                        <div className="progress-value">90%</div>
                                                                    </div>
                                                                </div>


                                                                <div className="progress-text">
                                                                    <div className="text-lighter d-flex">Unlocks
                                                                        6/25/2022,
                                                                        6:11:18 PM
                                                                    </div>
                                                                    <div className="text-lighter d-flex">10 months 21
                                                                        days 18
                                                                        hours 18 minutes
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                        <div className="flex mt-6 items-end">
                                                            <div className="text-center">
                                                                <svg stroke="currentColor" fill="currentColor"
                                                                     stroke-width="0" viewBox="0 0 16 16"
                                                                     className="inline -mt-1" height="1em" width="1em"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd"
                                                                          d="M11.5 8h-7a1 1 0 00-1 1v5a1 1 0 001 1h7a1 1 0 001-1V9a1 1 0 00-1-1zm-7-1a2 2 0 00-2 2v5a2 2 0 002 2h7a2 2 0 002-2V9a2 2 0 00-2-2h-7zm0-3a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z"
                                                                          clip-rule="evenodd"/>
                                                                </svg>
                                                                <span
                                                                    className="text-main text-yellow">835,800</span> PLOCK<span
                                                                className="ml-2 text-yellow">8.36%</span>
                                                            </div>
                                                            <div className="text-right">
                                                                <div className="text-xs">
                                                                    <a href="https://bscscan.com/address/0x360365718BeA3807Da15C06273e0B476d48Bd77B"
                                                                       target="_blank"
                                                                       className="text-sm font-semibold no-underline text-secondary tracking-wide leading-tight pl-2">0x360..7dfB</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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

export default TokenOverview;