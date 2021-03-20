import Link from "next/link";

export default function FirstPost() {
  return (
    <div className="container">
      <header>
        <h1>First Post Title</h1>
        <Link href="/">Go to homepage</Link>
      </header>
    </div>
  );
}
