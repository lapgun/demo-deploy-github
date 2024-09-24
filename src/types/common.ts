export interface optionsType {
  title: string,
  value: string
}

export interface ListType {
  type: string,
  contents: ListContentType[]
}


export interface CellType {
  type: string,
  text: string,
  className?: string,
  subtext?: string,
  options?: optionsType[]
}

export interface BlockContentType {
  type: string,
  left?: CellType[],
  right?: CellType[]
}

export interface BlockType {
  type: string,
  text?: string,
  contents: BlockContentType[]
}

export interface ListContentType {
  type: string,
  contents: BlockType[]
}
