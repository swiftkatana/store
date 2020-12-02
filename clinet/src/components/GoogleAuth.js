import React from 'react';
import {connect} from 'react-redux';

import {signIn,signOut} from '../actions'

class GoogleAuth extends React.Component{

  

    componentDidMount(){

   


        window.gapi.load('client:auth2',()=>{
                window.gapi.client.init({
                    clientId:'540267964888-mga22j1i2aclgqcb1l7qvi0qguadklnq.apps.googleusercontent.com',
                    scope:'email'
                }).then(()=>{
                            this.auth = window.gapi.auth2.getAuthInstance();
                            this.isUserLogin(this.auth.isSignedIn.get())
                            this.auth.isSignedIn.listen(this.isUserLogin)
                            
                        });
                        

        });
        
    }

    logOut=()=>{
        
        this.auth.signOut() 
    }
    logIn=()=>{
 
        this.auth.signIn()
    }
isUserLogin=(isSignIn)=>{
isSignIn===true?this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut()

}
    renderAuthButton=()=>{
      if (this.props.isSignedIn){
            return(<button onClick={this.logOut} className="ui red google button"><i className="google icon" /> להתנתק</button>);
        }else {
            return(<button onClick={this.logIn} className="ui red google button"><i className="google icon" /> Google להתחבר אם </button>);
        }
    }

render(){

    return(
        <div>
            
            {this.renderAuthButton()}
        </div>
    );
}

}

const mapStateToProps =(state)=>{
    return{isSignedIn:state.auth.isSignedIn};
}
export default  connect(mapStateToProps,{signIn,signOut}) (GoogleAuth);