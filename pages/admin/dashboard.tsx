import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/dist/client/image";
import { auth } from "../../firebase";
import router from "next/router";

const DashBoard: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  if (error) {
    router.push("/admin");
  }
  if (loading) {
    return (
      <div>
        <Image src="/LoGo.png" alt="HexMach" width="50" height="60" />
      </div>
    );
  }
  if (user) {
    return (
      <>
        <h1>If you are seeing this...</h1>
      </>
    );
  }
};

export default DashBoard;
