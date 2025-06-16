import Link from "next/link";

type Props = {
    params: {
        postId: number
    }
};

const Post = async ({params}: Props) => {
    const postData = await params;

    return (
        <>
            <h2 className="mt-44 text-3xl text-center">This is the page for post {postData.postId}</h2>
            
            <ol className="w-fit flex flex-col mx-auto mt-8 text-left text-lg">
                <li className="text-white hover:text-gray-400 transition duration-200">
                    <Link href={`/posts/${postData.postId}/1`}>Comment 1</Link>
                </li>
                <li className="text-white hover:text-gray-400 transition duration-200">
                    <Link href={`/posts/${postData.postId}/2`}>Comment 2</Link>
                </li>
                <li className="text-white hover:text-gray-400 transition duration-200">
                    <Link href={`/posts/${postData.postId}/3`}>Comment 3</Link>
                </li>
            </ol>
        </>
    );
};

export default Post;