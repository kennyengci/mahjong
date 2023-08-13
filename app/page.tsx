import Image from 'next/image'
import CardinalDirection from './types/CardinalDirection'
import Direction from './components/Direction'
import Compass from './components/Compass'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Compass/>
    </main>
  )
}
