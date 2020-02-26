export default (
    ivStoppedOrMoving,
    cvStoppedOrMoving, 
    sawOtherCar, 
    ivAction, 
    cvAction, 
    ivDistanceOut,
    cvDistanceOut,
    ivPoi,
    cvPoi,
    evasiveAction
    ) => {
    if (
        cvStoppedOrMoving === "stopped" &&
        sawOtherCar === "no" &&
        ivAction === "backing"
    ) {
        return 15
    } else if (
        ivStoppedOrMoving === "stopped" &&
        cvStoppedOrMoving === "moving" &&
        cvAction === "backing"
    ) {
      return 16  
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
        return 17
    } else if (
        ivAction === "forward" && (
        cvAction === "backing" ||
        cvAction === "unknown"
    ) && (
        cvDistanceOut === "half" ||
        cvDistanceOut === "3quarters" ||
        cvDistanceOut === "fully"
    ) && (
        cvPoi === "leftSide" ||
        cvPoi === "rightSide" ||
        cvPoi === "leftQuarter" ||
        cvPoi === "rightQuarter"
    ) && (
        ivPoi === "frontBumper" ||
        ivPoi === "leftFrontCorner" ||
        ivPoi === "rightFrontCorner"
    )) {
        return 18
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
        return 19
    } else if (
        ivAction === "forward" &&
        cvAction === "backing" && (
        cvPoi === "rearBumper" ||
        cvPoi === "leftRearCorner" ||
        cvPoi === "rightRearCorner"
    ) && (
        ivPoi === "frontBumper" ||
        ivPoi === "leftFrontCorner" ||
        ivPoi === "rightFrontCorner" ||
        ivPoi === "rightFender" ||
        ivPoi === "leftFender"   
    )) {
        return 20
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
        return 21
    } else if (
        ivAction === "forward" && (
        cvAction === "backing" ||
        cvAction === "unknown"
        ) && (
        cvPoi === "rearBumper" ||
        cvPoi === "leftRearCorner" ||
        cvPoi === "rightRearCorner"
    ) && (
        ivPoi === "leftSide" ||
        ivPoi === "rightSide" ||
        ivPoi === "leftQuarter" ||
        ivPoi === "rightQuarter" ||
        ivPoi === "leftRearCorner" ||
        ivPoi === "rightRearCorner"   
    )) {
        return 22
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
        return 23
    } else if (
        ivAction === "backing" && (
        cvAction === "backing"
        ) && (
        cvPoi === "rearBumper" ||
        cvPoi === "leftRearCorner" ||
        cvPoi === "rightRearCorner"
    ) && (
        ivPoi === "leftFender" ||
        ivPoi === "rightFender" ||
        ivPoi === "leftSide" ||
        ivPoi === "rightSide" ||
        ivPoi === "leftQuarter" ||
        ivPoi === "rightQuarter" 
    )) {
        return 24
    } else if (
        ivAction === "backing" && (
        cvAction === "forward" ||
        cvAction === "unknown"
    )) {
        return 25
    } else if (
        ivAction === "backing" &&
        cvAction === "backing"
    ) {
        return 26
    } else if (
        sawOtherCar === "yes" &&
        evasiveAction === "no"
    ) {
        return 27
    } else {
        return 28
    }
}