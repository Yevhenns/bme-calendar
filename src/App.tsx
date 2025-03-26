import { useState } from "react";
import "./App.css";
import { Calendar } from "./components/Calendar/Calendar";

function App() {
  const [selectedDay, setSelectedDay] = useState<string | undefined>();

  return (
    <>
      <Calendar setDay={setSelectedDay} />
      <p>Дата: {selectedDay}</p>
    </>
  );
}

export default App;
