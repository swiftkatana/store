import React from 'react';





class Paypal extends React.Component{



    render(){




        return(
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="BSDGX8FERAW6A" />
        <input type="image" src="https://www.paypalobjects.com/he_IL/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal - הדרך הקלה והבטוחה יותר לשלם באינטרנט!" />
        <img alt="" border="0" src="https://www.paypalobjects.com/he_IL/i/scr/pixel.gif" width="1" height="1" />
        </form>
        )



    }

}


export default  Paypal;