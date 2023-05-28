import { auth, provider } from "../firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth = (props) => {
  const { setIsAuth } = props;

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>Sign in with Google to continue</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};
