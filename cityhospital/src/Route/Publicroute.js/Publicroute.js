import { render } from '@testing-library/react';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../../Uti/uti';

function Publicroute({component: Component ,restricted ,...rest}) {
    return (
        <>
             <Route {...rest} render = {props =>(
               isLogin() && restricted ?
                <Redirect to = {"/"}/>
                :
                <Component {...props}/>
            

        )
            
     }
            
        />
        
        </>
      
    );
}

export default Publicroute;