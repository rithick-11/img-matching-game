const NavBar = ({score, time}) => (
  <nav className="bg-[#2c0e3a]">
    <div className="w-[90vw] md:w-[70vw] mx-auto text-white flex justify-between items-center py-4 px-4">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="h-[2rem]"
      />
      <ul className="flex items-center gap-3">
        <li>
          <p>
            Score:{' '}
            <span className="text-xl text-[#fec653] font-bold">{score}</span>
          </p>
        </li>
        <li className="flex items-center gap-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="h-[1rem]"
          />
          <p>
            <span className="text-xl text-[#fec653] font-bold">{time} </span>
            sec
          </p>
        </li>
      </ul>
    </div>
  </nav>
)

export default NavBar
