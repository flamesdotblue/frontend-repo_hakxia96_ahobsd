import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <section id="features" className="bg-zinc-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Everything you need to sell online</h2>
              <p className="mt-2 text-zinc-600">Prebuilt sections help you move fast—swap content, tweak colors, and go live.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard title="Section-based layout" desc="Mix and match hero banners, grids, testimonials, and more." />
              <FeatureCard title="Responsive out of the box" desc="Looks great on mobile, tablet, and desktop without extra work." />
              <FeatureCard title="Optimized performance" desc="Clean markup and modern tooling keep things fast and accessible." />
            </div>
          </div>
        </section>
        <ProductGrid />
        <section id="pricing" className="bg-zinc-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <PricingCard name="Starter" price="$0" desc="Perfect for getting started" features={["3 sections", "Basic styles", "Email support"]} cta="Get started" />
              <PricingCard highlight name="Pro" price="$49" desc="For growing stores" features={["All sections", "Advanced styles", "Priority support"]} cta="Buy template" />
              <PricingCard name="Plus" price="$99" desc="For serious brands" features={["Everything in Pro", "Custom blocks", "Design review"]} cta="Contact sales" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{desc}</p>
    </div>
  );
}

function PricingCard({ name, price, desc, features, cta, highlight }) {
  return (
    <div className={`flex flex-col justify-between rounded-2xl border ${highlight ? 'border-emerald-300 bg-emerald-50' : 'border-zinc-200 bg-white'} p-6 shadow-sm`}>
      <div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-lg font-semibold text-zinc-900">{name}</h3>
          {highlight && (
            <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-semibold text-white">Most popular</span>
          )}
        </div>
        <p className="mt-1 text-sm text-zinc-600">{desc}</p>
        <p className="mt-4 text-3xl font-extrabold">{price}
          <span className="ml-1 align-middle text-sm font-medium text-zinc-500">/ one-time</span>
        </p>
        <ul className="mt-4 space-y-2 text-sm text-zinc-700">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-600" />
              {f}
            </li>
          ))}
        </ul>
      </div>
      <button className={`mt-6 w-full rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition ${highlight ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}>
        {cta}
      </button>
    </div>
  );
}

export default App;
