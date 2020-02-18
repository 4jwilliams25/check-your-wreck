export default (ivAction, cvAction, ivPoi, cvPoi, sawOtherCar, evasiveAction) => {
    if (
        ivAction === "straight" &&
        cvAction === "changing" && (
        cvPoi === "leftRearCorner" ||
        cvPoi === "rightRearCorner"
    )) {
        return 7
    } else if (
        ivAction === "changing" &&
        cvAction === "straight" && (
        ivPoi === "leftRearCorner" ||
        ivPoi === "rightRearCorner"
    )) {
      return 8  
    } else if (
        ivAction === "changing" &&
        cvAction === "straight" && (
        cvPoi === "leftSide" ||
        cvPoi === "leftQuarter" ||
        cvPoi === "rightSide" ||
        cvPoi === "rightQuarter"
    )) {
      return 9 
    } else if (
        ivAction === "straight" &&
        cvAction === "changing" && (
        evasiveAction === "yes" ||
        !evasiveAction
        ) && (
        ivPoi === "leftSide" ||
        ivPoi === "leftQuarter" ||
        ivPoi === "rightSide" ||
        ivPoi === "rightQuarter"
    )) {
      return 10 
    } else if (
        ivAction === "changing" &&
        cvAction === "straight"
       ) {
      return 11  
    } else if (
        ivAction === "changing" &&
        cvAction === "changing"
       ) {
      return 12  
    } else if (
        sawOtherCar === "yes" &&
        evasiveAction === "no"
    ) {
        return 13
    } else {
        return 14
    }
}