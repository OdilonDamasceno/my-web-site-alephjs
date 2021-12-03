import React from "react";
import Eletronics from "../eletronics.tsx";
import "./home_page.css";

export default function HomePage() {

  const time = new Date().getHours();
  let greeting;
  if (time < 12)
    greeting = 'Good Morning';
  else if (time >= 12 && time <= 17)
    greeting = 'Good Afternoon';
  else if (time >= 17 && time <= 24)
    greeting = 'Good Evening';

  return <section id="home">
    <div>
      <p className="great">{greeting}</p>
      <b className="name">I'm Odilon Damasceno</b>
      <p className="help">Need help? I can help you!</p>
    </div>
    <Eletronics />
  </section>
}