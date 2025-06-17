import { Metadata } from 'next';
import {User} from 'lucide-react';
import db from "@/api/dbConnection";

export const metadata: Metadata = {
    title: 'Next + Supabase | Post',
    description: 'A focused post from the database'
};

type Props = {
    params: {
        id: number
    }
};

const Posts = async ({params}: Props) => {
    const q = await db.query(
        'SELECT * FROM posts WHERE id = $1',
        [params.id]
    );
    const post = q.rows[0];

    return (
        <main>
            <h2 className='text-3xl text-center'>Post {post.id}</h2>

            <div className="w-1/2 flex flex-col mx-auto mt-8">
                { post ? (
                        <div className='flex flex-col gap-2 p-4 rounded-md bg-white/5 hover:bg-white/20 transition-colors'>
                            <div className="flex flex-row gap-2 items-center">
                                <User size={24} />
                                <p className="font-bold">{post.author}</p>
                            </div>

                            <div className='flex flex-col'>
                                <h3 className="text-xl font-semibold">{post.title}</h3>
                                <p className="text-gray-300">{post.body}</p>
                            </div>
                        </div>
                ) : (
                    <p className="text-center">Something went wrong...</p>
                )}
            </div>
        </main>
    );
};

export default Posts;