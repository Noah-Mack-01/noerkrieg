export default async function Search({params}: { params: Promise<{query: string}> } ) {
  const searchFor = (await params).query;
  return (
  <section className="w-full h-full flex flex-col justify-start align-end p-3">
   <span className="text-2xl font-semibold">Search Results for <span className="font-bold">{(await params).query}:</span></span>
    <div></div>
  </section>)
}