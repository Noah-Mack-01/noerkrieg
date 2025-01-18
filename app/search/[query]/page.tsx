export default async function Search({params}: { params: Promise<{query: string}> } ) {
  const searchFor = (await params).query;
  return (
  <section className="w-full h-full flex flex-col justify-start align-end">
    <span className="text-2xl font-bold">Search Results for {(await params).query}:</span>
    <div></div>
  </section>)
}