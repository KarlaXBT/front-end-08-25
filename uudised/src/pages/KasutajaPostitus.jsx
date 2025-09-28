import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function KasutajaPostitus() {
  const [postitused, setPostitused] = useState([]);
  const { kasutajaId } = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPostitused(data));
  }, []);

  return (
    <div>
      {postitused
        .filter((item) => item.userId === Number(kasutajaId))
        .map((item) => (
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
          </div>
        ))}
    </div>
  );
}

export default KasutajaPostitus;
