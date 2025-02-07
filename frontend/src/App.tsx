import React from "react";
import ExpenseForm from "./components/ExpenseForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Учёт расходов</h1>
      <ExpenseForm />
    </div>
  );
};

export default App;
