import "./App.css";
import React from "react";
import StartPage from "./start_page";
import { useRef , useState, useEffect} from "react";
import AboutMePage from "./About_me_page";

function customScrollBy(amount, duration) {
  const perTick = amount / (duration / 10);
  let scrolledAmount = 0;

  const interval = setInterval(() => {
      window.scrollBy(0, perTick);
      scrolledAmount += perTick;

      if (scrolledAmount >= amount) {
          clearInterval(interval);
      }
  }, 10);
}



function App() {
  const div = useRef(null);  
  
  const[divHeight, setDivHeight] = useState(0);
  useEffect(() => {
    if(div.current){
      setDivHeight(div.current.offsetHeight);
      // console.log(div.current.height);
    }

    // console.log(div.current.height);
  }, [div]);
  const handleScroll = () => {
    customScrollBy(divHeight, 1000);
    console.log(divHeight);
  }

  return (

    <div>
      <StartPage ref={div} />
      <AboutMePage />
   
    </div>
  );
};


export default App;

