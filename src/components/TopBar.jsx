function TopBar(props) {
  return (
    <div class="flex items-center justify-between bg-darkBackground p-4 shadow-md">
      <div class="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          class="bg-gray-700 text-lightGray rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neonBlue"
        />
      </div>
      <div class="flex items-center space-x-4">
        <button class="text-lightGray hover:text-neonBlue focus:outline-none">
          Notifications
        </button>
        <button
          onClick={props.onSignOut}
          class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default TopBar;