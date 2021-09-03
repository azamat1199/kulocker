import React, {useEffect, useReducer, useState} from 'react';
import {Context} from "./useWeb3";
import web3 from "web3";
import Web3Core from "../Core/core";
import {Web3Connector} from "./reducer";
import {initialState} from "../state/state";

const Web3CoreProvider: React.FC<{ children: React.ReactChild }> = ({children}) => {
    const [state, dispatch] = useReducer(Web3Connector, initialState);
    const Web3 = new web3(web3.givenProvider);

    const Core = new Web3Core(dispatch);

    useEffect(() => {
        getInitialData().then(((r: string[]) => {
                if (r.length !== 0) Core.isConnectionEstablished();
                else return;
            }
        ))
    }, []);

    const getInitialData = async () => {
        let r: Promise<string[]> = Web3.eth.getAccounts();
        return r;
    };


    const contextOptions = {
        ...state,
        connect: Core.connect,
        disconnect: Core.disconnect
    };

    return (
        <Context.Provider value={contextOptions}>
            {children}
        </Context.Provider>
    )
}

export default Web3CoreProvider;