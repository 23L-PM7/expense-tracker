import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [name, setName] = useState("Hello");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit() {
    console.log({ name, description, category });
  }

  return (
    <main className={``}>
      <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <textarea placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      <br />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option></option>
        <option>HTML</option>
        <option>CSS</option>
        <option>JS</option>
      </select>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </main>
  );
}
