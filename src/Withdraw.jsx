import React, { useState } from "react";
import formatNumber from "format-number";
//import photographer from "./images/girl.png";
import "./Withdraw.css";
import { useSelector, useDispatch } from "react-redux";

const Withdraw = () => {
  const username = "User";
  const dispatch = useDispatch();

  const { cat } = useSelector((state) => state.Reducer);
  const draw = () => {
    dispatch({
      type: "withdraw"
    });
  };
  const click = () => {
    dispatch({
      type: "sub"
    });
  };
  const [data, setData] = useState();

  const click2 = () => {
    dispatch({
      type: "Addbyinput",
      payload: data
    });
  };

  return (
    <div className="App">
      <img
        className="App__userpic"
        src={"https://image.ibb.co/nC8vGp/girl.png"}
        alt="photographer"
      />
      <p className="App__username">Hello, {username}! </p>
      <div className="App__amount">
        {formatNumber({ prefix: "$" })(cat)}
        <p className="App__amount--info">Total Amount</p>
      </div>

      <section className="App__buttons">
        <input id="effect-2"
          type="number"
          placeholder="Enter amount to withdraw"
          onChange={(e) => setData(Number(e.target.value))}
        />

        <button onClick={click2} className="btn btn-danger">
          Withdraw
        </button>
        <br/><br/>
        <button data-amount="10000" onClick={draw}>
          WITHDRAW $10,000
        </button>
        <button data-amount="5000" onClick={click}>
          WITHDRAW $5,000
        </button>
        <br/><br/>
      </section>
    </div>
  );
};

export default Withdraw;
