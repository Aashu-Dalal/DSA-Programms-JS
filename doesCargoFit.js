function doesCargoFit(boxVolume , cargoLength, cargoHeight, cargoWidth){
    if(boxVolume >= cargoLength * cargoHeight * cargoWidth){
        console.log("Yes , the cargo fits to the box")
    }
    else {
        console.log("No, the cogo is not fitted in the box")
    }
}
doesCargoFit(120,3,4,5)
doesCargoFit(100,8,5,7)
