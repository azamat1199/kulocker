import {createContext, useContext} from "react";
import {UseWeb3Core} from "../types";


export const Context = createContext<UseWeb3Core>({
    account: null,
    chainId: null,
    connect: () => undefined,
    isConnected: false,
    balance: null,
    disconnect: () => undefined
});

export const useWeb3Core: () => UseWeb3Core = () => {
    return useContext(Context);
};
