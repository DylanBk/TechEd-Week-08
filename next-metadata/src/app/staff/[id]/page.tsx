import { Metadata } from "next";

type Props = {
    params: {
        id: number
    }
};

export const metadata: Metadata = {
    title: 'Next MetaData | Staff Profile',
    description: 'This is the profile page of a staff member in the Next MetaData application.',
    openGraph: {
        title: 'Next MetaData | Staff Profile',
        description: 'This is the profile page of a staff member in the Next MetaData application.',
        url: 'http://localhost:3000/staff',
    }
};

const StaffProfile = async ({params}: Props)  => {
    const getStaff = async () => {
        const req = await fetch(`https://dummyjson.com/users/${params.id}`, {
            method: 'GET'
        });
        return await req.json();
    };

    const staff = await getStaff();

    return (
        <main className="h-full w-2/3 flex flex-col gap-4 p-4 mx-auto">
            <h2 className="text-4xl text-center">Staff Profile</h2>
            <p className="text-xl text-center">This is the profile page for staff member with ID: {params.id}</p>

            <div className="flex flex-col items-start justify-center gap-4 p-4 rounded-xl bg-black">
                <div className="w-full flex flex-row justify-between">
                    <p className="text-2xl font-bold">{staff.firstName} {staff.lastName}</p>
                
                    <p
                        className={`px-2 py-1 border ${staff.role === 'admin' ? 'border-red-500' : staff.role === 'moderator' ? 'border-amber-500' : 'border-white'} rounded-md ${staff.role === 'admin' ? 'text-red-500' : staff.role === 'moderator' ? 'text-amber-500' : 'text-white'}`}>
                        {staff.role}
                    </p>
                </div>

                <section>
                    <p className="text-gray-500">{staff.email}</p>
                    <p className="text-gray-500">{staff.phone}</p>
                    <p className="text-gray-500">Birth Date: {staff.birthDate}</p>
                </section>

                <section className="mt-4">
                    <h3 className="text-lg font-semibold">Address</h3>
                    <p className="text-gray-500">{staff.address.address}</p>
                    <p className="text-gray-500">{staff.address.city}</p>
                    <p className="text-gray-500">{staff.address.state}</p>
                    <p className="text-gray-500">{staff.address.country}</p>
                    <p className="text-gray-500">{staff.address.postalCode}</p>
                </section>
            </div>
        </main>
    );
};

export default StaffProfile;