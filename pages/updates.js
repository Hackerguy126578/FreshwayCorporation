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
        <p>UPDATE!
Whats new?
- Costa Coffee
- More realistic trees
- Outer detail.
- More spooky vibes.
- Pumkins (We wont sell them.
-Drinks - Working
- Fixed bugs and more!</p>
      </main>
    </>
  )
}
