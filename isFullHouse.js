function isFullHouse(hand) {
    hand.sort()

    if (
        (hand[0] === hand[1] && hand[1] === hand[2] && hand[3] === hand[4]) ||
        (hand[0] === hand[1] && hand[2] === hand[3] && hand[3] === hand[4])
    ) {
        return "Full House"
    }

    return "Not Full House"
}

console.log(isFullHouse([2, 2, 2, 3, 3]))
