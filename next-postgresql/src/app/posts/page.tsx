import { Metadata } from 'next';
import Link from 'next/link';
import {User} from 'lucide-react';
import db from "@/api/dbConnection";

export const metadata: Metadata = {
    title: 'Next + Supabase | Posts',
    description: 'A list of posts from the database'
};

const Posts = async () => {
    const q = await db.query('SELECT * FROM posts');
    const posts = q.rows;

    return (
        <main>
            <h2 className='text-3xl text-center'>Posts</h2>

            <div className="w-1/2 flex flex-col mx-auto mt-8">
                { posts ? (
                    posts.map((p, i) => (
                        <Link
                            key={i}
                            className='flex flex-col gap-2 p-4 first:rounded-t-md last:rounded-b-md bg-white/5 hover:bg-white/20 transition-colors'
                            href={`/posts/${p.id}`}>
                            <div className="flex flex-row gap-2 items-center">
                                <User size={24} />
                                <p className="font-bold">{p.author}</p>
                            </div>

                            <div className='flex flex-col'>
                                <h3 className="text-xl font-semibold">{p.title}</h3>
                                <p className="text-gray-300">{p.body}</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-center">No posts available.</p>
                )}
            </div>
        </main>
    );
};

export default Posts;