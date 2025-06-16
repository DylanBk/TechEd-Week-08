import Link from "next/link";

const Profiles = async () => {
    return (
        <>
            <h2 className="mt-44 text-3xl text-center">This is the profiles page</h2>

            <ol className="w-fit flex flex-col mx-auto mt-8 text-left text-lg">
                <Link
                    className="text-white hover:text-gray-400 transition duration-200"
                    href={'/profile/Dylan'}>
                    Dylan
                </Link>

                <Link
                    className="text-white hover:text-gray-400 transition duration-200"
                    href={'/profile/Jaden'}>
                    Jaden
                </Link>

                <Link
                    className="text-white hover:text-gray-400 transition duration-200"
                    href={'/profile/Toby'}>
                    Toby
                </Link>
            </ol>
        </>
    );
};

export default Profiles;