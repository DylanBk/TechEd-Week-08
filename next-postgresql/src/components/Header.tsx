import Link from "next/link";

const Header = () => {
    return (
        <header className="h-20 w-full sticky inset-0 z-10 flex flex-row items-center justify-between p-4 border-b border-white/20 bg-black/50 backdrop-blur-sm">
            <h1 className="text-2xl font-bold">Next + Supabase</h1>
            <nav className="flex flex-row gap-4">
                <Link href='/'>Home</Link>
                <Link href='/posts'>Posts</Link>
            </nav>
        </header>
    );
};

export default Header;