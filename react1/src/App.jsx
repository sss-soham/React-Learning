// import { EventHandling } from "./components/EventHandling";
//import { EventPropogation } from "./components/EventPropogation";
// import { EventProps } from "./components/EventProps";
//import NetflixCard from "./components/NetflixCard";

import { IncrementNumber } from "./components/hooks/IncrementNumber";
import "./components/EV.css"

export default function App() {
  return (
    <section className="container">
      {/* <NetflixCard />
      <h1>hi</h1> */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      {/* <EventPropogation /> */}
      <IncrementNumber/>
    </section>
  )
}