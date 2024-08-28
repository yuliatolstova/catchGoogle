import { GridComponent } from "./Grid/Grid.component.js"
import { ResultPanelComponent } from "./ResultPanel/ResultPanel.component.js"
import { SettingsComponent } from "./Settings/Settings.component.js"

export function AppComponent() {
  const element = document.createElement('div')

  render(element)

  return {element}
}

async function render(element) {
  const settingsComponent= SettingsComponent()
  const resultPanelComponent = ResultPanelComponent()
  const girdComponent = GridComponent()

  element.append(
    settingsComponent.element,
    resultPanelComponent.element,
    girdComponent.element
  )
}