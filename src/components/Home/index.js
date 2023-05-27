import {Link} from 'react-router-dom'

import './index.css'

const Home = () => (
  <div className="for-background">
    <div className="over-image-container">
      <div>
        <h1 className="for-header">Typing Tutorial</h1>
        <div>
          <Link to="/more">
            <button type="button" className="for-button">
              Start
            </button>
          </Link>
        </div>
      </div>
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1684917517/kisspng-computer-keyboard-typing-clip-art-typing-pictures-5a8484311c8939.3238695515186340331169_vtsrj9.png"
          className="for-image"
          alt="avatar"
        />
      </div>
    </div>
  </div>
)

export default Home
