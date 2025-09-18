import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="news/first">Dummy 1</Link>
        </li>
        <li>
          <Link href="news/second">Dummy 2</Link>
        </li>
        <li>
          <Link href="news/third">Dummy 3</Link>
        </li>
      </ul>
    </>
  );
}
