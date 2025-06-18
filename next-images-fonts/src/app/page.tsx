import Image from "next/image";
import img from '@/../public/mountains.webp';



const Home = () => {
  return (
    <div className='p-4'>
      <h1 className="text-3xl text-center">Next.js Images and Fonts</h1>

      <figure className="flex flex-col gap-2 items-center mt-24">
        <Image
          src={img}
          alt="Man looking at snowy mountains in distances"
          height={500}
          width={500}
          placeholder="blur"
        />
        <figcaption>This image uses Next&apos;s built in Image component. The font is implemented using <code>next/fonts/google</code>.</figcaption>
      </figure>
    </div>
  );
};

export default Home;