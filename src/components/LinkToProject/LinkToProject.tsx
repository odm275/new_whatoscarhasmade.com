import { Link } from 'gatsby'
import React from 'react'
import './linkToProject.css'

interface Props {
    to: string
    title: string
}

export const LinkToProject = ({ to, title }: Props) => {
    return (
        <li>
            <Link to={to} className="link-to-project">
                {title}
            </Link>
        </li>
    )
}
