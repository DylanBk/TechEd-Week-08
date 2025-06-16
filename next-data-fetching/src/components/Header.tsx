import Link from "next/link";
import {House, LayoutDashboard} from 'lucide-react';

const Header = () => {
    return (
        <header className="h-20 w-full sticky inset-0 z-10 flex flex-row items-center justify-between p-4 border-b border-gray-500 bg-background">
            <h1 className="text-4xl">
                <Link href='/home'>Next Data Fetching</Link>
            </h1>

            <nav className="flex flex-row gap-4 items-center">
                <Link href='/home'><House className="hover:!fill-background icon" /></Link>
                <Link href='/posts'><LayoutDashboard className="icon" /></Link>
            </nav>
        </header>
    );
};

export default Header;