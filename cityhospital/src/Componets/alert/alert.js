import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetalret } from '../../Redux/Action/alert.action';

function alert(props) {
    const alert = useSelector(state=>state.alert)
    const dispach = useDispatch()
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(()=>{
        if(alert.text != ''){
           enqueueSnackbar(alert.text, {
            variant : alert.color,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            }
          })
          setTimeout(dispach(resetalret()),2000)
        }
    })
    return (
        <div>

        </div>
    );
}

export default alert;