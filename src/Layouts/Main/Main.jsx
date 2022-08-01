import { Fragment } from 'react';
import './Main.scss'

const Main =(props)=>{
    const classes = 'main '+ props.className
    return <Fragment className={classes}>
        {props.children}
    </Fragment>
}

export default Main;