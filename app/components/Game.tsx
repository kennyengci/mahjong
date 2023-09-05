'use client'
import { useCallback, useEffect, useState } from "react"
import { db, auth } from '../firebase'
import { signInAnonymously } from "firebase/auth"



const Game = (props: {}) => {

  const newGame = useCallback(async () => {
    const userCredential = await signInAnonymously(auth)
    
    const userId = userCredential.user.uid


  }, [])

  const [playerName, setPlayerName] = useState("")

  return (
    <>
      <div className="flex flex-col items-center">
        <input 
        type="text" 
        id="playerName" 
        value={playerName} 
        onInput={e => setPlayerName((e.target as HTMLInputElement).value)}
        className="text-black"/>
        <button onClick={newGame}>New Game</button>
      </div>
    </>
  )
}

export default Game


