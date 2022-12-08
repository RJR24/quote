import React from "react";
import "./SearchResult.css";

const SearchResult = ({ qoute_Pr }) => {
  return (
    <div className="Div_Main_Style">
      {qoute_Pr.length > 0 ? (
        qoute_Pr.map((qoute, index) => {
          return (
            <div className="Div_MainQouteFiltered_Style" key={index}>
              <div className="Div_QouteFiltered_Style">
                <i className="I_Qoute_Style fas fa-quote-left"></i>
                {qoute.quote}
              </div>
              <div className="Div_Author_Style">{qoute.author}</div>
            </div>
          );
        })
      ) : (
        <p className="P_Nothing_Style">Nothing to show</p>
      )}
    </div>
  );
};

export default SearchResult;
