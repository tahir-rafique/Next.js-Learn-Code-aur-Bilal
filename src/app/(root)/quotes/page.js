// meta data:

import QuoteCard from "@/components/QuoteCard";
import Link from "next/link";

export const metadata = {
    title: "Quotes",
}



//  Main code:
const Quotes = async () => {
    let quotes = await fetch("https://dummyjson.com/quotes");
    quotes = await quotes.json();

    console.log('Quotes=>..........', quotes);

    const allQuotes = quotes.quotes;
    return (
        <div className="p-10">
            <h1 className="font-bold text-2xl text-center">Quotes</h1>
            {allQuotes.map((data) =>
                <Link key={data.id} href={`/quotes/${data.id}`}>
                    <QuoteCard author={data.author} quote={data.quote} />
                </Link>
            )}
        </div>
    )
}

export default Quotes;






// Method - 2 ✅  normal async func
// export default async function Quotes(){
//     return(
//         <div className="">
//             <h1 className="font-bold text-2xl text-center">Qoutes</h1>
//         </div>
//     ) }