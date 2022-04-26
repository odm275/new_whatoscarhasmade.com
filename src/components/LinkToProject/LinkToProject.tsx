import { Link } from 'gatsby'
import React from 'react'
import * as LinkStyles from './LinkToProject.module.css'
interface Props {
    to: string
    title: string
}

export const LinkToProject = ({ to, title }: Props) => {
    return (
        <li>
            <Link to={to} className={LinkStyles['project-link']}>
                {title}
            </Link>
        </li>
    )
}
