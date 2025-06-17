import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Next MetaData | About',
    description: 'Some information about this website.',
    openGraph: {
        title: 'Next MetaData | About',
        description: 'Some information about this website.',
        url: 'http://localhost:3000/about',
    }
};

const About = () => {
    return (
        <main>
            <h2 className="mt-64 text-3xl text-center">This is the about page</h2>
        </main>
    );
};


export default About;