import Head from 'next/head';
import Image from 'next/image';
import styles from "../styles/Home.module.css";
import Layout from '../components/Layout';
import utileStyles from "../styles/utils.module.css";

import Link from 'next/link';


export default function Home() {
  return (
    <Layout>
      <section className={utileStyles.headingMd}>
        <p>谷田 大空のブログ記事です</p>
      </section>

      <section>
        <h2>エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src='/images/thumbnail01.jpg'
                className={styles.thumbnailImage} alt="Thumbnail" />
            </Link>
            <Link href="/" className={utileStyles.boldText}>
              サンプルテキスト
            </Link>
            <br />
            <small className={utileStyles.lightText}>
              Febrary 2023
            </small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
