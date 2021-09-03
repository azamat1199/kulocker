export interface UseWeb3Core extends InitialState{
    connect: () => void;
    disconnect: ()=> void;
}

export interface InitialState {
    isConnected: boolean;
    account: string | null;
    chainId: number | null;
    balance: string | null;
}