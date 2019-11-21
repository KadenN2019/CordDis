import React from "react" 
import {BrowserRouter as Router, Route} from "react-router-dom"
import Login from './Login'
// import CheckLogin from './CheckLogin'
import '../styles/base.css'

function App (){
  return ( 
    <div>
      <Router>
        <Route exact path='/' component={Login} />
        {/* <Route path="*" component={CheckLogin}/> */}
      </Router>
    </div>
  )
}

export default App