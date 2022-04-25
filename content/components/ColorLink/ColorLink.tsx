import React, { ReactNode } from 'react';
import { Link } from "gatsby"
import * as colorLinkStyles from "./colorLink.module.css"

enum Color {
  name = "name",
  work = "work",
  thought = "thought",
  cv = "cv",
}

interface Props {
  children: ReactNode;
  to: string;
  color:Color;
}

export const ColorLink = ({children, to="/", color=Color.name}: Props) => {
    const selectColor = {
      name: colorLinkStyles.name,
      work:colorLinkStyles.work,
      thought: colorLinkStyles.thought,
      cv: colorLinkStyles.cv
    };

    return(
        <Link to={to} className={`${colorLinkStyles.linkGeneralStyles} ${selectColor[color]}`}> 
          {children}
        </Link>
    );
};