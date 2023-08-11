import React, { useState } from 'react'
import './App.css'
import Card from "./components/Card.tsx";

function App() {
  return (
    <>
      <Card url={"https://fakeimg.pl/350x200/?text=Music is good"} title={"Some music theory and very loooooooong" +
          " title for course looooool"} author={"Music" +
          " academy"} type={"Art/Music"} newPrice={"100"} oldPrice={""} reviewCount={"234"} />
      <Card url={"https://fakeimg.pl/350x200/?text=CS"} title={"Computer science for start"} author={"Harvard"} type={"Computer science"} newPrice={"522"} oldPrice={"100"} reviewCount={"5124"} />
      <Card url={"https://fakeimg.pl/350x200/?text=Bio"} title={"Biotechnology introducing"} author={"Institute bio" +
          " informatics"} type={"Biotechnology"} newPrice={"53"} oldPrice={"42"} reviewCount={"23"} />
      <Card url={"https://fakeimg.pl/350x200/?text=Drugs"} title={"Druuuuuuuuugs"} author={"TvoyDrugDiller"} type={"Drug"} newPrice={"312"} oldPrice={""} reviewCount={"3523"} />
      <Card url={"https://fakeimg.pl/350x200/?text=<))))))"} title={"Radio os good"} author={"RadioFob"} type={"Radio"} newPrice={"100"} oldPrice={"6"} reviewCount={"1234"} />
    </>
  )
}

export default App
