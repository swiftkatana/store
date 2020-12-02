import React from 'react';





class FilterSerach extends React.Component{

    renderListKind=(namess,onChose)=>{
        return namess.map(name=> {
            return<li key={name} onClick={()=>onChose(name)} className="btn btn-secondary ">
                  {name}
                        </li>

            
        })
        }

    renderkind=( namess,onChose, label)=>{
        const className=`field filter-con  `
            return (
            <div className={className }>
            <div className="btn">
           {this.props.rest? <label onClick={()=>onChose(null)} className='btn btn-danger'>{"איפוס"}</label>:null}

                    <div className="btn-group-vertical">
            <label className='btn btn-info'>{label}</label>
  

                    { 
                        this.renderListKind(namess,onChose)
                    }
                    </div>
                </div>
            
            </div>
            )

    }



    render()
    {
         return <>{this.renderkind(this.props.filter,this.props.onChangeFilter,this.props.filterName)}</>
    }



}




export default (FilterSerach);