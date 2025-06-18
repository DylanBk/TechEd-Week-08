import Link from 'next/link';
import {User} from 'lucide-react';
import db from "@/api/dbConnection";

const Posts = async () => {
    const q = await db.query('SELECT * FROM posts ORDER BY created_at DESC LIMIT 10');
    const posts = q.rows;

    return (
        <main>
            <Link
                className='w-fit fixed right-4 bottom-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors'
                href='/posts/create'>
                Create
            </Link>

            <div className="w-1/2 flex flex-col gap-4 mx-auto mt-8">
                { posts ? (
                    posts.map((p, i) => (
                        <Link
                            key={i}
                            className='flex flex-col gap-2 p-4 rounded-md bg-white/5 hover:bg-white/20 transition-colors'
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
                    <p className="text-2xl text-center">No posts available.</p>
                )}
            </div>
        </main>
    );
};

export default Posts;