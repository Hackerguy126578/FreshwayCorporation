import Link from 'next/link'

export default function Links() {
  const links = [
    { name: "Status Page", url: "https://freshway-corporation.betteruptime.com/" },
    { name: "Main Game", url: "https://www.roblox.com/games/105961436004944/OPENING-CEREMONY-Freshway-Corporation" },
    { name: "Training Center", url: "https://www.roblox.com/games/122026789399591/Training-Center" },
    { name: "Application Center", url: "https://www.roblox.com/games/111969553355039/Freshway-PLC-Application-Center" },
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
        <h2>Useful Links</h2>
        <div>
          {links.map((link, index) => (
            <div key={index} className="card">
              <h3>{link.name}</h3>
              <a href={link.url} className="link-button" target="_blank" rel="noopener noreferrer">Go</a>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
