import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Next MetaData | Staff',
    description: 'This is the staff page of the Next MetaData application.',
    openGraph: {
        title: 'Next MetaData | Staff',
        description: 'This is the staff page of the Next MetaData application.',
        url: 'http://localhost:3000/staff',
    }
};

const Staff = async () => {
    const getStaff = async () => {
        const req = await fetch('https://dummyjson.com/users', {
            method: 'GET'
        });
        const res = await req.json();

        console.log(res)

        return Array.from(res.users);
    };

    const staff = await getStaff();

    return (
        <main className="h-full w-2/3 flex flex-col gap-4 p-4 mx-auto">
            <h2 className="text-4xl text-center">Staff Page</h2>

            { staff ? (
                <div className="flex flex-col">
                    {staff.map((s: any, i: number) => (
                        <Link
                            key={i}
                            className="flex flex-col items-start justify-center gap-4 p-4 border-b border-gray-500 last:border-none first:rounded-t-xl last:rounded-b-xl bg-black"
                            href={`/staff/${s.id}`}>
                            <div className="w-full flex flex-row justify-between">
                                <p className="text-xl font-bold">{s.firstName} {s.lastName}</p>

                                <p
                                    className={`px-2 py-1 border ${s.role === 'admin' ? 'border-red-500' : s.role === 'moderator' ? 'border-amber-500' : 'border-white'} rounded-md ${s.role === 'admin' ? 'text-red-500' : s.role === 'moderator' ? 'text-amber-500' : 'text-white'}`}>
                                    {s.role}
                                </p>
                            </div>

                            <section>
                                <p className="text-gray-500">{s.email}</p>
                                <p className="text-gray-500">{s.phone}</p>
                                <p className="text-gray-500">{s.birthDate}</p>
                            </section>

                            <section>
                                <p className="text-gray-500">{s.address.address}</p>
                                <p className="text-gray-500">{s.address.city}</p>
                                <p className="text-gray-500">{s.address.state}</p>
                                <p className="text-gray-500">{s.address.country}</p>
                                <p className="text-gray-500">{s.address.postalCode}</p>
                            </section>
                        </Link>
                    ))}
                </div>
            ) : (
                <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl animate-pulse">Loading...</p>
            )}
        </main>
    );
};

export default Staff;