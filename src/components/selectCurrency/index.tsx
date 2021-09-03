import React from "react";

const SelectCurrency: React.FC<any> = ({handleChange, KCS, ETH, BTC}) => {
  return (
    <div className="b">
      <ul id="a">
        <li onClick={handleChange} id="KCS Coin">
          <img id="KCS Coin" src={KCS} alt="" />
          <span id="KCS Coin">KCS Coin</span>
        </li>
        <li onClick={handleChange} id="ETH Coin">
          <img id="ETH Coin" src={ETH} alt="" />
          <span id="ETH Coin">ETH Coin</span>
        </li>
        <li onClick={handleChange} id="BTC Coin">
          <img id="BTC Coin" src={BTC} alt="" />
          <span
            // onClick={handleChangeCurrency}
            id="BTC Coin"
          >
            BTC Coin
          </span>
        </li>
      </ul>
      <span className="caret"></span>
    </div>
  );
};

export default SelectCurrency;
