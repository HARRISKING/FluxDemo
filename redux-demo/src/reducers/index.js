export default (state = 'pink', action) => {
    switch (action.type) {
        case 'TURN_RED':
            return state = 'red'
        case 'TURN_GREEN':
            return state = 'green'
        case 'TURN_YELLOW':
            return state = 'yellow'
        default:
            return state
    }
}