import Link from 'next/link'

export default function SneakPeak() {
  return (
    <>
      <header>
        <h1>Freshway Corporation</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/updates">Updates</Link>
          <Link href="/sneakpeak">Sneak Peek</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/links">Links</Link>
        </nav>
      </header>
      <main>
        <h2>Sneak Peek</h2>
        <p>Get a preview of what’s coming soon at Freshway!</p>
      </main>
    </>
  )
}
