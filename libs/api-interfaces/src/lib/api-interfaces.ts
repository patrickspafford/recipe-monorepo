export interface Message {
  message: string;
}
type RecipeItem = string
export interface Recipe {
  [key: string]: RecipeItem[]
}
