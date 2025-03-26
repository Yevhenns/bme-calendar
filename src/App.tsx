import { useState } from "react";
import "./App.css";
import { Calendar } from "./components/Calendar/Calendar";

function App() {
  const [day, setDay] = useState<string | undefined>();
  const [range, setRange] = useState<string[] | undefined>();

  return (
    <>
      <Calendar setDay={setDay} />
      <p>Дата: {day}</p>
      <Calendar type="range" setRange={setRange} />
      <div>
        <p>Список дат</p>
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
