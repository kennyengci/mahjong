

// this component represents a mahjong tile

import CardinalDirection, { renderWindInChinese } from "../types/CardinalDirection"

const Direction = (props: {
    initialDirection: CardinalDirection
}) => {
    const direction: CardinalDirection = props.initialDirection ?? CardinalDirection.East

    return (
        <div className="w-10 h-10">
        {renderWindInChinese(direction)}
    </div>
    )

}

export default Direction