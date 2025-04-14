const Sidebar = () => {
    return (
      <div className="w-64 bg-blue-800 text-white flex flex-col h-full">
        <div className="flex items-center justify-center p-4 text-xl font-semibold">
          JobQuest
        </div>
        <nav className="flex-1 space-y-2">
          <a href="/dashboard" className="block p-4 hover:bg-blue-700">
            Dashboard
          </a>
          <a href="/job" className="block p-4 hover:bg-blue-700">
            Jobs
          </a>
          <a href="/settings" className="block p-4 hover:bg-blue-700">
            Settings
          </a>
        </nav>
      </div>
    );
  };
  
  export default Sidebar;
  