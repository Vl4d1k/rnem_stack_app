import DashboardNav from './DashboardNav';
import ConnectNav from './ConnectNav';
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div className="bg-gray-50 p-5">
                <ConnectNav />
            </div>

            <DashboardNav />

            <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                    <div className="ml-4 mt-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Your Hotels
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit quam corrupti consectetur.
                        </p>
                    </div>
                    <div className="ml-4 mt-4 flex-shrink-0">
                        <Link
                            to="/hotels/new"
                            className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add New Hotel
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
