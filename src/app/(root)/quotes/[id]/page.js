export default async function SingleQuote({ params }) {


    let singleQuotes = await fetch(`https://dummyjson.com/quotes/${params.id}`);
    singleQuotes = await singleQuotes.json();

    console.log('singleQuotes=>...............', singleQuotes)


    return (
        <div className="p-10">
            <h1 className="font-bold text-2xl text-center">Dynamic Ruote for a single Quote</h1>

            <div className="p-10 bg-green-300 mt-10">
                <h1 className="text-center text-5xl">{singleQuotes.quote}</h1>
                <h1 className="text-center text-xl p-5">Qoute By: <span className="font-bold underline">  {singleQuotes.author}</span></h1>

            </div>
        </div>
    )
}