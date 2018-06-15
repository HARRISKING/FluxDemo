export default ( state = 'pink', action ) => {
    switch( action.type ){
        case 'isRed':
            return state = 'red'
        case 'isBlue':
            return state = 'blue'
        case 'isYellow':
            return state = 'yellow'
        default:
            return state
    }
}