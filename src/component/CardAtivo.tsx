import styles from "./CardAtivo.module.css"

type Props = {
  titulo: string
  children: React.ReactNode
}

export function CardAtivo({titulo, children}: Props){
  return(
    <div className={styles.card}>

      <h2 className={styles.titulo}>
        {titulo}
      </h2>

      <div>
        {children}
      </div>

    </div>
  )
}