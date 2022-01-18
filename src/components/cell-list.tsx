import { useSelector } from "react-redux";
import { Fragment } from "react";
import { Cell } from "../state/cell";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";

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
    <Fragment key={cell.id}>
      <AddCell nextCellId={cell.id} />
      <CellListItem key={cell.id} cell={cell} />
    </Fragment>
  ));

  return (
    <div>
      {renderedCells}
      <AddCell nextCellId={null} />
    </div>
  );
};

export default CellList;
