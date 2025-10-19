import Link from 'next/link'

export default function Home() {
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
        <h2>Welcome to Freshway Corporation!</h2>
        <p>Our opening ceremony is on <strong>Tuesday</strong>.</p>
        <p>Explore our website to learn more about us!</p>
      </main>
    </>
  )
}
