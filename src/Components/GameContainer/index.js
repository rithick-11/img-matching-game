import {Component} from 'react'
import NavBar from '../NavBar'
import NavTab from '../NavTab'
import ImgList from '../ImgList'
import ScoreCard from '../ScoreCard'
import './index.css'

class GameContainer extends Component {
  constructor(props) {
    super(props)
    const {tabsList, imagesList} = props
    this.state = {
      score: 0,
      time: 60,
      gameState: true,
      category: tabsList[0].tabId,
      randomImg: imagesList[0],
      unSelectedImg: imagesList,
    }
  }

  componentDidMount() {
    this.timerId = setInterval(this.tickTime, 1000)
  }

  changeTab = id => {
    this.setState({category: id})
  }

  toCheakImg = async id => {
    const {randomImg} = this.state
    if (randomImg.id === id) {
      await this.setState(pre => ({
        unSelectedImg: pre.unSelectedImg.filter(each => each.id !== id),
        score: pre.score + 1,
      }))
      const {unSelectedImg} = this.state
      if (unSelectedImg.length !== 1) {
        this.setState({
          randomImg:
            unSelectedImg[Math.floor(Math.random() * unSelectedImg.length)],
        })
      }
    } else {
      clearInterval(this.timerId)
      this.setState({gameState: false})
    }
  }

  tickTime = () => {
    const {time} = this.state
    if (time === 0) {
      clearInterval(this.timerId)
      this.setState({gameState: false})
    } else {
      this.setState({time: time - 1})
    }
  }

  restartGame = () => {
    const {tabsList, imagesList} = this.props
    this.setState({
      score: 0,
      time: 60,
      gameState: true,
      category: tabsList[0].tabId,
      randomImg: imagesList[Math.floor(Math.random() * imagesList.length)],
      unSelectedImg: imagesList,
    })
    this.timerId = setInterval(this.tickTime, 1000)
  }

  render() {
    const {score, time, gameState, randomImg, category} = this.state
    const {imagesList, tabsList} = this.props
    return (
      <section className="bg-container">
        <NavBar score={score} time={time} />
        <div className="w-[90vw] md:w-[70vw] mx-auto ">
          {gameState && (
            <div className="py-6">
              <img
                src={randomImg.imageUrl}
                alt="match"
                className="mx-auto md:h-[50vh]"
              />
              <NavTab
                category={category}
                tabsList={tabsList}
                changeTab={this.changeTab}
              />
              <ImgList
                category={category}
                imagesList={imagesList}
                toCheakImg={this.toCheakImg}
              />
            </div>
          )}
          {!gameState && (
            <ScoreCard score={score} restartGame={this.restartGame} />
          )}
        </div>
      </section>
    )
  }
}

export default GameContainer
