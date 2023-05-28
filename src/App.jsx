import "./App.css";
import { Auth } from "./components/Auth";
import Cookies from "universal-cookie";
import { useState, useRef } from "react";
import { Chat } from "./components/Chat";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInput = useRef(null);

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }
  return (
    <div>
      {room ? (
        <Chat room={room} />
      ) : (
        <div>
          <label htmlFor="chatroom">Enter Room name: {""}</label>
          <input type="text" ref={roomInput} />
          <button onClick={() => setRoom(roomInput.current.value)}>
            Enter chat
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
