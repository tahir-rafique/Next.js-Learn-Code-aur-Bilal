import Link from "next/link";

export default function Profile() {
    return (
        <div className=" container mx-auto bg-purple-300">

            <h1 className="text-6xl p-4 text-center">
                This is Profile page.
            </h1>


            <h1 className="p-10">
                <Link
                    className=" text-center w-full  bg-purple-400 rounded-md p-4  hover:bg-purple-200"
                    href={"/dashboard"}
                >
                    Dashboard
                </Link>
            </h1>
        </div>
    );
}
