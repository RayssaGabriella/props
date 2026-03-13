import styles from './Heading.module.css'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export function Heading(props: Props){
    console.log(props)

    return (
        <h1 className={`${styles.fundo} ${styles.cor}`}>
            {props.children}
        </h1>
    )
}
