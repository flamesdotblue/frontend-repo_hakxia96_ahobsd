import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Minimal Leather Sneakers',
    price: 129,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Everyday Tote Bag',
    price: 79,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Classic Black Tee',
    price: 39,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1503342452485-86ff0a86589a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Matte Ceramic Mug',
    price: 24,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Best sellers
            </h2>
            <p className="mt-1 text-zinc-600">Curated products your customers will love.</p>
          </div>
          <a href="#" className="hidden text-sm font-semibold text-emerald-700 hover:text-emerald-800 sm:block">
            View all
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="relative aspect-square overflow-hidden bg-zinc-50">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="truncate text-sm font-semibold text-zinc-900">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.round(p.rating) ? 'fill-current' : 'fill-transparent stroke-current'}`}
                      />
                    ))}
                    <span className="ml-1 text-xs text-zinc-500">{p.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-sm font-bold text-zinc-900">${p.price}</p>
                </div>
                <button className="mt-4 w-full rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-800">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
