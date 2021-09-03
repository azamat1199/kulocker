import {InitialState} from "../types";

declare global {
    interface Window {
        ethereum: any
    }
}

export const Web3Connector: (initialState: any, action: any) => any = (initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'Connect':
            return {
                ...initialState,
                isConnected: true,
                account: action.payload.account,
                chainId: action.payload.netId
            };
        case "AccountChanged":
            if (action.payload === undefined) {
                return {
                    ...initialState,
                    isConnected: false,
                    chainId: '',
                    account: ''
                };
            } else return {
                ...initialState,
                account: action.payload
            };
        case "AccountDisconnect":
            return {
                ...initialState,
                isConnected: false,
                chainId: '',
                balance: '0',
                account: ''
            };
        case "BalanceUpdate":
            return {
                ...initialState,
                balance: action.payload
            };
        case "NetworkChanged":
            return {
                ...initialState,
                chainId: action.payload
            };
        default:
            return initialState;
    }
};

