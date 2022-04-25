import React from 'react';
import { Link } from "gatsby"
import * as colorLinkStyles from "./colorLink.module.css"

export const ColorLink = ({children, to}) => {
    return(
        <Link to={to} className={`${colorLinkStyles.nameColor}`}>  
          {children}
        </Link>
    );
};