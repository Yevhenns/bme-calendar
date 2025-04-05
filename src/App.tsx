import { useState } from "react";
import { Calendar } from "./components/Calendar/Calendar";
import "./App.css";

function App() {
  const [day, setDay] = useState<string>();
  const [range, setRange] = useState<string[]>();

  return (
    <>
      <Calendar setDay={setDay} />
      <p>Дата: {day}</p>
      <Calendar type="range" setRange={setRange} range={range} />
      <div>
        <p>Список дат:</p>
        <ul>
          {range?.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
