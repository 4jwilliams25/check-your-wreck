export default (numberOfCars, carPosition, pushed) => {
    if (numberOfCars === "2" && carPosition === "back") {
        return 1
    } else if (numberOfCars === ">2" && carPosition === "back") {
        return 2
    } else if (numberOfCars === ">2" && carPosition === "middle" && pushed === "rearEnded") {
        return 3
    } else if (numberOfCars === ">2" && carPosition === "middle" && pushed ==="pushed") {
        return 4
    } else if (numberOfCars === ">2" && carPosition === "front") {
        return 5
    } else {
        return 6
    }
}