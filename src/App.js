import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState();

  const sendMessage = (e) => {
    e.preventDefault();
    // setMessages([...messages, { username: username, message: input }]);
    // window.scrollTo(0, 999999999999);
    window.scrollTo(0, 999999999999);

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, messageInfo: doc.data() }))
        );
      });
  }, []);
  useEffect(() => {
    var user;
    while(!user){
       user=prompt("Enter username")
    }
    setUsername(user);
  }, []);
  return (
    
    <div className="App">
      <div className="welcome_img">
      <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Message-Chat-Icon-PNG-Image-715x657.png" width="80px" height="60px"></img>
      <h2>Welcome {username}</h2>
      </div>
      <form className="app_form" >
        <FormControl className="app_formControl">
          <Input className="app_input"
          placeholder="Enter a message"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton className="app_iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>

          {/* <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            {" "}
            Send
          </Button> */}
        </FormControl>
        {/* <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input> */}
      </form>
      <FlipMove>
        {messages.map(({ id, messageInfo }) => {
          return <Message key={id} username={username} message={messageInfo} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
