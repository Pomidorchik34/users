import React from "react";
import video from "./assets/images/video.mp4";
import Users from "./Components/users.jsx";
import users from "./user.json";
import "./App.css";

function App() {
  return (
    <>
      <video className="video" src={video}></video>
      <h1 className="users">Users</h1>
      <div className="container">
        {users.map((el, index) => {
          return <Users key={index} data={el} />;
        })}
      </div>
    </>
  );
}

export default App;
// image="https://picsum.photos/200/300"
// name="dimik"
// surname="Surname"
// phone="123"
// email="email"
// addres="123"
// cars="p50"
