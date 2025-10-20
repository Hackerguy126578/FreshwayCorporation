import Link from 'next/link'

export default function Careers() {
  const apps = [
    { name: "Human Resources Application", url: "https://forms.gle/PvLkjwgckNBJfjGRA" },
    { name: "Public Relations Application", url: "https://forms.gle/q8puK6XYe5UxTbp17" },
    { name: "Developer Application", url: "https://forms.gle/qWoVNzAQirPsbqtr6" }
  ];

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
        <h2>Join Freshway Corporation</h2>
        <p>Be part of our dedicated team and help us bring the best virtual shopping experience to Roblox!</p>

        <div className="modern-grid">
          {apps.map((app, index) => (
            <div key={index} className="modern-card">
              <h3>{app.name}</h3>
              <a 
                href={app.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="link-button"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
