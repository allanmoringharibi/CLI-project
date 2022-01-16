import { useSelector } from "react-redux";
import { Cell } from "../state/cell";
import CellListItem from "./cell-list-item";

interface CellsState {
  cells: {
    loading: boolean;
    error: string | null;
    order: string[];
    data: {
      [key: string]: Cell;
    };
  };
}

const CellList: React.FC = () => {
  const cells: any = useSelector<CellsState>(({ cells: { order, data } }) => {
    return order.map((id) => {
      return data[id];
    });
  });

  const renderedCells = cells.map((cell: any) => (
    <CellListItem key={cell.id} cell={cell} />
  ));

  return <div>{renderedCells}</div>;
};

export default CellList;
