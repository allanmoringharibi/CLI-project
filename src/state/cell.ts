export type CellTypyes = "code" | "text";

export interface Cell {
  id: string;
  type: CellTypyes;
  content: string;
}
