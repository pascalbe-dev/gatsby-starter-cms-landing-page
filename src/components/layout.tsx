import { Link } from "gatsby";
import * as React from "react";
import logo from "../images/logo.svg";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <header className="sticky top-0 z-50 flex h-24 bg-white shadow-lg">
      <div className="size-lg-short flex items-center justify-between">
        <Link to="/" className="headline4 flex items-center gap-8 font-serif">
          <img src={logo} alt="Awesome Product" className="w-8 lg:w-12" />
          <title className="flex gap-2">
            <span>Awesome</span>
            <span className="text-emph-sm">Product</span>
          </title>
        </Link>
        <nav>
          <ul className="headline6 flex flex-row items-center gap-8">
            <li className="hidden lg:block">
              <Link to="#how">How does it work?</Link>
            </li>
            <li className="hidden lg:block">
              <Link to="#why">Why use Awesome Product?</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main className="py-8">{children}</main>
    <footer>
      <section className="flex items-center justify-between gap-4 bg-slate-700 p-8 text-sm text-white lg:p-16">
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
              <Link to="/impressum">Impressum</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col items-start justify-between gap-4 bg-slate-900 p-2 text-start text-xs text-gray-300 lg:flex-row lg:items-center lg:gap-0 lg:p-4">
        <span className="uppercase">© copyright 2023 Your Company</span>
        <span className="uppercase">made with ❤ by your company</span>
      </section>
    </footer>
  </>
);

export default Layout;
