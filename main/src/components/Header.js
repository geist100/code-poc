import React, {useState} from "react";
import styles from "@/styles/header.module.css";

const MenuItems = React.lazy(() => import('shop/menu').catch(() => import('src/shared/error/error-loading')));

const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className={"flex items-center justify-center min-[320px]:justify-between space-x-10 py-8 " + styles.bgColor}>
            <a href="/">
                <img width={34} height={34} style={{margin:'1%'}} src="/turkcell-logo.webp" alt="logo" />
            </a>
            <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                    </div>

                    <div className={isNavOpen ? styles.showMenuNav : styles.hideMenuNav}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a href="/about">Pasaj</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a href="/portfolio">Paketler</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a href="/contact">Dijital Servisler</a>
                            </li>
                            <li>
                                <a href="/contact">Ev İnterneti ve TV</a>
                            </li>
                            <li>
                                <a href="/contact">Kampanyalar</a>
                            </li>
                            <li>
                                <a href="/contact">Hızlı İşlemler</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <ul className={"DESKTOP-MENU hidden space-x-8 lg:flex " + styles.textColor}>
                    <li>
                        <a href="/">Anasayfa</a>
                    </li>
                    <li>
                        <a href="/contact">Ev İnterneti ve TV</a>
                    </li>
                    <MenuItems > </MenuItems>
                    <li>
                        <a href="/products">Ürünler</a>
                    </li>
                    <li>
                        <a href="/contact">Hızlı İşlemler</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
