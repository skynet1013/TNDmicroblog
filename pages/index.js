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
  const allPostData = await getPostsData(); //id,title,Date,thumnail
  console.log(allPostData);

  return {
    props: {
      allPostData,
    },
  };
}


export default function Home({ allPostData }) {
  return (
    <Layout home>
      <Head>
        <title>{ }</title>
      </Head>
      <section className={utileStyles.headingMd}>
        <p>谷田 大空のブログ記事です</p>
      </section>

      <section>
        <h2>エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`}
                  className={styles.thumbnailImage} alt="Thumbnail" />
              </Link>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utileStyles.lightText}>
                {date}
              </small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
