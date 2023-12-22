import React from "react";
import "./styles.css";

function HelloWolrdArticle() {
  return (
    <article>
      <h1>Christmas Coding</h1>
      <p>{"There's nothing more geilo meilo than Christmas Coding!"}</p>
    </article>
  );
}

export default function App() {
  return <HelloWolrdArticle />;
}
