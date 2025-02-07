import React, { useState } from "react";

const ExpenseForm: React.FC = () => {
  const [date, setDate] = useState("");
  const [sum, setSum] = useState("");
  const [category, setCategory] = useState("Еда");
  const [comment, setComment] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const expense = { dateTime: date, sum: parseFloat(sum), category, comment, author: "User" };

    try {
      const response = await fetch("http://localhost:5000/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(expense),
      });

      if (response.ok) {
        alert("Расход успешно добавлен!");
        setDate("");
        setSum("");
        setCategory("Еда");
        setComment("");
      } else {
        alert("Ошибка при добавлении расхода!");
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <label>Дата:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

      <label>Сумма:</label>
      <input type="number" value={sum} onChange={(e) => setSum(e.target.value)} required />

      <label>Категория:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Еда">Еда</option>
        <option value="Транспорт">Транспорт</option>
        <option value="Развлечения">Развлечения</option>
      </select>

      <label>Комментарий:</label>
      <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />

      <button type="submit">Добавить</button>
    </form>
  );
};

export default ExpenseForm;
