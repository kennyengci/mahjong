import Image from 'next/image'
import CardinalDirection from './types/CardinalDirection'
import Direction from './components/Direction'
import Compass from './components/Compass'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-100 flex-col items-center p-12 sm:p-24">
      <Compass/>
    </main>
  )
}
