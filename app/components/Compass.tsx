
'use client'
import { useEffect, useState } from "react"
import CardinalDirection, { renderWindInChinese, nextWindDirection } from "../types/CardinalDirection"
import Direction from "./Direction"

const Compass = (props: {

}) => {
  const [windBottom, setWindBottom] = useState(1)
  const [windRight, setWindRight] = useState(2)
  const [windTop, setWindTop] = useState(3)
  const [windLeft, setWindLeft] = useState(4)
  const [roundCounter, setRoundCounter] = useState(1)
  const [windPrevailing, setWindPrevailing] = useState(1)

  const incrementWind = () => {
    setWindBottom(nextWindDirection(windBottom))
    setWindRight(nextWindDirection(windRight))
    setWindTop(nextWindDirection(windTop))
    setWindLeft(nextWindDirection(windLeft))

    setRoundCounter(roundCounter + 1)
  }

  useEffect(() => {
    // determine prevailing wind from round number
    switch (true) {
      case roundCounter <= 4: setWindPrevailing(1)
        break
      case roundCounter <= 8: setWindPrevailing(2)
        break
      case roundCounter <= 12: setWindPrevailing(3)
        break
      case roundCounter <= 16: setWindPrevailing(4)
        break
      default:
        setWindPrevailing(1)
        break;
    }

  }, [roundCounter])


  return (
    <>

      <div className="grid grid-cols-3 grid-rows-3">
        <div className="col-start-2"><Direction initialDirection={windTop} /></div>
        <div className="row-start-2"><Direction initialDirection={windLeft} /></div>
        <div id="prevailing-wind" className="row-start-2"><Direction initialDirection={windPrevailing} /></div>
        <div className="row-start-2"><Direction initialDirection={windRight} /></div>
        <div className="row-start-3 col-start-2"><Direction initialDirection={windBottom} /></div>
      </div>
      <div className="mt-10">
        <button onClick={incrementWind}>Update Wind</button>
      </div>
    </>
  )
}

export default Compass


