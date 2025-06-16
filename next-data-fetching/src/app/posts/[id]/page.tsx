import Post from "@/components/Post";

type Props = {
    params: {
        id: number
    }
};

const SpecificPost = async ({params}: Props) => {
    const slug = await params;
    const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug.id}`, {
        method: 'GET'
    });
    const res = await req.json();

    return (
        <>
            <div className="w-1/2 mx-auto mt-44">
                <Post
                    id={res.id}
                    userId={res.userId}
                    title={res.title}
                    body={res.body}
                />
            </div>
        </>
    );
};

export default SpecificPost;