import React from "react";
import JumboData from "./fixtures/jumbo.json"
import Jumbotron from "./ components/jumbotron";
export default function App() {
  return (
  <Jumbotron.Container>
    {JumboData.map((item) =>
    <jumbotron key={item.id} direction ={item.direction}>
      <p>{item.title}</p>
      <p>{item.subtitle}</p>
      <p>{item.image}</p>
      <p>{item.alt}</p>
      
      </jumbotron>)}
  </Jumbotron.Container>
  );
}


