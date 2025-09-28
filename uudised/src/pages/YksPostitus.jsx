import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function YksPostitus() {
  const [postitus, setPostitused] = useState([]);
  const { postituseId } = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + postituseId)
      .then((response) => response.json())
      .then((data) => setPostitused(data));
  }, [postituseId]);
  // console.log(postitused);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
        User ID: {postitus.userId}
      </div>
      <div style={{ marginBottom: "5px" }}>Post ID: {postitus.id}</div>
      <div style={{ fontSize: "16px", marginBottom: "5px" }}>
        {postitus.title}
      </div>
      <div style={{ color: "#555" }}>{postitus.body}</div>
    </div>
  );
}

export default YksPostitus;
