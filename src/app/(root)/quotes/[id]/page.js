import { notFound } from "next/navigation";
// import NotFound from "./not-found";

export default async function SingleQuote({ params }) {

    const { id } = await params; // must be await for params to use .
    // console.log('this id is coming from params is :',id);

    let singleQuotes = await fetch(`https://dummyjson.com/quotes/${id}`);
    singleQuotes = await singleQuotes.json();

    if (singleQuotes.message) {
        notFound();
        // or
        // return (
            // <NotFound />
        // )
    }

    console.log("singleQuotes=>..........", singleQuotes);
    // console.log(params,'these are the params from dynamic route single page................');

    return (
        <div className="p-10">
            <h1 className="font-bold text-2xl text-center">Dynamic Ruote for a single Quote</h1>
            <div className="p-10 bg-green-300 mt-10">
                <h1 className="text-center text-5xl font-mono">{singleQuotes.quote}</h1>
                <h1 className="text-center text-xl p-5">Qoute By: <span className="font-bold underline">  {singleQuotes.author}</span></h1>
            </div>
        </div>
    )
}