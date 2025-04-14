const Header = () => {
    return (
      <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
        <div className="text-lg font-semibold">JobQuest</div>
        <div className="flex items-center space-x-4">
          <div>Notifications</div>
          <div>Profile</div>
        </div>
      </header>
    );
  };
  
  export default Header;
  