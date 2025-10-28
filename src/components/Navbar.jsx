import React from 'react';
import { ShoppingCart, Store, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm">
            <Store className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Shopify Starter</span>
          <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
            <Sparkles className="h-3.5 w-3.5" />
            Template
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 md:flex">
          <a href="#features" className="hover:text-black">Features</a>
          <a href="#products" className="hover:text-black">Products</a>
          <a href="#pricing" className="hover:text-black">Pricing</a>
          <a href="#faq" className="hover:text-black">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-semibold text-zinc-800 shadow-sm transition-colors hover:bg-zinc-50">
            Sign in
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700">
            <ShoppingCart className="h-4 w-4" />
            Start Free Trial
          </button>
        </div>
      </div>
    </header>
  );
}
