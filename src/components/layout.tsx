import { Link, PageProps } from "gatsby";
import * as React from "react";
import logo from "../images/logo.svg";

const Layout: React.FC<PageProps> = ({ children }) => (
  <>
    <header className="flex justify-between items-center shadow-lg bg-white z-50 h-24 sticky top-0">
      <Link
        to="/"
        className="px-8 flex items-center gap-8 text-xl lg:text-3xl font-serif"
      >
        <img src={logo} alt="Awesome Product" className="w-8 lg:w-12" />
        <title className="flex gap-2">
          <span>Awesome</span>
          <span className="text-gray-500">Product</span>
        </title>
      </Link>
      <nav>
        <ul className="flex flex-row items-center gap-8 py-4 px-8 text-lg text-gray-700">
          <li className="hidden lg:block">
            <Link to="#how">How does it work?</Link>
          </li>
          <li className="hidden lg:block">
            <Link to="#why">Why use Awesome Product?</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <section className="flex items-center justify-between gap-4 p-8 lg:p-16 text-sm bg-slate-700 text-white">
        <div className="flex flex-col gap-4">
          <div className="font-display">
            <span>Awesome Product</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="uppercase">Legal</span>
          <ul className="underline">
            <li>
              <Link to="/" target="_blank">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" target="_blank">
                Imprint
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-0 justify-between p-2 lg:p-4 text-xs bg-slate-900 text-gray-300 text-start">
        <span className="uppercase">© copyright 2023 Your Company</span>
        <span className="uppercase">made with ❤ by your company</span>
      </section>
    </footer>
  </>
);

export default Layout;
