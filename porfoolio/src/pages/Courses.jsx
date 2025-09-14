import React, { useState } from "react";
import { Link } from "react-router-dom";

function Courses() {
  const [kursus, uuendaKursus] = useState("Valimata");
  return (
    <div>
      <Link to="/">
        <button>Tagasi</button>
      </Link>
      <button
        className={kursus === "udemy" ? "aktiivne" : undefined}
        onClick={() => uuendaKursus("udemy")}
      >
        Udemy
      </button>
      <button
        className={kursus === "coursera" ? "aktiivne" : undefined}
        onClick={() => uuendaKursus("coursera")}
      >
        Coursera
      </button>
      <button
        className={kursus === "codecademy" ? "aktiivne" : undefined}
        onClick={() => uuendaKursus("codecademy")}
      >
        Codecademy
      </button>
      <button
        className={kursus === "udacity" ? "aktiivne" : undefined}
        onClick={() => uuendaKursus("udacity")}
      >
        Udacity
      </button>
      {kursus === "udemy" && (
        <div>Siin on kirjeldus (loend) {kursus}.com läbitud kursustest</div>
      )}
      {kursus === "coursera" && (
        <div>Siin on kirjeldus (loend) {kursus}.com läbitud kursustest</div>
      )}
      {kursus === "codecademy" && (
        <div>Siin on kirjeldus (loend) {kursus}.com läbitud kursustest</div>
      )}
      {kursus === "udacity" && (
        <div>Siin on kirjeldus (loend) {kursus}.com läbitud kursustest</div>
      )}
    </div>
  );
}

export default Courses;
