import Post from "@/components/Post";

type PostType = {
    id: number;
    userId: number;
    title: string;
    body: string;
};

const getPosts = async (): Promise<PostType[]> => {
    const req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
    });
    const res = await req.json();

    return res;
};

const Posts = async () => {
    const postData = await getPosts();

    return (
        <>
            <h2 className="mt-20 text-3xl text-center">Posts</h2>

            <div className="h-full w-1/2 flex flex-col gap-4 p-4 mx-auto">
                {postData.map((p) => (
                    <Post
                        key={p.id}
                        id={p.id}
                        userId={p.userId}
                        title={p.title}
                        body={p.body}
                    />
                ))}
            </div>
        </>
    );
};

export default Posts;