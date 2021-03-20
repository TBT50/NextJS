import Link from "next/link";

export default function Contact() {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Homepage</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/first-post">
                <a>First Post</a>
              </Link>
            </li>
          </ul>
        </nav>
        <h1>This is the contact page</h1>
      </header>
    </div>
  );
}
