import React, { useReducer } from "react";
import Head from "next/head";
import Link from "next/link";
import { Store } from "@/utils/Store";
export default function Layout({ title, children }) {
  const { state, dispatch } = useReducer(Store);
  const { cart } = state;
  return (
    <>
      <Head>
        <title>{title ? title + "-Amazona" : "Amazona"}</title>
        <meta name="description" content="Ecom Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between shadow-md items-center px-4 px">
            <Link className="text-lg font-bold" href="/">
              Amazona
            </Link>
            <div>
              <Link className="p-2" href="/cart">
                Cart
                {cart.cartItems.length > 0 && (
                  <span>
                    {" "}
                    (cart.cartItems.reduce((acumulator ,action) => acumulator
                    +c.quantity))
                  </span>
                )}
              </Link>
              <Link className="p-2" href="/login">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          @Copyright @Shahriar
        </footer>
      </div>
    </>
  );
}
