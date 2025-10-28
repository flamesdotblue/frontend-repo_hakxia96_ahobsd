import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-24 top-[-10%] h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute right-[-10%] top-[30%] h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:gap-10 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-xl lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Built for Shopify
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Launch a beautiful Shopify store in minutes
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            A polished storefront template with modern UI, responsive layout, and reusable sections. Customize copy, imagery, and products to fit your brand.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#products"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 sm:w-auto"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex w-full items-center justify-center rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 sm:w-auto"
            >
              See Features
            </a>
          </div>
        </div>
        <div className="mt-12 grid flex-1 grid-cols-2 gap-4 sm:gap-6 lg:mt-0">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 shadow-sm ring-1 ring-zinc-100">
            <img
              src="https://images.unsplash.com/photo-1520975922284-9dcd8b2abf5d?q=80&w=1200&auto=format&fit=crop"
              alt="Featured product 1"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="grid grid-rows-2 gap-4 sm:gap-6">
            <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-zinc-100">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
                alt="Featured product 2"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-zinc-100">
              <img
                src="https://images.unsplash.com/photo-1518444080544-1db33d1bd5cd?q=80&w=1200&auto=format&fit=crop"
                alt="Featured product 3"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
