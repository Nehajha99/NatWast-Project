import React from "react";
import Header from "/home/neha/Desktop/natwest_project/project2/src/components/pages/Expanses/component/Header.js";
import Balance from "/home/neha/Desktop/natwest_project/project2/src/components/pages/Expanses/component/Balance.js";
import IncomeList from "/home/neha/Desktop/natwest_project/project2/src/components/pages/Expanses/component/IncomeList.js";
import ExpenseList from "/home/neha/Desktop/natwest_project/project2/src/components/pages/Expanses/component/ExpanseList.js";
import AddTransaction from "/home/neha/Desktop/natwest_project/project2/src/components/pages/Expanses/component/AddTransaction.js";
import { GlobalContextProvider } from "./context/GlobalState";
import "./AppExpence.css"

const App1 = () => {
  return (
    <div className="expen">
        <GlobalContextProvider>
          <div className="main-container">
            <div className="app-wrapper">
              <Header />
              <Balance />
              <IncomeList />
              <ExpenseList />
              <AddTransaction />
            </div>
          </div>
        </GlobalContextProvider>
    </div>
  ); 
};

export default App1;
