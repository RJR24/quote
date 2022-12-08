import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./componenets/Header.js";
import SearchResult from "./componenets/SearchResult.js";

function App() {
  const [qouteFiltred, setQouteFiltred] = useState([]);
  const fetchQoutes = () => {
    let keyword = document.getElementById("Input_Search_JSX").value;
    fetch(
      keyword !== ""
        ? `https://akaramifar-quote-server.herokuapp.com/quotes/search?term=${keyword}`
        : `https://akaramifar-quote-server.herokuapp.com/quotes`
    )
      .then((Response) => Response.json())
      .then((data) => {
        setQouteFiltred(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetch(`https://akaramifar-quote-server.herokuapp.com/quotes`)
      .then((Response) => Response.json())
      .then((data) => {
        setQouteFiltred(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="Div_App_Style">
      <Header fetchQoutes_F={fetchQoutes} />
      <SearchResult qoute_Pr={qouteFiltred} />
    </div>
  );
}

export default App;
