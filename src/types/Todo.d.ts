export type SelectableType = "note" | "memo"

export type TodoItemType = {
  id: string 
  text: string
  created: Date
  type: SelectableType
}