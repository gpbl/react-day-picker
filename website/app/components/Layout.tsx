import { PropsWithChildren } from 'react';

export function Layout(props: PropsWithChildren) {
  return (
    <>
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white border-b text-sm py-2.5 md:py-4 dark:bg-slate-900 dark:border-gray-700">
        <nav
          className="flex flex-nowrap basis-full items-center w-full mx-auto px-4 md:px-8 lg:max-w-[90rem]"
          aria-label="Global"
        >
          <a
            className="rounded-md sdark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="/"
          >
            React Day Picker
          </a>

          <div className="flex items-center ms-auto md:w-full md:gap-x-3 md:order-3 md:ms-0">
            <div className="flex items-center relative z-10 ms-auto">
              <div className="lg:ms-1 flex">
                <a
                  className="inline-flex flex-shrink-0 justify-center items-center h-9 w-9 font-medium rounded-full text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="https://github.com/gpbl/react-day-picker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </div>

              {/* <!-- Dark Mode --> */}
              <button
                type="button"
                className="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                data-hs-theme-click-value="dark"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </button>
              <button
                type="button"
                className="hs-dark-mode-active:block hidden hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                data-hs-theme-click-value="light"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 8a2 2 0 1 0 4 4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              </button>
              {/* <!-- End Dark Mode --> */}

              <div className="border-s h-full ps-3.5 md:ps-5 ms-1 md:ms-2 dark:border-gray-700">
                {/* TODO: versioning */}
                <span className="text-black font-medium dark:text-gray-200">
                  v9.00
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="max-w-[90rem] mx-auto">
        {/* Collapsed sidebar */}
        <div className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-80 bg-white overflow-y-auto [--has-autofocus:false] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 lg:block lg:translate-x-0 lg:top-8 lg:end-auto lg:-bottom-8 lg:start-[max(0px,calc(50%-45rem))] lg:z-10 before:sticky before:inset-x-0 before:top-0 lg:before:top-8 before:z-20 before:block before:w-full before:h-10 before:pointer-events-none before:bg-gradient-to-b before:from-white before:via-white/90 after:sticky after:inset-x-0 after:bottom-0 lg:after:bottom-8 after:z-20 after:block after:w-full after:h-10 after:pointer-events-none after:bg-gradient-to-t after:from-white after:via-white/90 dark:before:from-slate-900 dark:before:via-slate-900/95 dark:after:from-slate-900 dark:after:via-slate-900/95 dark:bg-slate-900 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
          <div className="max-w-3xl mx-auto py-2">
            <button
              type="button"
              className="flex justify-between gap-x-2 items-center w-full text-gray-500 hover:text-gray-600"
              data-hs-overlay="#docs-sidebar"
              aria-controls="docs-sidebar"
              aria-label="Toggle navigation"
            >
              <span className="text-sm">Toggle Navigation</span>
              <svg
                className="flex-shrink-0 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6"></line>
                <line x1="3" x2="21" y1="12" y2="12"></line>
                <line x1="3" x2="21" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        <div
          id="docs-sidebar"
          className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-80 bg-white overflow-y-auto [--has-autofocus:false] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 lg:block lg:translate-x-0 lg:top-8 lg:end-auto lg:-bottom-8 lg:start-[max(0px,calc(50%-45rem))] lg:z-10 before:sticky before:inset-x-0 before:top-0 lg:before:top-8 before:z-20 before:block before:w-full before:h-10 before:pointer-events-none before:bg-gradient-to-b before:from-white before:via-white/90 after:sticky after:inset-x-0 after:bottom-0 lg:after:bottom-8 after:z-20 after:block after:w-full after:h-10 after:pointer-events-none after:bg-gradient-to-t after:from-white after:via-white/90 dark:before:from-slate-900 dark:before:via-slate-900/95 dark:after:from-slate-900 dark:after:via-slate-900/95 dark:bg-slate-900 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
        >
          <button
            type="button"
            className="ms-auto flex justify-end lg:hidden text-gray-500 hover:text-gray-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-overlay="#docs-sidebar"
            aria-controls="docs-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="flex-shrink-0 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
          <SidebarNav />
        </div>

        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-[22rem]">
          {props.children}
        </div>
      </div>
    </>
  );
}

