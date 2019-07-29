import React from "react"

const Notification = ({showOrHide, classNames, message}) => {
  return (
    <div hidden={!showOrHide}>
      <div className={classNames}>{message}</div>
    </div>
  )
}

export default Notification