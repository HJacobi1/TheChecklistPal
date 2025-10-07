function Sidebar({ active }) {
  return (
    <>
      <div
        className={`h-full w-1/3 bg-bg-card block  ${!active && "invisible"}`}
      >
        <ul className="p-0 text-yellow-900">
          <li className="flex justify-center align-middle rounded-md hover:bg-bg-comp hover:text-tx-card hover:cursor-pointer transition duration-200">
            <a className="text-xl">Theme</a>
          </li>
          <li className="flex justify-center align-middle rounded-md hover:bg-bg-comp hover:text-tx-card hover:cursor-pointer transition duration-200">
            <a className="no-underline text-xl">Theme</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
