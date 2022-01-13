import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const DashboardNav = () => {

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState(window.location.pathname);

    const tabs = [
        { name: "Your Bookings", href: "/dashboard", current: activeTab === "/dashboard" ? true : false },
        { name: "Your Hotels", href: "/dashboard/seller", current: activeTab === "/dashboard/seller" ? true : false },
    ];

    
    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }

    const handleTabChange = (event) => {
        navigate(event.target.value);
    }


    return (
            <div>
                <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">
                        Select a tab
                    </label>
                    <select
                        value={activeTab}
                        onChange={handleTabChange}
                        id="tabs"
                        name="tabs"
                        className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    >
                        {tabs.map((tab) => (
                            <option 
                                key={tab.name}
                                value={tab.href}
                            >
                                {tab.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="hidden sm:block">
                    <nav
                        className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
                        aria-label="Tabs"
                    >
                        {tabs.map((tab, tabIdx) => (
                            <Link
                                key={tab.name}
                                to={tab.href}
                                className={classNames(
                                    tab.current
                                        ? "text-gray-900"
                                        : "text-gray-500 hover:text-gray-700",
                                    tabIdx === 0 ? "rounded-l-lg" : "",
                                    tabIdx === tabs.length - 1
                                        ? "rounded-r-lg"
                                        : "",
                                    "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                                )}
                                aria-current={tab.current ? "page" : undefined}
                            >
                                <span>{tab.name}</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        tab.current
                                            ? "bg-indigo-700"
                                            : "bg-transparent",
                                        "absolute inset-x-0 bottom-0 h-1"
                                    )}
                                />
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
    );
};

export default DashboardNav;
