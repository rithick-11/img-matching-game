import './index.css'

const ScoreCard = ({score, restartGame}) => (
  <div className="score-card-bg mx-auto flex flex-col gap-3 justify-center items-center text-white">
    <img
      src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      alt="trophy"
      className="h-[40%]"
    />
    <p className="text-xl">YOUR SCORE</p>
    <p className="text-2xl">{score}</p>
    <button
      type="button"
      className="flex gap bg-[#cf60c8] px-2 py-1 rounded-md"
      onClick={() => {
        restartGame()
      }}
    >
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
        alt="reset"
      />
      <p>PLAY AGAIN</p>
    </button>
  </div>
)

export default ScoreCard
