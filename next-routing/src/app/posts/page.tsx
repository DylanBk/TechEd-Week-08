import Link from "next/link";

const Posts = () => {
    return (
        <>
            <h2 className="mt-44 text-3xl text-center">This is the posts page</h2>

            <ol className="w-fit flex flex-col mx-auto mt-8 text-left text-lg">
                <li className="text-white hover:text-gray-400 transition duration-200">
                    <Link href="/posts/1">Post 1</Link>
                </li>
                <li className="text-white hover:text-gray-400 transition duration-200">
                    <Link href="/posts/2">Post 2</Link>
                </li>
                <li className="text-white hover:text-gray-400 transition duration-200">
                    <Link href="/posts/3">Post 3</Link>
                </li>
            </ol>
        </>
    );
};

export default Posts;