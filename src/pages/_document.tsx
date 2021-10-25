import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"/>
                    <link rel="icon" href="/favicon.ico" />
                    <title>Seu APP & WEBSITE nas mãos de quem sabe fazer - SOLUTION4APPS</title>
                    <meta name="description"
                          content="Contrate já a LEADS EMPRESARIAIS, adquira novos clientes que realmente precisam de você. A lista de emrpesas segmentadas de acordo com a sua nescessidade"/>

                </Head>
                <body>
                <Main />
                <NextScript/>
                </body>
            </Html>
        )
    }
}
