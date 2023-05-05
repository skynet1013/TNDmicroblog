import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css"

export const siteTitle = "Next.js blog"
const name = "Tanida code"

function Layout({ Children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/fabicon.ico"></link>
            </Head>
            <header className={styles.header}>
                <img src="/imges/profile.png" className={utilStyles.borderCircle} />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </header>
            <main>{Children}</main>
        </div>
    );
}

export default Layout;