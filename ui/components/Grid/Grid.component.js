import { getGridSize } from "../../../core/state-manager.js";
import { CellComponent } from "./Cell/Cell.component.js";

export function GridComponent() {
  const element = document.createElement('table')
  element.classList.add('grid')
  
  render(element)

  return {element}
}

async function render(element) {
  const gridSize = await getGridSize()

  for (let y = 0; y < gridSize.rowsCount; y++) {
    const rowElement = document.createElement('tr')
    
    for (let x = 0; x < gridSize.columnsCount; x++) {
      const cellElement = CellComponent(x, y)
      rowElement.append(cellElement.element)
    }
    
    element.append(rowElement)
  }
}
