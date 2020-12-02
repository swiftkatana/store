import React from 'react';
import { connect } from 'react-redux'

import history from '../../history'
import ItemsList from './ItemsList';



class ShowList extends React.Component{




    render(){
            return(
                    <main role="main">


                            <div className="album py-5 bg-light">
                                    <div className="container">

                                            <div className="row">

                                                <ItemsList whatToLook={this.props.match.params.kind} />
                                            </div>
                                    </div>
                            </div>

                </main>
          
            )


    }

}

export default  connect(null,{})(ShowList)
