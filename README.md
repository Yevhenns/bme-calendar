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

Default size is 24x24px
For receiving 40x32px add props to Calendar

```tsx
<Calendar setDay={setDay} daySize={{ width: 40, height: 32 }} />
```
