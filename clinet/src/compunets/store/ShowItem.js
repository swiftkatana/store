import React from 'react';
import { connect } from 'react-redux'

import {fetchItem} from '../../actions'

class ShowItem extends React.Component{


componentDidMount(){
    this.props.fetchItem(this.props.match.params.id);
}
    renderimg=()=> {
        const item =this.props.item;    

        if(!item||item===undefined||item===null) return (
            <div className="progress">
                <div className="progress-bar" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
        )


        
    
    }
    renderItem=()=>{
            const item =this.props.item;    

            if(!item||item===undefined||item===null) return (
                <div className="progress">
                    <div className="progress-bar" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                </div>
            )

            return(

                <div class="card mb-3">
                    <img src={'http://84.108.78.137:1028/uploads/'+item.images[0].filename} class="card-img-top itemimg" alt={item.title} />
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.description}</p>
                        <p class="card-text"><small class="text-muted">{'$ '+item.price}</small></p>
                    </div>
                </div>

            )



    }

    render(){
        return<>{this.renderItem()} </>

    }


};



const mapStateToProps =(state,ownProps) =>{

    return{
        item:state.items[ownProps.match.params.id]
    }
};

export default  connect(mapStateToProps,{fetchItem})(ShowItem);