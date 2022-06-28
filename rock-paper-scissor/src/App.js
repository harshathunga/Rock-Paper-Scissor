import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userchoise, setuserchoice] = useState("rock");
  const [computerchoise, setcomputerchoice] = useState("rock");
  const [userscore, setuserscore] = useState(null);
  const [computerscore, setcomputerscore] = useState(null);
  const [gameover, setgameover] = useState(false);
  const [result, setresult] = useState("");
  const [finalresult, setfinalresult] = useState("");

  let choises = ["rock", "paper", "scissers"];

  const handle = (choise) => {
    setuserchoice(choise);
    generatecomms();
  };

  const generatecomms = () => {
    let ramdom = choises[Math.floor(Math.random() * choises.length)];

    setcomputerchoice(ramdom);
  };

  const reset = () => {
    window.location.reload();
  };

  useEffect(() => {
    const combo = userchoise + computerchoise;
    // console.log(combo);

    if (
      combo === "scisserspaper" ||
      combo === "paperrock" ||
      combo === "rockscissers"
    ) {
      const updatepoint = userscore + 1;
      setresult("user got the point");
      setuserscore(updatepoint);

      if (updatepoint === 5) {
        let res = " user won the game";
        setfinalresult(res);
        alert(res)
        setgameover(true);
      }
    }

    if (
      combo === "paperscissers" ||
      combo === "rockpaper" ||
      combo === "scissersrock"
    ) {
      const updatepoint = computerscore + 1;
      setresult("computer got the point");
      setcomputerscore(updatepoint);

      if (updatepoint === 5) {
        let res = "computer won the game";
        setfinalresult(res);
        setgameover(true);
      }
    }

    if (
      combo === "scissersscissers" ||
      combo === "rockrock" ||
      combo === "paperpaper"
    ) {
      setresult("no one got the points");
    }
  }, [userchoise, computerchoise]);

  return (
    <div className="App">
      <h2> Rock Paper Scissers</h2>
      <div className="h2">
      <h2>USER:- {userscore}</h2>
      <h2>COMPUTER:- {computerscore}</h2>
      </div>


      <h3 className="term-result">{result}</h3>
      <h3 className="final">{finalresult}</h3>
      <div>
        {choises.map((choise, index) => (
          <button className="button" key={index} onClick={() => handle(choise)}>
            {choise}
          </button>
        ))}
      </div>
      <div >{gameover && <button className="reset" onClick={() => reset()}>reset</button>}</div>

      <div className = "choise">
        <div className="user-choise">
          <img src={`images/${userchoise}.jpg`} alt="hello"></img>
        </div>

        <div className=" comp-choise">
          <img src={`images/${computerchoise}.jpg`} alt="hello"></img>
        </div>
      </div>

      {/* <div>
        {choises.map((choise, index) => (
          <button key={index} onClick={() => handle(choise)}>
            {choise}
          </button>
        ))}
      </div> */}
    </div>
  );
}

export default App;
