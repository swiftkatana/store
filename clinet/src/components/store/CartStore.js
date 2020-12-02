import React from 'react';
import { connect } from 'react-redux'


import { } from '../../actions'
import Paypal from '../Paypal'



class CartStore extends React.Component{
  renderListProducts=()=>{

    if(this.props.cart.cart.length===0) return(
      <li className="list-group-item d-flex  ">
       <div className="alert alert-secondary" role="alert">
            אין לך מוצרים בסל קניות
          </div>
      
      </li>
    )


    return this.props.cart.cart.map(item=>{
      return(

        <li key={item._id} className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">{item.title.slice(0, 20)+'...'}</h6>
          <small className="text-muted">{item.description.slice(0, 25)+'...'}</small>
        </div>
        <span className="text-muted">{`₪${item.price} `}</span>
        <span className="text-muted">{`כמות ${item.cartCount} `}</span>
          <div class=" btn-group-sm" role="group" aria-label="Basic example">
         
          </div>
      </li>
      )

    })
    

  }


    render(){
    
        
        return(
        <div id='cart'>
                <div className=" container row">
              <div className="col-md-4 order-md-2 mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">סל קניות</span>
                  <span className="badge badge-secondary badge-pill">{this.props.cart.count}</span>
                </h4>
                <ul className="list-group mb-3">
                 {this.renderListProducts()}
                </ul>

              
              </div>
              <div className="col-md-8 order-md-1">
                <h4 className="mb-3">כתובת משלוח</h4>
                <form className="needs-validation AVAST_PAM_nonloginform" novalidate="">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstName">שם פרטי</label>
                      <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label for="lastName">Last name</label>
                      <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label for="username">Username</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                      </div>
                      <input type="text" className="form-control" id="username" placeholder="Username" required=""/>
                      <div className="invalid-feedback" style={{width: '100%'}}>
                        Your username is required.
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label for="email">Email <span className="text-muted">(Optional)</span></label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label for="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
                  </div>

                  <div className="row">
                    <div className="col-md-5 mb-3">
                      <label for="country">Country</label>
                      <select className="custom-select d-block w-100" id="country" required="">
                        <option value="">Choose...</option>
                        <option>United States</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label for="state">State</label>
                      <select className="custom-select d-block w-100" id="state" required="">
                        <option value="">Choose...</option>
                        <option>California</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <label for="zip">Zip</label>
                      <input type="text" className="form-control" id="zip" placeholder="" required=""/>
                      <div className="invalid-feedback">
                        Zip code required.
                      </div>
                    </div>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="same-address"/>
                    <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="save-info"/>
                    <label className="custom-control-label" for="save-info">Save this information for next time</label>
                  </div>

                  <h4 className="mb-3">Payment</h4>

                  <div className="d-block my-3">
                    <div className="custom-control custom-radio">
                      <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked="" required=""/>
                      <label className="custom-control-label" for="credit">Credit card</label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required=""/>
                      <label className="custom-control-label" for="debit">Debit card</label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required=""/>
                      <label className="custom-control-label" for="paypal">PayPal</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label for="cc-name">Name on card</label>
                      <input type="text" className="form-control" id="cc-name" placeholder="" required=""/>
                      <small className="text-muted">Full name as displayed on card</small>
                      <div className="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label for="cc-number">Credit card number</label>
                      <input type="text" className="form-control" id="cc-number" placeholder="" required=""/>
                      <div className="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 mb-3">
                      <label for="cc-expiration">Expiration</label>
                      <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""/>
                      <div className="invalid-feedback">
                        Expiration date required
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <label for="cc-cvv">CVV</label>
                      <input type="text" className="form-control" id="cc-cvv" placeholder="" required=""/>
                      <div className="invalid-feedback">
                        Security code required
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                </form>
              </div>
          </div>
        </div>
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

export default connect(mapStateToProps,{})(CartStore)