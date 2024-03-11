import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleSubmit() {
    console.log({ email, pass });
    axios
      .post("http://localhost:3000/login", {
        email,
        pass,
      })
      .then(() => {
        alert("Success");
        localStorage.setItem("login", `${email}:${pass}`);
        window.location = "/";
      })
      .catch((e) => {
        if (e.response.status === 401) {
          alert("Username or password is incorrect");
        }
      });
  }

  return (
    <main className={``}>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />

      <button onClick={handleSubmit}>Log in</button>
    </main>
  );
}
