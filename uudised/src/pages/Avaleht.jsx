import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Avaleht() {
  const [postitused, setPostitused] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPostitused(data));
  }, []);

  return (
    <div>
      <div>See on avaleht, nähtav localhost:5173 aadressil</div>

      <img
        src="https://fastly.picsum.photos/id/885/800/400.jpg?hmac=jZg35sWLXKVyhTn8Pm-ahn5mi8NHtJgxlxRaG7ZMEzU"
        alt=""
      />
      {postitused.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "10px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
            User ID: {item.userId}
          </div>
          <div style={{ marginBottom: "5px" }}>Post ID: {item.id}</div>
          <div style={{ fontSize: "16px", marginBottom: "5px" }}>
            {item.title}
          </div>
          <div style={{ color: "#555" }}>{item.body}</div>
          <Link to={"kasutaja-postitus/" + item.userId}>
            <button>Kõik selle kasutaja postitused</button>
          </Link>
          <Link to={"vaata-postitus/" + item.id}>
            <button>Vaata postitust</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Avaleht;
