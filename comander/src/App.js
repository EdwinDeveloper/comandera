import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import { posts } from "./info";
import { io } from "socket.io-client";

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [socket, setSocket] = useState(null);
  const [indexMenu, setIndexMenu] = useState(0)
  useEffect(() => {
    setSocket(io("http://localhost:4000"));
  }, []);

  useEffect(() => {
    socket?.emit("newUser", user);
  }, [socket, user]);
  function changeIndex(key){
    console.log("Index jajaja : ", key);
  }
  return (
    <div className="container">
      {user ? (
        <div className="board">
          <div className="menu">
            {
              posts.map((post, index)=>(
                <Card key={index} post={post} clic={changeIndex}/>
              ))
            }
            <span className="username">{user}</span>
          </div>
          {
              <div className="interaction">
              <img src={posts[indexMenu].postImg} alt="" className="postImg" />
            </div>
          }
        </div>
      ) : (
        <div className="login">
          <h2 className="tittleLogin">Wenos Food Park</h2>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="buttonLogin" onClick={() => setUser(username)}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;