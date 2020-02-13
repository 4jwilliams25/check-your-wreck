export default (
    cvStoppedOrMoving, 
    sawOtherCar, 
    ivAction, 
    cvAction, 
    ivDistanceOut,
    ivPoi,
    cvPoi,
    evasiveAction
    ) => {
    if (
        cvStoppedOrMoving === "stopped" &&
        sawOtherCar === "no"
    ) {
        return "You are probably at fault or majority at fault!"
    } else if (
        ivAction === "backing" && (
        cvAction === "forward" ||
        cvAction === "unknown"
    ) && (
        ivDistanceOut === "half" ||
        ivDistanceOut === "3quarters" ||
        ivDistanceOut === "fully"
    ) && (
        ivPoi === "leftSide" ||
        ivPoi === "rightSide" ||
        ivPoi === "leftQuarter" ||
        ivPoi === "rightQuarter"
    ) && (
        cvPoi === "frontBumper" ||
        cvPoi === "leftFrontCorner" ||
        cvPoi === "rightFrontCorner"
    )) {
        return "You may be partially at fault"
    } else if (
        ivAction === "backing" && (
        cvAction === "forward" ||
        cvAction === "unknown"
        ) && (
        ivPoi === "rearBumper" ||
        ivPoi === "leftRearCorner" ||
        ivPoi === "rightRearCorner"
    ) && (
        cvPoi === "frontBumper" ||
        cvPoi === "leftFrontCorner" ||
        cvPoi === "rightFrontCorner" ||
        cvPoi === "rightFender" ||
        cvPoi === "leftFender"   
    )) {
        return "You're at fault!"
    } else if (
        ivAction === "backing" && (
        cvAction === "forward" ||
        cvAction === "unknown"
        ) && (
        ivPoi === "rearBumper" ||
        ivPoi === "leftRearCorner" ||
        ivPoi === "rightRearCorner"
    ) && (
        cvPoi === "leftSide" ||
        cvPoi === "rightSide" ||
        cvPoi === "leftQuarter" ||
        cvPoi === "rightQuarter" ||
        cvPoi === "leftRearCorner" ||
        cvPoi === "rightRearCorner"   
    )) {
        return "You're super at fault!"
    } else if (
        ivAction === "backing" && (
        cvAction === "backing"
        ) && (
        ivPoi === "rearBumper" ||
        ivPoi === "leftRearCorner" ||
        ivPoi === "rightRearCorner"
    ) && (
        cvPoi === "leftFender" ||
        cvPoi === "rightFender" ||
        cvPoi === "leftSide" ||
        cvPoi === "rightSide" ||
        cvPoi === "leftQuarter" ||
        cvPoi === "rightQuarter" 
    )) {
        return "You're probably at fault or majority at fault!"
    } else if (
        ivAction === "backing" &&
        cvAction === "forward"
    ) {
        return "You're at fault!"
    } else if (
        ivAction === "backing" &&
        cvAction === "backing"
    ) {
        return "You're both probably at fault!"
    } else if (
        sawOtherCar === "yes" &&
        evasiveAction === "no"
    ) {
        return "You may have some fault!"
    } else {
        return "You're not at fault!"
    }
}