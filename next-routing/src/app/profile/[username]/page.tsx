type Props = {
    params: {
        username: string
    }
};

const Profile = async ({ params }: Props) => {
    const userData = await params;

    return (
        <>
            <h2 className="mt-64 text-3xl text-center">This is {userData.username}&apos;s profile page</h2>
        </>
    );
};

export default Profile;