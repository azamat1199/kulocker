import React, {useContext, useState} from "react";
import { connect, useSelector } from 'react-redux';
import '../../css/bootstrap-reboot.css';
import '../../css/custome-select.css';
import '../../css/style.css';
import {useHistory} from 'react-router-dom';
import {Props} from "./typesLockTokens";
import Web3 from 'web3';
import {APPROVAL_ABI} from "../../contracts/abis";

interface Istore {
    myInput:{
        input: string
    }
}

const LockTokens: React.FC<Props> = ({isOpenLockTokens, setIsOpenLockTokens, setAddressOfToken, setTokenName, tokenName}) => {
    const myInput = useSelector((state:Istore) => state);
    

    const web3 = new Web3(Web3.givenProvider);
    let count: number = 1;
    let countModalClick: number = 0;
    const [length, setLength] = useState<number>(0);


    const observeForClick: ()=> void = () => {
        ++count;
        if (countModalClick + count % 2 === 0) {
            setIsOpenLockTokens(false);
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

    const requestForAToken: (a: string)=> void = async (address) => {
        console.log('call')
        const tokenContract = await new web3.eth.Contract(APPROVAL_ABI, address as string);
        const symbol: string = await tokenContract.methods.symbol().call();
        setTokenName(symbol);
    }

    const history = useHistory();

    return (
        <>
            {isOpenLockTokens ?
                <div className="modalContainer" onClick={observeForClick}>
                    <div className="modal-dialog" onClick={observeForModalClick}>
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <h5 className="modal-title">Create New Lock</h5>02
                            </div>
                            <div className="modal-body">
                                <div className="form-group mb-0">
                                    <input type="text" className="form-control"
                                           placeholder="Pair address or Contract Address"
                                        //    value={lockValue}
                                           defaultValue={myInput.myInput.input}
                                           name="" 
                                           onChange={(e)=> {
                                        setAddressOfToken(e.target.value);
                                        setLength(e.target.value.length); 
                                        console.log(e.target.value.length)
                                        if(e.target.value.length === 42) requestForAToken(e.target.value);
                                        else setTokenName('');
                                    }}/>
                                </div>
                                <div>
                                    We found: {tokenName}
                                </div>
                            </div>
                            <div className="modal-footer  border-0">
                                {length !== 0 ? <a onClick={() => {
                                    setIsOpenLockTokens(false);
                                    history.push('/configureLock');
                                }} className="btn btn-primary px-4 py-2 btn-w">Continue</a> : <a className="btn btn-gray px-4 py-2 btn-w">Continue</a>}
                            </div>
                        </div>
                    </div>
                </div> : null
            }
        </>
    );
};

export default LockTokens;