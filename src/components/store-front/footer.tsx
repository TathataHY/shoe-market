import { ModeToggle } from "../mode-toggle";

export function Footer() {
  return (
    <footer className="mt-16 mb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 dark:border-gray-50/10">
        <p className="text-xs leading-5 text-gray-700 dark:text-gray-300">
          &copy; 2024 ShoeMarket. All Rights Reserved.
        </p>
        <ModeToggle />
      </div>
    </footer>
  );
}
