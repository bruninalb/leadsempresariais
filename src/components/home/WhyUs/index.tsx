import styles from "./styles.module.scss"
import {AiFillSafetyCertificate} from "react-icons/ai"
import {CgOrganisation} from "react-icons/cg"
import {BiGlobe} from "react-icons/bi"
import {MdMoneyOff} from "react-icons/md"
import {GoGraph} from "react-icons/go"
import {RiSecurePaymentFill} from "react-icons/ri"
import Link from "next/link"

export default function WhyUs() {
    return (
        <article className={styles.Container}>
            <h1>Motivos para adquirir a lista</h1>
            <div className={styles.ImagesContainer}>
                <section>
                    <span>
                        <AiFillSafetyCertificate color="white"/>
                    </span>
                    <h2>Empresas Reais</h2>
                    <p>Você não precisa se preocupar
                        quanto a qualidade dos dados,
                        vindos da Receita Federal</p>
                </section>

                <section>
                    <span>
                        <CgOrganisation color="white"/>
                    </span>
                    <h2>Qualidade e Organização</h2>
                    <p>Dados de qualidade e totalmente
                        organizados, compatíveis com
                        excel e plataformas de
                        e-mail marketing</p>
                </section>

                <section>
                    <span>
                        <BiGlobe color="white"/>
                    </span>
                    <h2>Mais de 43 milhões de empresas</h2>
                    <p>Milhoes de clientes para voce
                        aumentar suas vendas
                        cada vez mais</p>
                </section>

                <section>
                    <span>
                        <MdMoneyOff color="white"/>
                    </span>
                    <h2>Custo Baixo</h2>
                    <p>Você gasta pouco e ganha
                        muito com futuros clientes de
                        qualidade no seu segmento</p>
                </section>


                <section>
                    <span>
                        <GoGraph color="white"/>
                    </span>
                    <h2>Segmentos</h2>
                    <p>Faça sua lista da sua maneira,
                        liste apenas restaurantes, mercados,
                        ou apenas empresas de pequeno porte?
                        Sua lista do jeito que você precisa</p>
                </section>


                <section>
                    <span>
                        <RiSecurePaymentFill color="white"/>
                    </span>
                    <h2>Pagamento Seguro</h2>
                    <p>Milhoes de clientes para voce
                        aumentar suas vendas
                        cada vez mais</p>
                </section>


            </div>

            <div className={styles.ButtonContainer}>
                <Link href="/iniciar-meu-projeto/dados-do-cliente"><button>Iniciar meu <strong>PROJETO</strong></button></Link>
            </div>

        </article>
    )
}