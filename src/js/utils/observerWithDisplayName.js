import { observer } from "mobx-react"

export default function observerWithDisplayName(Component, displayName) {
  const observerComponent = observer(Component)
  observerComponent.displayName = displayName
  return observerComponent
}
