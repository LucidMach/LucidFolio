import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import password from "../../styles/password.module.css";
import { ChangeEvent, useState } from "react";
import Image from "next/dist/client/image";
import { auth } from "../../firebase";
import router from "next/router";

const PassWord: React.FC = () => {
  const [pass, setPass] = useState<string>("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  if (error) {
    return (
      <div className={password.container}>
        <p style={{ color: "var(--er" }}>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return (
      <div className={password.container}>
        <Image src="/LoGo.png" alt="HexMach" width="50" height="60" />
      </div>
    );
  }
  if (user) {
    router.push("/admin/dashboard");
  }

  return (
    <div className={password.container}>
      <form
        onSubmit={() => signInWithEmailAndPassword("lucidmach@gmail.com", pass)}
      >
        <input
          className={password.input}
          placeholder="enter key"
          type="password"
          value={pass}
          onChange={(e) => handleChange(e)}
        ></input>
      </form>
    </div>
  );
};

export default PassWord;
