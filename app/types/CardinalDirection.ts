enum CardinalDirection {
    East = 1,
    South = 2,
    West = 3,
    North = 4
}


export const nextWindDirection = (currentDirection: CardinalDirection): CardinalDirection => {
    let next: CardinalDirection

    if (currentDirection === 4) {
        next = CardinalDirection.East
    } else {
        next = currentDirection + 1
    }

    return next
}

export const prevWindDirection = (currentDirection: CardinalDirection): CardinalDirection => {
    let next: CardinalDirection

    // if it's east, next one backwards is north
    if (currentDirection === 1) {
        next = CardinalDirection.North
    } else {
        next = currentDirection - 1
    }

    return next
}

export const renderWindInChinese = (direction: CardinalDirection): string => {
    switch (true) {
        case direction === CardinalDirection.East: 
            return "東"
        case direction === CardinalDirection.South: 
            return "南"
        case direction === CardinalDirection.West: 
            return "西"
        case direction === CardinalDirection.North: 
            return "北"
        default:
            return "unknown wind direction"
            
    }
}

export default CardinalDirection
