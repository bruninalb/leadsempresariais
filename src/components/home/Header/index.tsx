import Image from "next/image"
import styles from "./styles.module.scss"
export default function Header(){
    return (
        <header className={styles.Container}>
            <span className={styles.LogoContainer}>
            <Image src="/logo.svg" alt="Logo da LEADS EMPRESARIAIS" layout="fill" />
            </span>
            <div className={styles.CTAContainer}>
                <div>
                    <h1><strong>AUMENTE</strong> SUAS <strong>VENDAS</strong>,
                        VENDA PARA O PÚBLICO CORRETO</h1>
                    <p>ADQUIRA AGORA CONTATO COM EMPRESAS
                        QUE REALMENTE SE <strong>INTERESSAM PELO SEU NEGÓCIO</strong></p>
                </div>
                <div>

                </div>

            </div>

        </header>
    )
}