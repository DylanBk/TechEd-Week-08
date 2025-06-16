import Link from "next/link";
import { House, LayoutDashboard, User } from 'lucide-react'

const Header = () => {
    return (
        <header className="h-20 w-full flex flex-row items-center justify-between p-4 border-b border-gray-400">
            <h1 className="text-5xl cursor-pointer">
                <Link href={'/home'}>Next Routing</Link>
            </h1>

            <nav className="flex flex-row gap-4 items-center">
                <Link href='/home'><House /></Link>
                {/* <Link href='/about'>About</Link> */}
                <Link href='/posts'><LayoutDashboard /></Link>
                <Link href='/profile'><User /></Link>
            </nav>
        </header>
    );
};

export default Header;