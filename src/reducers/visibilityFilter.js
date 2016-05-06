function visibilityFilter(state = 'SHOW_ALL', action) {
    switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
        /* Object.assignは第一引数に与えられたオブジェクトに対し、
         第二引数以降のオブジェクトのプロパティをコピーする関数。
         すなわちオブジェクトのマージ。
         第一引数を空オブエジェクトにすることでイミュータブルなマージ処理を記述できる。*/
        return Object.assign({}, state, { 
            visibilityFilter: action.filter
        })
    default:
        return state
    }
}
export default visibilityFilter
