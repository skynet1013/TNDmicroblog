import Head from 'next/head';
import Image from 'next/image';
import styles from "../styles/Home.module.css";
import Layout from '../components/Layout';
import utileStyles from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";
import matter from 'gray-matter';

import Link from 'next/link';

//SSGの場合
export async function getStaticProps() {
  const allPostData = getPostsData(); //id,title,Date,thumnail
  console.log(allPostData);

  return {
    props: {
      allPostData,
    },
  };
}


export default function Home({ allPostData }) {
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
