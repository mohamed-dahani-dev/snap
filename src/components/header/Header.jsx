import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardCheck,
  faCalendarDays,
  faBell,
  faClock,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"; // Import the specific icon
import { useState } from "react";

const Header = () => {
  // show menu list
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex justify-between items-center gap-10">
      <div className="flex items-center justify-between gap-10">
        <h1 className="text-black text-3xl font-bold">
          <a href="/">snap</a>
        </h1>
        <nav className=" flex  items-center gap-2 max-md:hidden">
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
      <div className="flex items-center gap-6 max-md:hidden">
        <button className="text-sm text-almostGray px-4 py-2 transition-all hover:text-black">
          Login
        </button>
        <button className="text-sm text-almostGray px-4 py-2 transition-all border-[1.5px] rounded-md hover:text-black hover:border-almostBlack">
          Register
        </button>
      </div>
      <button
        className="hidden max-md:block"
        onClick={() => {
          setShowMenu(true);
        }}
      >
        <FontAwesomeIcon icon={faBars} size="xl" />
      </button>
      {showMenu && (
        <div className="fixed bg-[#00000076] inset-0 z-50">
          <div className="absolute right-0 w-2/3 h-full transition-all bg-white p-5">
            <button
              className="mb-5"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <FontAwesomeIcon size="xl" icon={faXmark} />
            </button>
            <nav className=" flex flex-col items-center gap-2">
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
                        onClick={() => {
                          setShowMenu(false);
                        }}
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
                        onClick={() => {
                          setShowMenu(false);
                        }}
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
                        onClick={() => {
                          setShowMenu(false);
                        }}
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
                          onClick={() => {
                            setShowMenu(false);
                          }}
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
                        onClick={() => {
                          setShowMenu(false);
                        }}
                      >
                        History
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        onClick={() => {
                          setShowMenu(false);
                        }}
                      >
                        Our Team
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        onClick={() => {
                          setShowMenu(false);
                        }}
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
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Careers
              </a>
              <a
                href=""
                className="text-sm text-almostGray px-3 py-2 transition-all hover:text-black"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                About
              </a>
            </nav>

            <div className="flex flex-col items-center gap-6 mt-5">
              <button
                onClick={() => {
                  setShowMenu(false);
                }}
                className="w-full text-sm text-almostGray px-4 py-2 transition-all hover:text-black"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setShowMenu(false);
                }}
                className="w-full text-sm text-almostGray px-4 py-2 transition-all border-[1.5px] rounded-md hover:text-black hover:border-almostBlack"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
