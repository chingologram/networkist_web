import Link from 'next/link'; 

export function RootLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4">
      <div id="overlay-1" className="bg-overlay"></div>
      <div id="overlay-2" className="bg-overlay"></div>
      <div id="overlay-3" className="bg-overlay"></div>
      <div id="overlay-4" className="bg-overlay"></div>
      <div id="overlay-5" className="bg-overlay"></div>
      <div id="overlay-6" className="bg-overlay"></div>
      <div className="h-20 z-20 w-full items-center justify-between font-mono text-sm lg:flex">
          <Link className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 hover:underline"
          href="/"
          rel="noopener noreferrer" >
          <span className="font-bold">Networkismo</span>
          </Link>
          <nav className="flex flex-row gap-8 w-full justify-end">
            <Link className="hover:underline" href="https://correos.filosofiadelfuturo.org/">Blog</Link>
            <Link className="hover:underline" href="/principios/1">Principios del networkismo</Link>
            <Link className="hover:underline" href="/quienes-somos">¿Quiénes somos?</Link>
          </nav>
        </div>
        <section className="z-10 flex flex-col justify-center grow">
        {children}
        </section>
      </main>
  )
}
