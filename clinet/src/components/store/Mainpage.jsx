import React from 'react';
// import ItemList1 from './itemsList1';

import './style.css'
import { Link } from 'react-router-dom';


class MainPage extends React.Component{

state={
  showMap:false
}

    render(){
 
      
        return(
          <>
                  <div id='mainPage' className="  position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">



                    <div className=" col-md-5 p-lg-5 mx-auto my-5">
                      <h1 className="display-4 font-weight-normal">

                      </h1>
                    </div>
                
                  </div>

                  <div  className="row position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div className="col-lg-4">
                    <Link className="" to="items/printers" > <img alt='מדפסות' src="/p.jpg" width="140" height="140" className="bd-placeholder-img rounded-circle "/>        </Link>      
                     <h2>מדפסות</h2>
                      <p>כל המדפסות שיש לנו</p>
                      <p><Link className="btn btn-secondary" to="items/printers" role="button">לחץ כאן »</Link></p>
                    </div>
                    <div className="col-lg-4">
                    <Link to='items/colors' > <img alt='דיו למדפסות'  src="/c.jpg" width="140" height="140" className="bd-placeholder-img = "  /> </Link>
                      <h2>דיו למדפסות</h2>
                      <p>כל סוגי הדיו  </p>
                      <p><Link className="btn btn-secondary" to="items/colors" role="button">לחץ כאן »</Link></p>
                    </div>
                    <div className="col-lg-4">
                    <Link to='items/something' > <img alt='טונרים למדפסות'  src="/t.jpg" width="140" height="140" className="bd-placeholder-img rounded-circle "  /> </Link>
                      <h2>טונרים למדפסות</h2>
                      <p>כל סוגי הטונרים</p>
                      <p><Link className="btn btn-secondary" to="items/toners" role="button">לחץ כאן »</Link></p>
                    </div>
                

            </div>
          </>
        )

    }

}


export default MainPage;  
