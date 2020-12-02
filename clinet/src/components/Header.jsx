import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'

import {signOut} from '../actions'

class Header extends React.Component{
  renderLoginorLogou(){
    if(this.props.isSignedIn){
        return <> <Link className="btn btn-primary " to="/profile" >פרופיל</Link> {this.props.user.admin?<Link className="btn btn-info " to="/user/CreateItem" >Add Item</Link>:null} <Link to="/" onClick={()=>this.props.signOut()} className=" btn btn-danger">להתנתק</Link> </>
    }
    return  <Link to="/user" className=" btn btn-primary my-2 my-sm-0">להתחבר</Link>
}

renderCart=()=>{
  let itemsInCart =this.props.cart.count;

  // if(Object.values(this.props.cart).length>0) itemsInCart=Object.values(this.props.cart).length;


  return(
    <Link className=" btn btn-success my-2 my-sm-0" to='/cart' >{` (${itemsInCart})סל קניות `} </Link>
  )

}



    render(){

            return(
                <nav id='nav' className="navbar    navbar-dark bg-dark navbar-expand-md ">
                      <Link className="navbar-brand  " to="/">My Colors</Link>
                      <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>
                      </button>
                     
                      <div className="collapse navbar-collapse text-right" id="navbarSupportedContent">
                      
                          <ul className="navbar-nav mr-auto">
                          <div className="nav-item ">
                              <Link className="nav-link" to="/">דף בית <span className="sr-only">(current)</span></Link>
                            </div>
                            <li className="nav-item dropdown">
                          <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="/" role="button" aria-haspopup="true" aria-expanded="false">מוצרים</Link>
                          <div className="dropdown-menu">
                            <Link className="dropdown-item " to="/items/printers">מדפסות</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/items/colors">דיו למדפסות</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/items/">טונרים למדפסות</Link>
                          
                          </div>
                        </li>
                          </ul>
                          
                          <div className="form-inline my-2 my-lg-0">

                          {this.renderCart()}
                          {this.renderLoginorLogou()}
                          </div>
                      </div>
                     
                  </nav>
            )

    }

}
const mapStateToProps=(state)=>{
  return{
    isSignedIn:state.auth.isSignedIn,
    cart:state.cart,
    user:state.user
  }
}

export default connect(mapStateToProps,{signOut})( Header);