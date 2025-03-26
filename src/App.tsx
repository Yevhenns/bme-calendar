import { useState } from "react";
import "./App.css";
import { Calendar } from "./components/Calendar/Calendar";

function App() {
  const [selectedDay, setSelectedDay] = useState<string | undefined>(undefined);

  return (
    <>
      <Calendar setSelectedDay={setSelectedDay} />
      <p>Дата: {selectedDay}</p>
    </>
  );
}

export default App;
