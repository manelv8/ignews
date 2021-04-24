import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import Prismic from '@prismicio/client'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head> Posts | Ignews </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">  
            <time> 12 maarço 2021 </time>
            <strong> meu titulo do meu post </strong>
            <p>
              subtituio do post do meu post Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Iste libero iure ut vel quae nobis
              dolores voluptatibus rerum. Quisquam aliquid beatae voluptatem
              voluptates quasi necessitatibus aspernatur aperiam commodi!
              Cumque, quod.
            </p>
          </a>
          <a>
            <time> 12 maarço 2021 </time>
            <strong> meu titulo do meu post </strong>
            <p>
              subtituio do post do meu post Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Iste libero iure ut vel quae nobis
              dolores voluptatibus rerum. Quisquam aliquid beatae voluptatem
              voluptates quasi necessitatibus aspernatur aperiam commodi!
              Cumque, quod.
            </p>
          </a>
          <a>
            <time> 12 maarço 2021 </time>
            <strong> meu titulo do meu post </strong>
            <p>
              subtituio do post do meu post Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Iste libero iure ut vel quae nobis
              dolores voluptatibus rerum. Quisquam aliquid beatae voluptatem
              voluptates quasi necessitatibus aspernatur aperiam commodi!
              Cumque, quod.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () =>{
  const prismic = getPrismicClient();
  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ],{
    fetch:['post.title','post.content'],
    pageSize: 100
  })

  console.log(response)
  return {
    props: {},
    revalidate: 60*60*24, //24 hours
  }
}