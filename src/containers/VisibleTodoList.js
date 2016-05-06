import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

function getVisibleTodos(todos, filter){
    switch(filter) {
    case 'SHOW_ALL':
        return todos
    case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.completed)
    }
}

function mapStateToProps(state) {
    return { todos: getVisibleTodos(
        state.todos, state.visibilityFilter) }
}

/*
 react-reduxによってコンポーネントとReduxを結びつける部分
 connectは引数に渡した関数を通じてReduxとReactコンポーネントを結びつける。
 connectによって結び付けられたReactコンポーネントはStoreを監視し、
 状態が更新されるたびにmapStateToPropsを呼び出す。
 mapStateToPropsにはStoreが保持している状態が引数stateとして渡ってくるので、
 それをReactのプロパティとして渡したい形に変形する。
 これで、Storeの状態が更新されるたびにReactコンポーネントにプロパティとしてそれが渡って、
 画面が描画される
 */
const VisibleTodoList = connect(mapStateToProps)(TodoList) // TodoListはプレゼンテーションコンポーネント
/*
 - プレゼンテーションコンポーネント
   - どう見せるか
   - Reduxに依存しない
   - データをプロパティから読み出す
 - コンテナコンポーネント
   - どう動かすか
   - Reduxが保持している状態を購読する
 */

export default VisibleTodoList
