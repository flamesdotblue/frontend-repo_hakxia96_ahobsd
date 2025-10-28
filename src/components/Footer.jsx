import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold text-zinc-900">About</h4>
            <p className="mt-3 max-w-sm text-sm text-zinc-600">
              A clean, modern storefront template designed for Shopify. Customize sections, plug your products, and launch fast.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li><a className="hover:text-zinc-900" href="#features">Features</a></li>
              <li><a className="hover:text-zinc-900" href="#products">Products</a></li>
              <li><a className="hover:text-zinc-900" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-zinc-900" href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900">Stay in the loop</h4>
            <form className="mt-3 flex max-w-sm items-center gap-2">
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/5"
              />
              <button className="inline-flex shrink-0 items-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Shopify Starter. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-700">Privacy</a>
            <a href="#" className="hover:text-zinc-700">Terms</a>
            <a href="#" className="hover:text-zinc-700">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
