import { PropsWithChildren } from 'react';

export function Layout(props: PropsWithChildren) {
  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-slate-900 dark:border-gray-700">
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
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform fixed top-0 start-0 bottom-0 z-[60] w-80 bg-white border-e border-gray-200 py-10 px-8 overflow-y-auto lg:block lg:translate-x-0 lg:top-0 lg:end-auto lg:bottom-0 lg:start-[max(0px,calc(50%-45rem))] lg:z-10 d[&amp;::-webkit-scrollbar]:w-2 [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-track]:bg-gray-100 [&amp;::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&amp;::-webkit-scrollbar-track]:bg-slate-700 dark:[&amp;::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-slate-900 hidden"
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

      <div className="w-full my-24 px-4 sm:px-6 md:px-8 lg:ps-[22rem]">
        {props.children}
      </div>
    </div>
  );
}

function SidebarNav() {
  return (
    <nav id="sidebar-nav" className="relative space-y-8">
      <h5 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-200">
        Navbar Links
      </h5>
    </nav>
  );
}
