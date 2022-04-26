import React, { ReactNode } from 'react'
import { Link } from 'gatsby'
import './colorLink.css'

enum Color {
    name = 'name',
    work = 'work',
    thought = 'thought',
    cv = 'cv',
}

interface Props {
    children: ReactNode
    to: string
    color: Color
}

export const ColorLink = ({
    children,
    to = '/',
    color = Color.name,
}: Props) => {
    const selectColor = {
        name: Color.name,
        work: Color.work,
        thought: Color.thought,
        cv: Color.cv,
    }

    return (
        <Link to={to} className={`linkGeneralStyles ${selectColor[color]}`}>
            {children}
        </Link>
    )
}
