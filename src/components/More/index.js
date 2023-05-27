import {Component} from 'react'
import {Link} from 'react-router-dom'
import {ImHome3} from 'react-icons/im'

import InputEl from '../inputValues'

import './index.css'

const arrayList = [
  'a s d f j k l ;',
  'as df jk kl l;',
  'jf kd ls sl a; ;a',
  'asdf jkl;',
  'asdfjkl asjkl; asdfl; ;lkjdsa assllkkjjdd;; ddffjjkk;;llaass',
  'alalalala;a;a;a; akakakak ajajajaa slslslslsl dkdkdkdkdkkd fjfjfjfjfjfjf a;a;a;a;a;a;a ;s;s;s;s; ;d;d;d;d;d;d; ;f;f;fkl;lks',
]
class More extends Component {
  state = {
    List: arrayList,
    query: '',
    timeElapsedInSeconds: 0,
    timeLimit: 5,
    isTimerRunning: false,
    isClicked: false,
    isDisabled: true,
    randomWord: '',
  }

  onReset = () => {
    this.clearTimerInterval()

    this.setState({
      timeLimit: 5,
      timeElapsedInSeconds: 0,
      isTimerRunning: false,
      isClicked: false,
      randomWord: '',
      query: '',
      isDisabled: true,
    })
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  incrementedTimeElapseInSeconds = () => {
    const {timeLimit, timeElapsedInSeconds} = this.state
    const isTimerCompleted = timeElapsedInSeconds === timeLimit * 60
    if (isTimerCompleted) {
      this.clearTimerInterval()
      this.setState({isTimerRunning: false})
    } else {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }))
    }
  }

  forInterval = () => {
    const {timeLimit, timeElapsedInSeconds, isTimerRunning} = this.state

    const isTimerCompleted = timeElapsedInSeconds === timeLimit * 60
    if (isTimerCompleted) {
      this.setState({timeElapsedInSeconds: 0})
    }
    if (isTimerRunning) {
      this.clearTimerInterval()
    } else {
      this.intervalId = setInterval(this.incrementedTimeElapseInSeconds, 1000)
    }
    this.setState(prevState => ({
      isTimerRunning: !prevState.isTimerRunning,
    }))
  }

  onStartAndPause = () => {
    const {List} = this.state
    // this.clearTimerInterval();
    this.forInterval()

    const randomElement = Math.floor(Math.random() * List.length)
    const randomOne = List[randomElement]

    this.setState(prevState => ({
      timeLimit: 5,
      timeElapsedInSeconds: 0,
      isClicked: !prevState.isClicked,
      isDisabled: false,
      query: '',
      randomWord: randomOne,
    })) // changed
  }

  onDone = () => {
    this.clearTimerInterval()

    this.setState({
      isTimerRunning: false,
      isClicked: false,
      isDisabled: true,
    })
  }

  getElapsedTimer = () => {
    const {timeLimit, timeElapsedInSeconds} = this.state
    const timeRemainingInSeconds = timeLimit * 60 - timeElapsedInSeconds
    const minutes = Math.floor(timeRemainingInSeconds / 60)
    const seconds = Math.floor(timeRemainingInSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {
      query,

      isDisabled,
      isClicked,
      randomWord,

      timeElapsedInSeconds,
      timeLimit,
    } = this.state
    //  console.log(timeElapsedInSeconds);

    return (
      <div className="container">
        <div className="inner-container">
          <p className="forTimer"> {this.getElapsedTimer()}</p>

          <h1 className="forHeader">{randomWord}</h1>
          <div className="forrow">
            <div>
              <textarea
                className="forTextArea"
                rows="5"
                columns="9"
                type="text"
                value={query}
                disabled={isDisabled}
                onChange={event => {
                  this.setState({query: event.target.value})
                }}
              />

              <div>
                {!isClicked && (
                  <button
                    type="button"
                    onClick={this.onStartAndPause}
                    className="forButton"
                  >
                    start
                  </button>
                )}
                {isClicked && (
                  <button
                    onClick={this.onDone}
                    className="forButton"
                    type="button"
                  >
                    done
                  </button>
                )}
                <button
                  type="button"
                  onClick={this.onReset}
                  className="forButton"
                >
                  reset
                </button>
              </div>
            </div>

            {!isClicked && (
              <InputEl
                randomWord={randomWord}
                inputValue={query}
                timeElapsedInSeconds={timeElapsedInSeconds}
                isClicked={isClicked}
                timeLimit={timeLimit}
              />
            )}
          </div>

          <Link to="/" className="forLink">
            <div className="forDivHome">
              <ImHome3 className="forHome" />
              <h1 className="fortext">Home</h1>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

//

export default More
