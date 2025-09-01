"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { IoLogoMarkdown } from "react-icons/io";
import Link from "next/link";
import { useLogin } from "@/app/context/LoginContext"; // Correct path to context
import { useRouter } from "next/navigation";

// The navigation object (can be empty if you don't have flyout menus yet)
const navigation = {
  categories: [],
  pages: [],
};

export default function TopNavBar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useLogin(); // Get user state and logout function

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        {/* ... (Your existing mobile menu Dialog code is fine here) ... */}
      </Dialog>

      {/* Main Header */}
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Mobile menu button will go here if you have one */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="sr-only">Open menu</span>
                <IoLogoMarkdown aria-hidden="true" className="size-6" />
              </button>

              {/* THIS IS THE LOGO CODE THAT WAS MISSING */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt="Your Company Logo"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </Link>
              </div>
              {/* END OF LOGO CODE */}

              {/* Flyout menus (can be empty) */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {/* ... (Your categories and pages mapping logic) ... */}
                </div>
              </PopoverGroup>

              {/* Right side of Navbar (Login/Logout logic) */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? (
                    // If user is logged in
                    <>
                      <span className="text-sm font-medium text-gray-700">
                        Welcome, {user.username}!
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-6 w-px bg-gray-200"
                      />
                      <button
                        onClick={logout}
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    // If user is not logged in
                    <>
                      <Link
                        href={"/login"}
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Login
                      </Link>
                      <span
                        aria-hidden="true"
                        className="h-6 w-px bg-gray-200"
                      />
                      <Link
                        href="/register"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Create account
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
