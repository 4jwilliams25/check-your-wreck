export default (numberOfCars, carPosition, pushed) => {
    if (numberOfCars === "2" && carPosition === "back") {
        return "You're at fault!"
    } else if (numberOfCars === ">2" && carPosition === "back") {
        return "You're at fault!"
    } else if (numberOfCars === ">2" && carPosition === "middle" && pushed === "rearEnded") {
        return "You're at fault, but only for damage you caused to the car in front of you!"
    } else {
        return "You're not at fault!"
    }
}