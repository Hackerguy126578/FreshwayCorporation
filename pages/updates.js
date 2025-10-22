import Link from 'next/link'

export default function Updates() {
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
        <h2>Latest Updates</h2>
        <div className="modern-grid">
          
          {/* Example Update Card */}
          <div className="modern-card">
            <h3>🎃 Halloween Update</h3>
            <p>
              <strong>What’s New:</strong><br />
              • Costa Coffee added ☕<br />
              • More realistic trees <br />
              • Outer detail improvements <br />
              • Spooky Halloween vibes 👻<br />
              • Pumpkins (not for sale )<br />
              • Working drinks dispenser <br />
              • Various bug fixes!
            </p>
            <p><em>Released: October 2025</em></p>
          </div>

          {/* Add more cards below for future updates */}
          {/* 
          <div className="modern-card">
            <h3>Next Update Title</h3>
            <p>Short description here...</p>
            <p><em>Released: Month Year</em></p>
          </div>
          */}
          
        </div>
      </main>
    </>
  )
}

