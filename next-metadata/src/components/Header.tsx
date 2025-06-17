import Link from "next/link"

const Header = () => {
    return (
        <header className="h-20 w-full sticky inset-0 z-10 flex flex-row items-center justify-between p-4 border-b border-gray-800 bg-background/20 backdrop-blur-sm text-white">
            <h1 className="text-4xl">Next MetaData</h1>

            <nav className="flex flex-row gap-4 items-center">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/staff'>Staff</Link>
            </nav>
        </header>
    );
};

export default Header;