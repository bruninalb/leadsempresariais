import styles from "./styles.module.scss"
import {AiFillSafetyCertificate} from "react-icons/ai"
import {CgOrganisation} from "react-icons/cg"
import {BiGlobe} from "react-icons/bi"
import {MdMoneyOff} from "react-icons/md"
import {GoGraph} from "react-icons/go"
import {RiSecurePaymentFill} from "react-icons/ri"
import Link from "next/link"

export default function AboutCompanies() {
    return (
        <article className={styles.Container}>
                <h1>Dados inclusos na lista das empresas</h1>
            <div className={styles.ImagesContainer}>
                <section>
                    <span>
                    </span>
                    <h2>Razão Social e Nome Fantasia</h2>
                </section>

                <section>
                    <span>
                    </span>
                    <h2>CNPJ, Natureza Jurídica</h2>
                </section>

                <section>
                    <span>
                    </span>
                    <h2>CNAE (Ramos de Atividade)</h2>
                </section>

                <section>
                    <span>
                    </span>
                    <h2>Telefones</h2>
                </section>

                <section>
                    <span>
                    </span>
                    <h2>E-mail</h2>
                </section>

                <section>
                    <span>
                    </span>
                    <h2>Endereço Completo</h2>
                </section>

                <section>
                    <span>
                    </span>
                    <h2>Porte da Empresa</h2>
                </section>

                <section>
                    <span>
                    </span>
                    <h2>Apenas Enquadradas no Simples Nacional</h2>
                </section>

                <section>
                    <span>
                    </span>
                    <h2>Capital Social</h2>
                </section>

                <section>
                    <span>
                    </span>
                    <h2>Lista de Sócios</h2>
                </section>

                <section>
                    <span>
                    </span>
                    <h2>Muito Mais Dados</h2>
                </section>

            </div>

            <div className={styles.ButtonContainer}>
                <Link href="/iniciar-meu-projeto/dados-do-cliente"><button>Iniciar meu <strong>PROJETO</strong></button></Link>
            </div>

        </article>
    )
}