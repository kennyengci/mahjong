
'use client'
import { useEffect, useState } from "react"
import CardinalDirection, { renderWindInChinese, nextWindDirection, prevWindDirection } from "../types/CardinalDirection"
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

  const decrementWind = () => {
    setWindBottom(prevWindDirection(windBottom))
    setWindRight(prevWindDirection(windRight))
    setWindTop(prevWindDirection(windTop))
    setWindLeft(prevWindDirection(windLeft))

    setRoundCounter(roundCounter - 1)
  }

  useEffect(() => {
    // determine prevailing wind from round number
    switch (true) {
      case roundCounter >= 1 && roundCounter <= 4: setWindPrevailing(1)
        break
      case roundCounter > 4 && roundCounter <= 8: setWindPrevailing(2)
        break
      case roundCounter > 8 && roundCounter <= 12: setWindPrevailing(3)
        break
      case roundCounter > 12 && roundCounter <= 16: setWindPrevailing(4)
        break
      default:
        setWindPrevailing(1)
        break;
    }

  }, [roundCounter])


  return (
    <>
      <div className="flex flex-col items-center">
          <div className="flex flex-row">
            <div className="grid grid-cols-3 grid-rows-3 text-center text-4xl my-4">
              <div className="col-start-2 p-2"><Direction initialDirection={windTop} /></div>
              <div className="row-start-2 p-2"><Direction initialDirection={windLeft} /></div>
              <div id="prevailing-wind" className="row-start-2 p-2"><Direction initialDirection={windPrevailing} /></div>
              <div className="row-start-2 p-2"><Direction initialDirection={windRight} /></div>
              <div className="row-start-3 col-start-2 p-2"><Direction initialDirection={windBottom} /></div>
            </div>
          </div>
          <div className="my-8">Round: {roundCounter}</div>
        <div className="mt-10 fixed bottom-0 left-0 right-0 flex flex-row justify-center mb-8">
          <button className={`mx-2 ${roundCounter === 1 ? 'disabled text-gray-400' : ''}`} onClick={decrementWind} disabled={roundCounter === 1}>Previous Round</button>
          <button className={`mx-2 ${roundCounter === 16 ? 'disabled text-gray-400' : ''}`} onClick={incrementWind} disabled={roundCounter === 16}>Next Round</button>
        </div>
      </div>
    </>
  )
}

export default Compass


