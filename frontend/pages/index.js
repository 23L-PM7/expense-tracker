import axios from "axios";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const tempcategories = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Gift",
  },
  {
    id: 3,
    name: "Food",
  },
];

export default function Home() {
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("Hello");
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  // useEffect(() => {
  //   const login = localStorage.getItem("login");
  //   axios.get(`http://localhost:3000/categories?loginInfo=${login}`);

  //   fetch("localhost/categories");

  //   setCategories(tempcategories);
  // }, []);

  // const options = categories.map((category) => {
  //   return {
  //     value: category.id,
  //     label: category.name,
  //   };
  // });

  function handleSubmit() {
    console.log({ name, description, categoryId: selectedOption.value });
  }

  return (
    <main className={``}>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <textarea
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </main>
  );
}
