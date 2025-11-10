import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleEasterEgg = () => {
      const sound = document.getElementById('dingSound')
      const msg = document.getElementById('secretMessage')

      if (sound && msg) {
        sound.play()
        msg.style.opacity = 1
        setTimeout(() => (msg.style.opacity = 0), 3000)
      }
    }

    const btn = document.getElementById('easterEgg')
    if (btn) btn.addEventListener('click', handleEasterEgg)

    // Cleanup when navigating between pages
    return () => {
      if (btn) btn.removeEventListener('click', handleEasterEgg)
    }
  }, [])

  return (
    <>
      <Component {...pageProps} />

      {/* Easter Egg Elements (Global) */}
      <audio id="dingSound" src="https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg"></audio>
      <div id="secretMessage">Welcome to Freshway — Freshness Awaits! 🌿</div>
    </>
  {[...Array(20)].map((_, i) => (
  <div
    key={i}
    className="snowflake"
    style={{
      left: `${Math.random() * 100}vw`,
      animationDuration: `${5 + Math.random() * 10}s`,
      fontSize: `${12 + Math.random() * 12}px`
    }}
  >
    ❄
  </div>
))}

  )
}

export default MyApp
