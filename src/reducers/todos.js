// Reducers
function todos(state = [], action) {
    switch(action.type) {
    case 'ADD_TODO':
        return [
                ...state, 
            { text: action.text, completed: false }
        ]
    case 'COMPMLETE_TODO':
        // 要実装
        return state
    default:
        return state
    }
}

export default todos
