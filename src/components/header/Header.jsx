import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardCheck,
  faCalendarDays,
  faBell,
  faClock,
} from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

const Header = () => {
  return (
    <header className="flex justify-between items-center gap-10">
      <div className="flex items-center justify-between gap-10">
        <h1 className="text-black text-3xl font-bold">snap</h1>
        <nav className=" flex  items-center gap-2">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-transparent px-3 py-2 text-sm text-almostGray transition-all hover:text-black">
                Features
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-gray-400"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    <FontAwesomeIcon
                      className="mr-2 text-indigo-600"
                      icon={faClipboardCheck}
                    />
                    Todo List
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    <FontAwesomeIcon
                      className="mr-2 text-green-600"
                      icon={faCalendarDays}
                    />
                    Calendar
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    <FontAwesomeIcon
                      className="mr-2 text-yellow-400"
                      icon={faBell}
                    />
                    Reminders
                  </a>
                </MenuItem>
                <form action="#" method="POST">
                  <MenuItem>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      <FontAwesomeIcon
                        className="mr-2 text-violet-600"
                        icon={faClock}
                      />
                      Planing
                    </button>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-transparent px-3 py-2 text-sm text-almostGray transition-all hover:text-black">
                Company
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-gray-400"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    History
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Our Team
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Blog
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
          <a
            href=""
            className="text-sm text-almostGray px-3 py-2 transition-all hover:text-black"
          >
            Careers
          </a>
          <a
            href=""
            className="text-sm text-almostGray px-3 py-2 transition-all hover:text-black"
          >
            About
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-sm text-almostGray px-4 py-2 transition-all hover:text-black">
          Login
        </button>
        <button className="text-sm text-almostGray px-4 py-2 transition-all border-[1.5px] rounded-md hover:text-black hover:border-almostBlack">
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
