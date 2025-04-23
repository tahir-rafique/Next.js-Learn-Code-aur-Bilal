import Link from "next/link";

export default function Dashboard() {
    return (
        <div className=" container mx-auto bg-purple-300 h-full">

            <h1 className="text-3xl font-semibold text-center p-10">

                This is Dashboard page.
            </h1>

            <div className="p-10 flex gap-x-10">
                <Link
                    className=" text-center w-full  bg-purple-400 rounded-md p-4  hover:bg-purple-200"
                    href={"/settings"}
                >
                    Settings
                </Link>

                <Link
                    className=" text-center w-full  bg-purple-400 rounded-md p-4  hover:bg-purple-200"
                    href={"/profile"}
                >
                    Profile
                </Link>
            </div>

            <h1 className="p-50" >
                <Link
                    className="block text-center w-full  bg-red-400 rounded-md p-4  hover:bg-purple-200"
                    href={"/"}
                >
                    Home
                </Link>
            </h1>


        </div>
    );
}
