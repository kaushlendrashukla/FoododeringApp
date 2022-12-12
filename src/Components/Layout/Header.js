import React, {Fragment} from "react";
import mealsImage from '../../Assets/restaurant-2.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return(
     <Fragment>
        <header className={classes.header} >
            <h1>Shukla Foods</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src = {mealsImage} alt= " restaurant image "></img>
        </div>
    </Fragment>
    )
}

export default Header;