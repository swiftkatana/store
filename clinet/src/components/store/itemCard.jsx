import React from 'react';

import {Link} from 'react-router-dom'


class RentCard extends React.Component{

 

    render(){

        return(
    
          <div className="card mb-4 shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="225" alt={this.props.item} src={this.props.imgSrc} preserveAspectRatio="xMidYMid slice" focusable="false"  aria-label="Placeholder: Thumbnail" />
          <div className="card-body">
          <div className="card-text  header">{this.props.title}</div>
          <p className="card-text"> {this.props.content}</p>
          <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
              <Link to={this.props.to}  className="btn btn-info">לפרטים</Link>
              <button onClick={()=>this.props.addItem(this.props.item)} type="button" className="btn btn-primary">להוסיף לסל הקניות</button>
              </div>
              <p className="text-muted">{`₪${this.props.price} `}</p>
          </div>
          </div>
          </div>
       
     
     
     )

    }

}



export default RentCard  
         //         <Link className="card" to={this.props.to} >
              // <div className="ui medium rounded image">
              //   <img src={this.props.imgSrc} alt={this.props.alt} />
              // </div>
              // <div className="content">
              //   <div className="header">{this.props.title}</div>
              //   <div className="meta">
                
              //   </div>
              //   <div className="description">
              //   {this.props.content}
              //   </div>
              // </div>
              // <div className="extra content">
              //   <span className="right floated">
              //     {"$"+this.props.price}
              //   </span>
              //   <Link to={this.props.to}  className="ui basic green button">view</Link>
              // </div>
              //    </Link>
           