
import React  from 'react'
import Aluno from './Aluno'
import Personal from './Personal'

import Header from  './Header'
import Treino from './Treino01'
import {
BrowserRouter as Router,
Route,Switch
} from 'react-router-dom'





const Home =() =>{
return <h1> Home </h1>
}



//const Generos =() => {
 // return <h1> Generos </h1>
 // }

function App() {

  return(
    <Router>
    <div>
  
    <Header/>
    <Switch>
      <Route path='/' exact component={Home} />
>     < Route path='/Aluno' exact component={Aluno} />
      < Route path='/Personal' exact component={Personal} />
      < Route path='/Treino' exact component={Treino} />
       </Switch>
      </div>
    </Router>
  )
}

export default App;
