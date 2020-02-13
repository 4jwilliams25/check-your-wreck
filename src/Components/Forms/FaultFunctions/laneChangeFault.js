export default (ivAction, cvAction, ivPoi, cvPoi, sawOtherCar, evasiveAction) => {
    if (
        ivAction === "straight" &&
        cvAction === "changing" && (
        cvPoi === "leftRearCorner" ||
        cvPoi === "rightRearCorner"
    )) {
        return "You may have a little fault"
    } else if (
        ivAction === "changing" &&
        cvAction === "straight" && (
        ivPoi === "leftRearCorner" ||
        ivPoi === "rightRearCorner"
    )) {
      return "You're at fault, or at least mostly at fault!"  
    } else if (
        ivAction === "changing" &&
        cvAction === "straight" && (
        cvPoi === "leftSide" ||
        cvPoi === "leftQuarter" ||
        cvPoi === "rightSide" ||
        cvPoi === "rightQuarter"
    )) {
      return "You are super at fault! Like really really at fault! Like what are you even doing on the road?!"  
    } else if (
        ivAction === "changing" &&
        cvAction === "straight"
       ) {
      return "You're at fault!"  
    } else if (
        ivAction === "changing" &&
        cvAction === "changing"
       ) {
      return "You're both at fault!"  
    } else if (
        sawOtherCar === "yes" &&
        evasiveAction === "no"
    ) {
        return "You may have a little fault"
    } else {
        return "You're not at fault!"
    }
}