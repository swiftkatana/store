import React, {Component} from 'react'

export default class FieldFileInput  extends Component{
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChangeFile(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files)
  }

  render(){
    const {label } = this.props  //whatever props you send to the component from redux-form Field
    return(
     <div><label>{label}</label>
     <div>
       <input 
        type='file'
        id="files" name="files" multiple 
        accept='.jpg, .png, .jpeg'
        onChange={this.onChange}
       />
     </div>
     </div>
    )
}
}