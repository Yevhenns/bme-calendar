## Calendar

Developed for [Book My Event](https://evently-book.vercel.app/).

[Examples](https://bme-calendar-examples.vercel.app/)

## Instalation

```bash
npm i bme-calendar
```

## Usage

Import styles

```tsx
import "bme-calendar/style.css";
```

Date Picker 24x24px

```tsx
import { useState } from "react";
import { Calendar } from "./components/Calendar/Calendar";
import "bme-calendar/style.css";

function App() {
  const [day, setDay] = useState<string>();

  return (
    <>
      <h2>Календар</h2>
      <Calendar setDay={setDay} />
      <p>Дата: {day}</p>
    </>
  );
}

export default App;
```

<p align="center">
  <img src="https://github.com/user-attachments/assets/44893a79-f598-46d9-92c5-4828bf430ee6" alt="image" width="400">
</p>

Date Range Picker 24x24px

```tsx
import { useState } from "react";
import { Calendar } from "./components/Calendar/Calendar";
import "bme-calendar/style.css";

function App() {
  const [range, setRange] = useState<string[]>();

  return (
    <>
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
```

<p align="center">
  <img src="https://github.com/user-attachments/assets/203145e8-8a1b-4faf-ba5e-4d4611d75058" alt="image" width="400">
</p>

Default size is 24x24px

For receiving 40x32px add props to Calendar

```tsx
<Calendar setDay={setDay} daySize={{ width: 40, height: 32 }} />
```
