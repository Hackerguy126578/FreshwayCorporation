import Link from 'next/link'

export default function Links() {
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
        <h2>Useful Links</h2>
        <ul>
          <li><a href="https://www.freshway.com">Company Website</a></li>
          <li><a href="https://www.freshway.com/blog">Blog</a></li>
          <li><a href="https://www.freshway.com/contact">Contact Us</a></li>
        </ul>
      </main>
    </>
  )
}
