const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-1/5 bg-gray-800 text-white p-4">
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                                Settings
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                                Profile
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Content */}
            <main className="w-4/5 p-6 bg-white">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
