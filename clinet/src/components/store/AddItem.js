import React from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form'

import {createItem} from '../../actions'
import history from '../../history'

class AddItem extends React.Component{

    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
      }
   

    state={
        kind:'',
        brand:'',
        images: []
    }

    componentDidUpdate(){
    }


    onSubmit=(formValues)=>{
        let formData = new FormData();
       
       formData.append('title',formValues.title);
       formData.append('price',formValues.price);
      formData.append('description',formValues.description);
      formData.append('kind',this.state.kind.name);
      formData.append('brand',this.state.brand.name);
      for(let i = 0;i< this.state.images.length;i++){
        formData.append(this.state.images[i].name, this.state.images[i])
      }

 
        this.props.createItem(formData);

    }
    onChangeKimd=(kind)=>{
        this.setState({kind:kind})
    }

    onChangeBrand=(brand)=>{
        this.setState({brand:brand})
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


    renderInput=({input , label,meta})=>{
        const className=`field ${meta.error&&meta.touched?"error":""}`
    return (
    <div className={className}>
      <label>{label}</label>
    <input {...input} autoComplete="off" />
    {this.renderError(meta)}
    </div>
    )

    }

 
    // <li className="list-group-item d-flex justify-content-between align-items-center"><input name="item"  {...input} onChange={()=>this.onChangeKimd('colors')} type="radio"  autoComplete="off" />{": "}colors</li>
    renderListKind=(namess,whatKind,input,onChose)=>{
                return namess.map(name=> {
                    return<li className="list-group-item d-flex justify-content-between align-items-center">
                                <input name={whatKind}  {...input} onChange={()=>onChose({name})} type="radio"  autoComplete="off" />
                                {": "}{name} 
                                </li>

                    
                })
    }

    renderkind=({input ,namess,whatKind,onChose, label,meta})=>{
        const className=`field ${meta.error&&meta.touched?"error":""}`
    return (
    <div className={className}>
      <label>{label}</label>
      <ul className="list-group list-group-horizontal-lg">
            { 
                this.renderListKind(namess,whatKind,input,onChose)
            }
            
        </ul>
    
    {this.renderError(meta)}
    </div>
    )

    }
    
    renderprice=({input , label,meta})=>{
        const className=`field ${meta.error&&meta.touched?"error":""}`
    return (
    <div className={className}>
      <label>{label}</label>
    <input type="number" {...input} autoComplete="off" />
    {this.renderError(meta)}
    </div>
    )

    }
 
    onChangeFile=(e) =>{
        const files = Array.from(e.target.files)
     
    
     this.setState({images:e.target.files});
    console.log(files)
      }

    render(){
     if(!this.props.isSignedIn||!this.props.user.admin) history.push('/')
        
        return(
            <form   onSubmit={this.props.handleSubmit(this.onSubmit)} method="post" encType="multipart/form-data" className=" container ui form error">
    
               <Field name="title" component={this.renderInput} label="שם המוצר"  />
                <Field name="description" component={this.renderInput} label="תיאור קצר" />
                <Field name="price" component={this.renderprice} label="כמה כסף"  />
                <label htmlFor='files' >תמונות</label>
                <input 
        type='file'
        id="files" name="files"// multiple 
        accept='.jpg, .png, .jpeg'
        onChange={this.onChangeFile}
       />       
                <Field name='brands'    whatKind='brands' namess={['Brother','Panasonic','Canon','HP']} onChose={this.onChangeBrand} component={this.renderkind} />
                <Field name='kinds' whatKind='kinds' namess={['printers','colors','toners']} onChose={this.onChangeKimd}  component={this.renderkind} />
                <button className="ui button primary">Submit</button>
    
            </form>)
    

    }

}







const validate=(formdit)=>{
    const errors ={}



    return errors
}



const mapStateToProps =(state)=>{
    return{isSignedIn:state.auth.isSignedIn,user:state.user};
}
const FormCom = reduxForm(
    {
        form:'new item',
        validate
    })(AddItem)

export default connect(mapStateToProps,{createItem})(FormCom);