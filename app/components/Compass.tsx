
'use client'
import { useState } from "react"
import CardinalDirection, { renderWindInChinese, nextWindDirection } from "../types/CardinalDirection"
import Direction from "./Direction"

const Compass = (props: {
  
}) => {
  const [windBottom, setWindBottom] = useState(1)
  const [windRight, setWindRight] = useState(2)
  const [windTop, setWindTop] = useState(3)
  const [windLeft, setWindLeft] = useState(4)
  const [windPrevailing, setWindPrevailing] = useState(1)
  
  return (
    <div className="grid grid-cols-3 grid-rows-3">
      <div className="col-start-2"><Direction initialDirection={windTop}/></div>
      <div className="row-start-2"><Direction initialDirection={windLeft}/></div>
      <div id="prevailing-wind" className="row-start-2"><Direction initialDirection={windPrevailing}/></div>
      <div className="row-start-2"><Direction initialDirection={windRight}/></div>
      <div className="row-start-3 col-start-2"><Direction initialDirection={windBottom}/></div>
    </div>
  )
}

export default Compass

