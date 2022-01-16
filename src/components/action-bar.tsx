import { useActions } from "../hooks/use-actions";

interface ActionBarPtops {
  id: string;
}

const ActionBar: React.FC<ActionBarPtops> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div>
      <button onClick={() => moveCell(id, "up")}>Up</button>
      <button onClick={() => moveCell(id, "down")}>Down</button>
      <button onClick={() => deleteCell(id)}>Delete</button>
    </div>
  );
};

export default ActionBar;
