import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import * as actions from './actions'
import App from './components/App'

const store = createStore(todoApp) // Reducerの指定 (第二引数で初期値を指定できる ex: craeteState(todoApp, initialState))

render(
    /*
     Providerでアプリケーション全体をラップすることで、
     Reactコンポーネント内でStoreにアクセスできるようになる。
     connectがStoreとの接続を行うために必須の手続きなので、react-reduxを使う場合、毎回書く
     */
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('container')
)


