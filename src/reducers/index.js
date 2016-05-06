import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({ // Storeに渡す前にReducerを合成する
    todos, visibilityFilter })
export default todoApp

