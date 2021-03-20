import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>NextJS App</h1>
        <nav>
          <ul>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/first-post">
                <a>First Post</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>Main content</main>

      <footer>Footer content</footer>
    </div>
  );
}
