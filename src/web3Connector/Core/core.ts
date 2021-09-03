import Web3 from 'web3';

type Accounts = string[];
type Network = number;
type Dispatch = any;
let countCall: number = 0;

interface web3Core {
    dispatch: Dispatch;
    isConnectionEstablished: () => void;
    connect: () => void;
    web3: Web3;
    initial: string;
    disconnect: () => void;
}

class Web3Core implements web3Core {
    web3 = new Web3(Web3.givenProvider);
    dispatch: Dispatch = null;
    initial: string = '';
    constructor(dispatch: Dispatch) {
        this.dispatch = dispatch;
    }
    public isConnectionEstablished = async () => {
        const accounts: Accounts = await this.web3.eth.getAccounts();
        const network: Network = await this.web3.eth.net.getId();

        this.initializeListeners();

        this.dispatch({
            type: "Connect", payload: {
                account: accounts[0],
                netId: network
            }
        });
        return;
    }

    private getInitial = async (): Promise<void> => {
        const account: string[] = await this.web3.eth.getAccounts();
        const weiAmount: any = account[0] === undefined ? '0' : await this.web3.eth.getBalance(account[0]);
        const withoutDecimals = await this.web3.utils.fromWei(weiAmount);
        if (countCall === 0) {
            this.initial = withoutDecimals;
            this.dispatch({type: 'BalanceUpdate', payload: withoutDecimals});
        } else if (parseFloat(this.initial) !== parseFloat(withoutDecimals)) {
            this.initial = withoutDecimals;
            this.dispatch({type: 'BalanceUpdate', payload: withoutDecimals});
        }
        ++countCall;
        setTimeout(() => this.getInitial(), 300);
    }


    public connect = async () => {
        const accounts: string = await window.ethereum.request({method: 'eth_requestAccounts'});
        const network: Network = await this.web3.eth.net.getId();
        this.dispatch({
            type: "Connect", payload: {
                account: accounts[0],
                netId: network
            }
        });
        if (countCall === 0) this.initializeListeners();
        else return;
    }

    public disconnect = (): void => {
        this.dispatch({type: "AccountDisconnect", payload: null});
        return;
    }

    private initializeListeners = (): void => {
        this.getInitial();
        window.ethereum.on('accountsChanged', (accounts: string[]) => {
            this.dispatch({
                type: "AccountChanged",
                payload: accounts[0]
            });
        });
        window.ethereum.on('networkChanged', async (network: number) => {
            this.dispatch({
                type: "NetworkChanged",
                payload: network
            });
        });
        return;
    }
}

export default Web3Core;