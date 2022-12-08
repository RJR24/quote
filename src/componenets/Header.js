import React, {useState, useEffect} from 'react';
import "./Header.css";

const Header = ({fetchQoutes_F}) => {
    const [qoute, setQoute] = useState([]);
    const fetchQoutes = () =>{
        fetch('https://akaramifar-quote-server.herokuapp.com/quotes/random')
        .then(Response => Response.json())
        .then(data => {
            setQoute(data);
        })
        .catch(err => console.log(err));
    }
    useEffect(() => {
        const interval = setInterval(() => fetchQoutes(), 5000);
        return () => clearInterval(interval);
    }, [])    
    return(
        <div className="Div_Header_Style">
            <div className="Div_MainQoute_Style">
                <div className="Div_Qoute_Style"><i className="I_Qoute_Style fas fa-quote-left"></i>{qoute.Quote || "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed."}</div>
                <div className="Div_Author_Style">{qoute.author || "Michael Jordan"}</div>
            </div>
            <div className="Div_Search_Style">
                <input id="Input_Search_JSX" type="text" className="Input_Search_Style" placeholder="Search your Keyword"></input>
                <p className="P_Search_Style" onClick={() => fetchQoutes_F()}>Search</p>
            </div>
        </div>
    )
}

export default Header;