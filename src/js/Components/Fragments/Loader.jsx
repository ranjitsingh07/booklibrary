import React from "react"

const Loader = ({showOrHide}) => {
  return (
    <div id = "main-loader" className="overlay" hidden={!showOrHide}>
      <div className="overlay-content">
        <div className="modal-content">
          <div className="ball-container">
            <div className="wBall" id="wBall_1">
              <div className="wInnerBall"></div>
            </div>
            <div className="wBall" id="wBall_2">
              <div className="wInnerBall"></div>
            </div>
            <div className="wBall" id="wBall_3">
              <div className="wInnerBall"></div>
            </div>
            <div className="wBall" id="wBall_4">
              <div className="wInnerBall"></div>
            </div>
            <div className="wBall" id="wBall_5">
              <div className="wInnerBall"></div>
            </div>
          </div>
        </div>
      </div>
     </div>
  )
}

export default Loader
