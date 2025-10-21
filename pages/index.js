import Link from 'next/link'

export default function Home() {
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
        <h2>Welcome to FreshWay PLC</h2>

        <a 
          href="https://www.roblox.com/games/105961436004944/OPENING-CEREMONY-Freshway-Corporation" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="link-button"
        >
          🎮 Play Our Main Game
        </a>

        <div className="modern-grid">

          <div className="modern-card">
            <h3>About Us</h3>
            <p>
              FreshWay PLC is your premier Roblox supermarket, dedicated to providing a fresh, convenient,
              and enjoyable shopping experience for all players. Our store offers a wide variety of products,
              from everyday essentials to specialty items, ensuring that every customer can find exactly what they need.
            </p>
          </div>

          <div className="modern-card">
            <h3>Our Mission</h3>
            <p>Our mission is simple: to provide the best virtual shopping experience in Roblox. We strive to:</p>
            <ul>
              <li>Offer a wide selection of products to meet every customer’s needs.</li>
              <li>Maintain a friendly, professional, and safe environment.</li>
              <li>Continuously improve our services and the shopping experience.</li>
              <li>Be a trusted and enjoyable destination for players of all ages.</li>
            </ul>
          </div>

          <div className="modern-card">
            <h3>Why Choose FreshWay PLC?</h3>
            <ul>
              <li><strong>Variety & Quality:</strong> We stock a wide range of items to suit every taste and need.</li>
              <li><strong>Customer-Focused:</strong> Every visitor is treated with respect and care.</li>
              <li><strong>Interactive Experience:</strong> Explore the supermarket, interact with staff, and enjoy a fun and realistic shopping experience.</li>
              <li><strong>Safe & Professional:</strong> Our environment is designed to be safe, welcoming, and enjoyable for everyone.</li>
            </ul>
          </div>

          <div className="modern-card">
            <h3>Join Us Today</h3>
            <p>
              Whether you’re shopping for groceries, exploring new products, or just enjoying a virtual experience with friends,
              FreshWay PLC is your go-to Roblox supermarket.
            </p>
            <Link href="/careers" className="link-button">Apply Now</Link>
          </div>

        </div>
      </main>
    </>
  )
}
