// import { EventHandling } from "./components/EventHandling";
//import { EventPropogation } from "./components/EventPropogation";
// import { EventProps } from "./components/EventProps";
//import NetflixCard from "./components/NetflixCard";

// import { IncrementNumber } from "./components/hooks/IncrementNumber";
import "./components/EV.css"
import { LiftingState } from "./components/LiftingStateUp"
// import { DerivedState } from "./components/hooks/DerivedState"

export default function App() {
  return (
    <section className="container">
      {/* <NetflixCard />
      <h1>hi</h1> */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      {/* <EventPropogation /> */}
      {/* <IncrementNumber/> */}
      {/* <DerivedState/> */}
      <LiftingState/>
    </section>
  )
}