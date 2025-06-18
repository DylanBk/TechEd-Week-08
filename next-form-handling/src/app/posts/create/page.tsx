import db from "@/api/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const CreatePost = async () => {
    const handleFormSubmit = async (form: FormData) => {
        'use server';

        const formData = {
            author: form.get('author'),
            title: form.get('title'),
            body: form.get('body')
        };

        const q = await db.query(
            'INSERT INTO posts (author, title, body) VALUES ($1, $2, $3)',
            [formData.author, formData.title, formData.body]
        );

        if (q.rowCount && q.rowCount > 0) {
            console.log('Post created successfully');

            revalidatePath('/posts');
            redirect('/posts');
        } else {
            console.error('Failed to create post');
        };
    };


    return (
        <main>
            <div className="w-1/2 mx-auto mt-8">
                <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>

                <form
                    className="flex flex-col gap-4"
                    action={handleFormSubmit}>
                    <input
                        name="author"
                        className="p-2 rounded-md border border-gray-500 outline-none focus:border-blue-500"
                        type="text"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="text"
                        className="p-2 rounded-md border border-gray-500 outline-none focus:border-blue-500"
                        name="title"
                        placeholder="Post Title"
                        required
                    />

                    <textarea
                        name="body"
                        className="h-32 resize-none p-2 rounded-md border border-gray-500 outline-none focus:border-blue-500"
                        placeholder="Post Content"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                        Create Post
                    </button>
                </form>
            </div>
        </main>
    );
};

export default CreatePost;