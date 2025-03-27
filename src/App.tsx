import { useState } from "react";
import { Calendar } from "./components/Calendar/Calendar";
import "./App.css";

function App() {
  const [day, setDay] = useState<string>();
  const [range, setRange] = useState<string[]>();

  return (
    <>
      <h2>Календар</h2>
      <Calendar setDay={setDay} />
      <p>Дата: {day}</p>
      <Calendar setDay={setDay} daySize={{ width: 40, height: 32 }} />
      <p>Дата: {day}</p>
      <h2>Діапазон дат</h2>
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
