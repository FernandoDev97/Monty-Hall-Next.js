import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import styles from "../../../styles/Jogo.module.css"
import Link from "next/link"
import { useRouter } from "next/dist/client/router"

export default function jogo () {
    const router = useRouter()
    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])
    
    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        const qtdePortasValidas = portas >= 2 && portas <= 50
        const temPresenteValido = temPresente >= 1 && temPresente <= portas
        setValido(qtdePortasValidas && temPresenteValido)
    }, [portas])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])
   
    function renderizarPortas() {
        return portas.map(porta => {
            return  <Porta key={porta.numero} value={porta} 
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    })
  }

   return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {valido ? renderizarPortas() : <h2>Valores Inválidos</h2> }
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}