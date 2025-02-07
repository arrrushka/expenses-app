import React from "react";
import { useState } from "react";

const categories = ["Food", "Transport", "Entertainment"];

export default function ExpenseForm() {
  const [form, setForm] = useState({
    date: "",
    sum: "",
    category: categories[0],
    comment: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (response.ok) {
      alert("Transaction added!");
      setForm({ date: "", sum: "", category: categories[0], comment: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <label className="block mb-2">
        Date:
        <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full p-2 border rounded" required />
      </label>
      <label className="block mb-2">
        Sum:
        <input type="number" name="sum" value={form.sum} onChange={handleChange} className="w-full p-2 border rounded" required />
      </label>
      <label className="block mb-2">
        Category:
        <select name="category" value={form.category} onChange={handleChange} className="w-full p-2 border rounded">
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <label className="block mb-2">
        Comment:
        <input type="text" name="comment" value={form.comment} onChange={handleChange} className="w-full p-2 border rounded" />
      </label>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-2">Add Expense</button>
    </form>
  );
}