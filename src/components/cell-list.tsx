import { useSelector } from "react-redux";
import { Cell } from "../state/cell";

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
  useSelector<CellsState>(({ cells: { order, data } }) => {
    return order.map((id) => {
      return data[id];
    });
  });
  return <div>cell</div>;
};

export default CellList;
