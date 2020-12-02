import React from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form'

import {signIn,signOut,createUser,loginUser} from '../actions'
// import server from '../api/myserver';
import GoogleAuth from './GoogleAuth';




import './store/style.css';






class Login extends React.Component{

    constructor(props) {
        super(props)
        this.checkbox = React.createRef();
    }
    
    state={
        whatToShow:true,
        emailError:''
    }
    onSubmitR=(formValues)=>{
        this.props.createUser(formValues,this.props.signIn);

    }
    onSubmitL=(formValues)=>{
        this.props.loginUser(formValues,this.props.signIn);

    }


    renderError=({error,touched})=>{
        if(error&&touched){
            return(
                <div className="ui error message">
                 <div className="header">{error}</div>   
                </div>
            );
        }
    }


    renderInput=({input ,type ,clas,label,meta})=>{
        const className=`field ${clas} ${meta.error&&meta.touched?"error":""}`;
        let type1 ='text';
            if(type){
                 type1=type;
            }

    return (
    <div className={className}>
      <label>{label}</label>
    <input type={type1} {...input} autoComplete="off" />
    {this.renderError(meta)}
    </div>
    )

    }
    onCheacBox(){
        const TrueOrFalse = this.checkbox.current.value;
        this.setState({whatToShow:'register'});
            if(!TrueOrFalse){
                     this.setState({whatToShow:'login'});
            }
    }

    renderChangeMod=()=>{
        if(this.state.whatToShow){
            return(
            <div className="ui buttons ">
                    <h1 className="ui positive button  "  onClick={()=>this.setState({whatToShow:false})} >לחץ בשביל להירשם</h1>  
                    <div className="or"></div>
                    <GoogleAuth />
             

            </div> )
        }else{
            return(
            <div  className="ui buttons   ">
                <h1  className="ui   button primary" onClick={ ()=> this.setState({whatToShow:true})} >לחץ בשביל להתחבר</h1>
                <div className="or"></div>
                    <GoogleAuth />
            </div>  
             )
        }
    
    }





    login(){
        
        return(
            <div >
            
             <h1  className='right-text'>כניסה לאתר  </h1>
            {this.renderChangeMod()}
        
             <form onSubmit={this.props.handleSubmit(this.onSubmitL)} className="ui form error right-text">
             <Field type='email'  name="email" component={this.renderInput} label="אימייל " />
                <Field type='password' name="password" component={this.renderInput} label="סיסמה" />
                {this.renderErrorLogin()}

                <button className="ui button primary">להתחבר</button>
             </form>
                
            </div>
        )


    }
    renderErrorLogin(){

        if(this.props.user){
            if(this.props.user==='not good'&&this.state.whatToShow){
                
                return<p className='emaildup'>אימייל או הסיסמה לא נכונים</p>
            }}

    }


    renderErrorRegister(error){
        if(this.props.user){
        if(this.props.user==='dup'){
            console.log("duplicate")
            
            return<p className='emaildup'>אימייל קיים כבר </p>
        }}
    }
    


    register(){
        return(
            <div>

            <h1 className='right-text'  >ברוך הבא להרשמה לאתר </h1>
            {this.renderChangeMod()}
           
            <form onSubmit={this.props.handleSubmit(this.onSubmitR)} className="ui form error right-text">
                <Field type='email' clas={this.props.user==='dup'?'error':null} name="email" component={this.renderInput} label="אימייל" />
                {this.renderErrorRegister()}
                <Field type='password' name="password" component={this.renderInput} label="סיסמה" />
                <Field name="firstName" component={this.renderInput} label="שם פרטי" />
                <Field name="LastName" component={this.renderInput} label="שם משפחה" />
              
                <button className="ui button primary">הרשמה</button>
            </form>
                
            </div>
        )

        

    }

    renderLoginOrRegister(){
if(this.state.whatToShow)return this.login();
else return this.register();

      
    }


render(){

    return(
        <div className=" text-right  container-fluid   ">
            {this.renderLoginOrRegister()}
        </div>)


    }


}

const validate=(formdit,or)=>{
    const errors ={}
    if(!formdit.email||formdit.email.length<=7){
        errors.email="אתה חייב  להכניס אימייל "
    }
    
    if(!formdit.password||formdit.password.length<=7||!/[0-9]/.test(formdit.password)){
        errors.password="you must enter a password longer than 7 characters  and contain numbers "
    }
    if(!formdit.firstName||formdit.firstName.length<=3||/[0-9]/.test(formdit.firstName)){
        errors.firstName="you must enter a firstName longer than 3 characters  and can't contain numbers"
    }
    if(!formdit.LastName||formdit.LastName.length<=3||/[0-9]/.test(formdit.LastName)){
        errors.LastName="you must enter a LastName longer than 3 characters and can't contain numbers    "
    }


    return errors
}

const mapStateToProps =(state)=>{
    return{isSignedIn:state.auth.isSignedIn,user:state.user};
}
const FormCom = reduxForm(
    {
        form:'userLogin',
        validate
    })(Login)

export default connect(mapStateToProps,{signIn,signOut,createUser,loginUser})(FormCom);