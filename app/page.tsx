'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Bike,
  BriefcaseBusiness,
  ChevronDown,
  CircleUserRound,
  Clock3,
  Heart,
  Menu,
  Package,
  Search,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Wrench,
  X,
  Zap,
} from 'lucide-react'

const categories = [
  { name: 'Grocery & Ration', icon: '🛒', tone: 'bg-amber-100' },
  { name: 'Fresh Produce', icon: '🥬', tone: 'bg-emerald-100' },
  { name: 'Fashion & Clothing', icon: '👗', tone: 'bg-pink-100' },
  { name: 'Electronics', icon: '📱', tone: 'bg-blue-100' },
  { name: 'Home Essentials', icon: '🏠', tone: 'bg-orange-100' },
  { name: 'Beauty & Skincare', icon: '✨', tone: 'bg-purple-100' },
  { name: 'Baby & Toys', icon: '🧸', tone: 'bg-sky-100' },
  { name: 'Wholesale Deals', icon: '📦', tone: 'bg-yellow-100' },
]

const products = [
  { title: 'Family Grocery Starter Pack', shop: 'Al-Madina Mart', price: 'PKR 3,850', old: 'PKR 4,220', badge: 'Best seller', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80' },
  { title: 'Premium Lawn 3-Piece Suit', shop: 'Naya Libas', price: 'PKR 2,499', old: 'PKR 3,200', badge: '20% off', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80' },
  { title: 'Everyday Kitchen Essentials', shop: 'Homewise Store', price: 'PKR 1,899', old: '', badge: 'New arrival', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80' },
  { title: 'Wireless Earbuds Pro', shop: 'Tech Stop 11-A', price: 'PKR 4,999', old: 'PKR 6,500', badge: 'Top rated', image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=80' },
]

const services = [
  { title: 'Electricians', detail: 'Reliable help, right around the corner', icon: Zap, color: 'bg-amber-100 text-amber-700' },
  { title: 'AC & Refrigerator', detail: 'Fast home visits by verified pros', icon: Wrench, color: 'bg-cyan-100 text-cyan-700' },
  { title: 'Beauty at Home', detail: 'Makeup, mehndi & skincare', icon: Sparkles, color: 'bg-rose-100 text-rose-700' },
  { title: 'Design & Branding', detail: 'Local talent for growing businesses', icon: BriefcaseBusiness, color: 'bg-violet-100 text-violet-700' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [sector, setSector] = useState('North Karachi')
  const [cartCount, setCartCount] = useState(0)
  const [saved, setSaved] = useState<number[]>([])

  const filteredProducts = useMemo(() => products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()) || product.shop.toLowerCase().includes(query.toLowerCase())), [query])

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f7f8fa] text-[#102238]">
      <div className="bg-[#102238] px-4 py-2 text-center text-xs font-medium text-slate-200">Free delivery on orders above PKR 2,500 · Serving North Karachi and nearby areas</div>
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
          <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label="North Marketplace home">
            <span className="grid size-10 place-items-center rounded-xl bg-[#102238] text-[#f6bf45] shadow-sm"><span className="text-xl font-black">N</span></span>
            <span><span className="block text-lg font-extrabold tracking-tight text-[#102238]">North<span className="text-[#d99e28]">.</span></span><span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:block">Marketplace</span></span>
          </a>
          <div className="hidden max-w-xl flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 md:flex">
            <Search className="size-5 text-slate-400" aria-hidden="true" /><input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Search products, shops or services..." aria-label="Search products, shops or services" /><kbd className="hidden rounded border border-slate-200 bg-white px-2 py-0.5 text-[10px] text-slate-400 lg:block">⌘ K</kbd>
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 sm:flex"><CircleUserRound className="size-5" /> Account</button>
            <button className="relative grid size-10 place-items-center rounded-lg text-slate-700 hover:bg-slate-50" aria-label="Shopping cart"><ShoppingCart className="size-5" />{cartCount > 0 && <span className="absolute right-0 top-0 grid size-4 place-items-center rounded-full bg-[#d99e28] text-[10px] font-bold text-white">{cartCount}</span>}</button>
            <button className="grid size-10 place-items-center rounded-lg border border-slate-200 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation">{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
          </div>
        </div>
        <div className="px-4 pb-3 md:hidden">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
            <Search className="size-5 shrink-0 text-slate-400" aria-hidden="true" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Search products, shops or services..." aria-label="Search products, shops or services" />
          </div>
        </div>
        <div id="mobile-navigation" className={`${menuOpen ? 'flex' : 'hidden'} flex-col gap-4 border-t border-slate-100 px-4 py-4 md:hidden`}><a href="#shop" className="text-sm font-semibold">Shop products</a><a href="#services" className="text-sm font-semibold">Book a service</a><a href="#sell" className="text-sm font-semibold">Sell with us</a></div>
        <nav className="mx-auto hidden max-w-7xl items-center justify-between px-4 pb-3 lg:px-8 md:flex"><div className="flex items-center gap-7 text-sm font-semibold text-slate-600"><a href="#shop" className="text-[#102238]">Shop</a><a href="#categories">Categories</a><a href="#services">Home services</a><a href="#wholesale">Wholesale</a><a href="#sell">Sell on North</a></div><button className="flex items-center gap-2 text-sm text-slate-600"><Bike className="size-4 text-[#d99e28]" /> Delivering to <span className="font-bold text-[#102238]">{sector}</span><ChevronDown className="size-4" /></button></nav>
      </header>

      <section id="top" className="relative overflow-hidden bg-[#102238]">
        <div className="absolute -right-20 -top-24 size-80 rounded-full bg-[#d99e28]/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-20">
          <div className="relative z-10"><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f6bf45]/30 bg-[#f6bf45]/10 px-3 py-1.5 text-xs font-bold text-[#f6cf73]"><Sparkles className="size-3.5" /> Your neighborhood, better connected</div><h1 className="max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">Everything North Karachi <span className="text-[#f6bf45]">needs.</span></h1><p className="mt-5 max-w-lg text-base leading-7 text-slate-300">Shop from trusted local sellers, discover everyday deals, and book verified home professionals — all in one place.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#shop" className="inline-flex items-center gap-2 rounded-lg bg-[#f6bf45] px-5 py-3 text-sm font-extrabold text-[#102238] shadow-lg shadow-[#f6bf45]/10 hover:bg-[#ffd979]">Start shopping <ArrowRight className="size-4" /></a><a href="#services" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">Explore services</a></div><div className="mt-10 flex items-center gap-6 text-xs text-slate-400"><span className="flex items-center gap-2"><ShieldCheck className="size-4 text-[#f6bf45]" /> Verified local sellers</span><span className="flex items-center gap-2"><Package className="size-4 text-[#f6bf45]" /> COD available</span></div></div>
          <div className="relative hidden h-80 lg:block"><div className="absolute right-10 top-2 h-64 w-80 rotate-3 rounded-3xl bg-[#f6bf45] p-4 shadow-2xl"><div className="h-full overflow-hidden rounded-2xl bg-slate-100"><img src="/north-marketplace-hero.png" alt="Fresh groceries and local market products" className="size-full object-cover" /></div></div><div className="absolute bottom-0 left-6 rounded-2xl bg-white p-4 shadow-xl"><div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl bg-emerald-100 text-xl">🥬</span><div><p className="text-xs font-bold text-slate-400">Fresh today</p><p className="font-extrabold text-[#102238]">Local produce</p></div><BadgeCheck className="size-5 text-emerald-500" /></div></div></div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-4 py-10 lg:px-8"><div className="mb-6 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c08a1f]">Explore the marketplace</p><h2 className="mt-1 text-2xl font-black tracking-tight">Shop by category</h2></div><a href="#shop" className="hidden items-center gap-1 text-sm font-bold text-[#b27d15] sm:flex">View all <ArrowRight className="size-4" /></a></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">{categories.map((category) => <button key={category.name} className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-center transition hover:-translate-y-1 hover:border-[#f0c969] hover:shadow-md"><span className={`grid size-14 place-items-center rounded-2xl text-2xl ${category.tone}`}>{category.icon}</span><span className="text-xs font-bold leading-4 text-slate-700">{category.name}</span></button>)}</div></section>

      <section id="shop" className="bg-white py-12"><div className="mx-auto max-w-7xl px-4 lg:px-8"><div className="mb-7 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c08a1f]">Local favorites</p><h2 className="mt-1 text-2xl font-black tracking-tight">Popular near you</h2></div><a href="#shop" className="flex items-center gap-1 text-sm font-bold text-[#b27d15]">See all products <ArrowRight className="size-4" /></a></div><div className="mb-6 flex items-center gap-2 overflow-x-auto pb-1 text-sm"><select value={sector} onChange={(event) => setSector(event.target.value)} className="shrink-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 font-semibold outline-none"><option>North Karachi</option><option>Sector 11-A</option><option>Sector 11-B</option><option>Sector 11-C</option><option>Buffer Zone</option><option>Nagan Chowrangi</option></select><button className="shrink-0 rounded-lg bg-[#102238] px-3 py-2 font-semibold text-white">All products</button><button className="shrink-0 rounded-lg border border-slate-200 px-3 py-2 font-semibold text-slate-600">Under PKR 2,000</button><button className="shrink-0 rounded-lg border border-slate-200 px-3 py-2 font-semibold text-slate-600">Top rated</button></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{filteredProducts.map((product, index) => <article key={product.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"><div className="relative aspect-[1.05] overflow-hidden bg-slate-100"><img src={product.image} alt={product.title} className="size-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-[#a87614]">{product.badge}</span><button onClick={() => setSaved((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index])} className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white/90 text-slate-500" aria-label={`Save ${product.title}`}><Heart className={`size-4 ${saved.includes(index) ? 'fill-rose-500 text-rose-500' : ''}`} /></button></div><div className="p-4"><p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{product.shop}</p><h3 className="mt-1 min-h-10 text-sm font-extrabold leading-5 text-[#102238]">{product.title}</h3><div className="mt-2 flex items-center gap-1 text-xs text-amber-500">★★★★★ <span className="text-slate-400">4.8 (24)</span></div><div className="mt-3 flex items-end justify-between"><div><span className="text-base font-black text-[#102238]">{product.price}</span>{product.old && <span className="ml-2 text-xs text-slate-400 line-through">{product.old}</span>}</div><button onClick={() => setCartCount((count) => count + 1)} className="grid size-9 place-items-center rounded-lg bg-[#102238] text-white hover:bg-[#1c3857]" aria-label={`Add ${product.title} to cart`}><ShoppingBag className="size-4" /></button></div></div></article>)}</div>{filteredProducts.length === 0 && <p className="rounded-xl bg-slate-50 p-8 text-center text-sm text-slate-500">No products found. Try another search.</p>}</div></section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-12 lg:px-8"><div className="mb-7 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c08a1f]">Help at home</p><h2 className="mt-1 text-2xl font-black tracking-tight">Trusted local services</h2></div><a href="#services" className="flex items-center gap-1 text-sm font-bold text-[#b27d15]">Browse all <ArrowRight className="size-4" /></a></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map(({ title, detail, icon: Icon, color }) => <button key={title} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"><span className={`grid size-12 shrink-0 place-items-center rounded-xl ${color}`}><Icon className="size-5" /></span><span><span className="block font-extrabold">{title}</span><span className="mt-1 block text-xs leading-4 text-slate-500">{detail}</span></span><ArrowRight className="ml-auto size-4 text-slate-300" /></button>)}</div></section>

      <section id="sell" className="border-y border-[#23405c] bg-[#102238]"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8"><div><div className="mb-3 flex items-center gap-2 text-[#f6bf45]"><Store className="size-5" /><span className="text-sm font-bold">Grow with North</span></div><h2 className="max-w-2xl text-2xl font-black tracking-tight text-white sm:text-3xl">Have a shop or skill to share?</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">Join our verified community of local sellers and service providers. Zero commission, real neighborhood customers.</p></div><div className="flex flex-wrap gap-3"><button className="rounded-lg bg-[#f6bf45] px-5 py-3 text-sm font-extrabold text-[#102238]">Register as a seller</button><button className="rounded-lg border border-white/20 px-5 py-3 text-sm font-bold text-white">Offer a service</button></div></div></section>

      <footer className="bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div><p className="font-extrabold text-[#102238]">North<span className="text-[#d99e28]">.</span> Marketplace</p><p className="mt-1 text-xs">Made for North Karachi, by North Karachi.</p></div><div className="flex flex-wrap gap-5 text-xs font-semibold"><a href="#shop">Shop</a><a href="#services">Services</a><a href="#sell">Become a seller</a><a href="#top">Help center</a></div><p className="text-xs">© 2026 North Marketplace</p></div></footer>
    </main>
  )
}
