import QuoteCard from "@/components/QuoteCard";
import Link from "next/link";

// meta data:
export const metadata = {
    title: "Quotes",
}

//  Main code:
const Quotes = async () => {
    let quotes = await fetch("https://dummyjson.com/quotes/", {
        cache: 'no-cache',
        // revalidate: 700,
    });

    quotes = await quotes.json();
    const allQuotes = quotes.quotes;
    // console.log('Quotes=>..........', quotes);
    // const totalQuotes = quotes.total;
    // console.log(allQuotes, 'This is the total number of quotes.............');
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