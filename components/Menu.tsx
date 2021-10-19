import styles from "../styles/Menu.module.css"

interface CartaoProps {
    bgcolor?: string
    children?: any
}

export default function Menu(props: CartaoProps) {
    return (
        <div className={styles.menu} style={{backgroundColor: props.bgcolor ?? "#fff"}}>
            {props.children}
        </div>
    )
}