import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import addBudget from "../hooks/addBudget";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import Header from "../components/Header";
import Button from "../components/Button";

function AddBudget(props) {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [modal, setModal] = useState(false);

  const nav = useNavigate();

  const userEmail = props.userInfo.email;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === undefined || budget === undefined) {
      // if (name === undefined || !Number.isInteger(budget)) {
      setModal(true);
    }
    addBudget(userEmail, name, budget, startDate, endDate).then((res) => {
      console.log(res);
      nav(`/home/${props.userInfo.id}`);
    });
  };

  return (
    <>
      <Header userInfo={userEmail} />
      <p>ADD BUDGET PAGE</p>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Budget Name:</h3>
          <input
            className=""
            name="budget_name"
            type="text"
            placeholder="Budget name..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <h3>Monthly Income Amount:</h3>
          <input
            className=""
            name="monthly_income"
            type="number"
            placeholder="Budget amount..."
            value={budget}
            onChange={(e) => {
              setBudget(Number(e.target.value));
            }}
          />
          <h3>Start Date:</h3>
          <DatePicker
            name="start_date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <h3>End Date:</h3>
          <DatePicker
            name="end_date"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
        <Button>Add Budget!</Button>
      </form>
      {modal && <p>Please ensure all inputs are filled out properly!</p>}
    </>
  );
}

export default AddBudget;
