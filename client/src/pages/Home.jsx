import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="flex-1">
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