import Head from "next/head";
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
