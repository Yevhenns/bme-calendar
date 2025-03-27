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
  <img src="https://github.com/user-attachments/assets/6ac62eb8-ed87-43ea-943a-606b50dd64d9" alt="image" width="400">
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
  <img src="https://github.com/user-attachments/assets/b946cf10-677e-49f6-a568-71d45e8f5fd2" alt="image" width="400">
</p>

The current day is outlined.

The default type is Date Picker (type="calendar").

The default cell size is 24x24px (daySize="desktop").

To receive a 40x32px cell, add props to the Calendar (daySize="mobile"):

```tsx
<Calendar setDay={setDay} daySize="mobile" />
```
