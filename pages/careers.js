import Link from 'next/link'

export default function Careers() {
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
        <h2>Careers at Freshway Corporation</h2>
        <p>Join our team and be part of the future of innovation!</p>
        <button>Apply Now</button>
      </main>
    </>
  )
}
