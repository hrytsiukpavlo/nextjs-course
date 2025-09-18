export default function NewsDetailPage({ params }) {
  const { id: newsId } = params;
  return (
    <>
      <h1>News Detail Page</h1>
      <p>News id: {newsId}</p>
    </>
  );
}