function SidebarNav() {
  return (
    <nav
      id="sidebar-nav"
      className="relative space-y-8 pt-7 pb-10 px-8 -my-8 lg:my-0"
    >
      <ul>
        <li>
          <h5 className="my-3 text-sm font-semibold text-slate-900 dark:text-slate-200">
            Introduction
          </h5>
          <ul className="ms-0.5 space-y-2 border-s-2 border-slate-100 dark:border-slate-800">
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/"
              >
                React DayPicker
              </a>
            </li>
          </ul>
          <h5 className="my-3 text-sm font-semibold text-slate-900 dark:text-slate-200">
            Getting Started
          </h5>
          <ul className="ms-0.5 space-y-2 border-s-2 border-slate-100 dark:border-slate-800">
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/start"
              >
                Installation
              </a>
            </li>
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/license"
              >
                License
              </a>
            </li>
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/upgrading"
              >
                Upgrading to v9
              </a>
            </li>
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/support"
              >
                Help & Support
              </a>
            </li>
          </ul>
          <h5 className="my-3 text-sm font-semibold text-slate-900 dark:text-slate-200">
            Customization
          </h5>
          <ul className="ms-0.5 space-y-2 border-s-2 border-slate-100 dark:border-slate-800">
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/navigation"
              >
                Months Navigation
              </a>
            </li>
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/customization"
              >
                Calendar Options
              </a>
            </li>
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/styling"
              >
                Styling DayPicker
              </a>
            </li>
          </ul>
          <h5 className="my-3 text-sm font-semibold text-slate-900 dark:text-slate-200">
            Selecting Days
          </h5>
          <ul className="ms-0.5 space-y-2 border-s-2 border-slate-100 dark:border-slate-800">
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/selections"
              >
                Selection modes
              </a>
            </li>
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/custom-selections"
              >
                Custom Selections
              </a>
            </li>
          </ul>
          <h5 className="my-3 text-sm font-semibold text-slate-900 dark:text-slate-200">
            Internationalization
          </h5>
          <ul className="ms-0.5 space-y-2 border-s-2 border-slate-100 dark:border-slate-800">
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/localization"
              >
                Localization
              </a>
            </li>
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/dates-formatters"
              >
                Dates and Formatters
              </a>
            </li>
          </ul>
          <h5 className="my-3 text-sm font-semibold text-slate-900 dark:text-slate-200">
            Advanced
          </h5>
          <ul className="ms-0.5 space-y-2 border-s-2 border-slate-100 dark:border-slate-800">
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/custom-components"
              >
                Custom Components
              </a>
            </li>
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/modifiers"
              >
                Custom Modifiers
              </a>
            </li>
          </ul>
          <h5 className="my-3 text-sm font-semibold text-slate-900 dark:text-slate-200">
            API reference
          </h5>
          <ul className="ms-0.5 space-y-2 border-s-2 border-slate-100 dark:border-slate-800">
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/props"
              >
                DayPicker Props
              </a>
            </li>
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/modifiers"
              >
                DayPicker hooks
              </a>
            </li>
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/modifiers"
              >
                Utilities
              </a>
            </li>
          </ul>
          <hr className="my-8 border-slate-100 dark:border-slate-800" />
          <h5 className="my-3 text-sm font-semibold text-slate-900 dark:text-slate-200">
            Development
          </h5>
          <ul className="ms-0.5 space-y-2 border-s-2 border-slate-100 dark:border-slate-800">
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/modifiers"
              >
                Contributing to DayPicker
              </a>
            </li>
            <li>
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                href="/architecture"
              >
                Architecture Details
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
