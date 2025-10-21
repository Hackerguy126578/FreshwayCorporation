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
    <a href="/">Home</a>
    <a href="/careers">Careers</a>
    <a href="/updates">Updates</a>
    <a href="/sneakpeak">Sneak Peek</a>
    <a href="/reviews">Reviews</a>
    <a href="/links">Links</a>
  </nav>

  {/* Easter Egg Button */}
  <button id="easterEgg" title="Click me 🛒">🛒</button>
</header>

{/* Hidden message */}
<div id="secretMessage">Welcome to Freshway — Freshness Awaits! 🌿</div>

<audio id="dingSound" src="https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg"></audio>

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
