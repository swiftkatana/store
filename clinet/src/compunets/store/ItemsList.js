import React from 'react';
import { connect } from 'react-redux'

import {fetchItems,addItemToStore} from '../../actions'
import ItemCard from './itemCard'
import FilterSerach from './FilterSerach';


 class ItemsList1 extends React.Component{

    state = {
        brand:null,
        text:null
    }
    

    componentDidMount(){
        this.props.fetchItems(this.props.whatToLook);

    }
    onChangeBrand=(brand)=>{
        if(brand===this.state.brand) this.setState({brand:null})
       else this.setState({brand:brand})
       
    }

    onclick=(item)=>{
        this.props.addItemToStore(item);
    }
    onChangeTextFilter=(input)=>{
        if(input.target.value.length===0) this.setState({text:null})
        else this.setState({text:input.target.value})
    }

    renderList(){
        if(!this.props.items) return <h1>loading...</h1>

        let filteritems;
        const brand = this.state.brand;
        const text = this.state.text;
        if(text!==null&&brand!==null)filteritems = this.props.items.filter(item=>item.title.includes(text)&&item.kind===this.props.whatToLook&&item.brand===brand)
       else  if(text!==null) filteritems = this.props.items.filter(item=>item.title.includes(text))
        else if(brand!==null)   filteritems = this.props.items.filter(item=>item.kind===this.props.whatToLook&&item.brand===brand)
        else if(brand===null)  filteritems = this.props.items.filter(item=>item.kind===this.props.whatToLook)
        return filteritems.map(item=>{
            return <ItemCard addItem={this.onclick} item={item} key={item._id} to={`/item/${item._id}`} alt={item.title}  imgSrc={'http://84.108.78.137:1028/uploads/'+item.images[0].filename} title={item.title} content={item.description} price={item.price}/>
        });


    }

    renderFilter=(filter,onChange,name,showrest)=>{
        const look =this.props.whatToLook;
                if(look==='printers') return  <FilterSerach rest={showrest} filter={filter} onChangeFilter={onChange} filterName={name} />

    }


    render(){
        return(
            <>
            {this.renderFilter(['Brother','Panasonic','Canon','HP'],this.onChangeBrand,'בחר חברה',true)}  
            <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">שם</span>
                    </div>
                    <input onChange={this.onChangeTextFilter} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                 <div id="list" className=' ui link cards'>
                        {this.renderList()}
                 </div>
                
            </>
        )
    }


}


const mapStateToProps =(state)=>{
    return{isSignedIn:state.auth.isSignedIn,user:state.user,items:Object.values(state.items)};
}

export default connect(mapStateToProps,{fetchItems,addItemToStore})(ItemsList1);