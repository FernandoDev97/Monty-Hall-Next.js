import Menu from "../components/Menu";
import styles from "../styles/Formulario.module.css"
import Link from "next/link"
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {
    const [qtdePortas, setQtdePortas] = useState(0)
    const [comPresente, setComPresente] = useState(0)

    return (
      <div className={styles.formulario}>
        <div>
          <Menu bgcolor="#c0392c">
            <h1>Monty Hall</h1>
          </Menu>
          <Menu>
            <EntradaNumerica text="Quantidade de portas" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} />
          </Menu>
        </div>

        <div>
          <Menu><EntradaNumerica text="Qual porta tem presente?" value={comPresente} onChange={portaComPresente => setComPresente(portaComPresente)} /></Menu>
          <Menu bgcolor="#28a085">
            <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
              <h2 className={styles.link}><span>Iniciar</span></h2>
            </Link>
          </Menu>
        </div>
      </div>
  )
}
