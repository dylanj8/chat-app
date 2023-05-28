import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebaseconfig";
import "../App.css";

export const Chat = (props) => {
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");
  const [messages, setMessages] = useState([]);
  const { room } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
    setNewMessage("");
  };

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe(); //this cleans up the useEffect//
  }, []);

  return (
    <div>
      <h1>Welcome to: {room}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button type="submit">send</button>
      </form>
      <div>
        {messages.map((mess, index) => {
          console.log(messages);
          return (
            <div key={index} className="text-box">
              <h2>{mess.user}:</h2>
              <h1>{mess.text}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
