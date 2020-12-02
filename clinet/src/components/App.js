import React from 'react';
import {Router,Route} from 'react-router-dom'
import 'react-dates/initialize'


import history from '../history';
import Mainpage from './store/Mainpage';
import Header from './Header'
import LoginRegister from './LoginRegister'
import AddItem from './store/AddItem';
import ShowItem from './store/ShowItem.js';
import Footer from './Footer'
import ShowList from './store/ShowList'
import CartStore from './store/CartStore'


class App extends React.Component{



  render(){

    return(
    <  >
    
      <Router history={history}>
      <Header />
    
        <> 
          <Route path='/cart' exact component={CartStore} />
          <Route path="/items/:kind" exact component={ShowList} />
          <Route path='/item/:id' exact component={ShowItem} />
          <Route path='/' exact component={Mainpage} />
          <Route path='/user' exact component={LoginRegister} />
          <Route path='/user/CreateItem' exact component={AddItem} />
        </>
        <a className=' ' href='https://wa.me/972526709448' target='_blank'  rel="noopener noreferrer"  style={{position:'relative'}} > <img  alt='Whatsapp' width="50" height="50" className='bd-placeholder-img rounded-circle' src='\Whatsapp.png' />  </a>
        <Footer >   <p> copyrights  © 2019-{new Date().getFullYear() } daniel levy(swiftKatana)</p></Footer>
      </Router>


    </>
    )


  }

}

export default App;
