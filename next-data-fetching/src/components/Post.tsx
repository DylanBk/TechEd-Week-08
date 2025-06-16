import {User, ArrowBigUp, ArrowBigDown} from 'lucide-react';

type Props = {
    id: number,
    userId: number,
    title: string,
    body: string,
};

const Post = (props: Props) => {

    return (
        <section
            id={`post-${props.id}`}
            className="flex flex-col gap-3 p-4 rounded-md bg-[#181818] hover:bg-[#222] transition-all duration-200">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-2 items-center">
                        <User className='border-2 border-white rounded-full' size={36} />
                        <p className="text-bold">User {props.userId}</p>
                    </div>

                    <button className='primary'>Follow</button>
                </div>

            <div className='flex flex-col'>
                <h3 className="mt-2 text-xl">{props.title}</h3>
                <p className='text-base text-gray-300'>{props.body}</p>
            </div>

            <div className="flex flex-row gap-4">
                <ArrowBigUp className='icon' size={32} />

                <ArrowBigDown className='icon' size={32} />
            </div>
        </section>
    );
};

export default Post;