import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <>
            <div className="flex">
                <div className="bg-gray-800 w-64 flex-none overflow-hidden">
                    <Sidebar />
                </div>
                {/* <Sidebar /> */}
                <main className="flex-1 p-4">
                    <h1>Welcome to RestSecure!</h1>
                </main>
            </div>
            {/* <div>
                <Sidebar />
            </div> */}
        </>
    );
};

export default Home;