import Link from "next/link";

export const NoPost = () => {
  return (
    <section>
      <h1>Ups...</h1>
      <p>Nie możemy znaleźć tego posta 🤔</p>
      <p>
        Sprawdź <Link href="/blog">listę wszystkich postów</Link> lub wróć na{" "}
        <Link href="/">stronę główną</Link>.
      </p>
    </section>
  );
};