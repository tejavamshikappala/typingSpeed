import './index.css'

const InputEl = props => {
  const {inputValue, randomWord, timeElapsedInSeconds, timeLimit} = props

  const totalStr = inputValue
  const arraySplitted = totalStr.split(' ')
  const randomSplit = randomWord.split(' ')
  const count = arraySplitted.length

  const TotalTime = timeLimit * 60 - (timeLimit * 60 - timeElapsedInSeconds)

  const minutes = Math.floor(TotalTime / 60)

  const sec = Math.floor(TotalTime % 60)
  let Time

  if (TotalTime >= 60) {
    Time = `${minutes}Min : ${sec} Sec.`
  } else {
    Time = `${sec} Sec.`
  }

  const Speed = Math.round((count / TotalTime) * 60)

  const comparingWord = (a, b) => {
    const words1 = a.split(' ')

    const words2 = b.split(' ')

    let cnt = 0

    words1.forEach((item, index) => {
      if (item === words2[index]) {
        cnt += 1
      }
    })
    return cnt
  }

  const comparing = comparingWord(randomWord, totalStr)
  const accuracyPer = Math.round((comparing / count) * 100)
  let auth
  if (TotalTime > 0) {
    auth = (
      <ul className="forInp">
        You typed total:
        <li className="for-List">
          CorrectWords:
          <span className="for-speed">
            {comparing} correct out of {randomSplit.length} words.
          </span>
        </li>
        <li className="for-List">
          Speed:
          <span className="for-speed"> {Speed}</span> <br />
        </li>
        <li className="for-List">
          Accuracy:
          <span className="for-speed">{accuracyPer}%</span>
        </li>
        <li className="for-List">
          InTime: <span className="for-speed ">{Time}</span>
        </li>
      </ul>
    )
  } else {
    auth = ''
  }
  return auth
}
export default InputEl
