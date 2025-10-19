import Link from 'next/link'

export default function Links() {
  const links = [
    { name: "Site", url: "https://sites.google.com/view/freshwayroblox-corporation/homepage" },
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
