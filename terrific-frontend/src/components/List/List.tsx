import { Chore, ListProps } from "../../interfaces/chores";
import "./List.css";

export default function List({ 
    chores,
    selected,
    deleteChore, 
    updateChore,
    setSelected,
    setChoreName,
}: ListProps) {
    return (
        <table className="task-table">
            {
                chores
                    .filter((chore: Chore) => chore._id !== selected?._id)
                    .map((chore: Chore) => (
                        <tr className="task">
                            <td>
                                <input
                                id={`choreCheckbox${chore?._id}`}
                                type="checkbox"
                                checked={chore?.done}
                                onChange={() => updateChore({
                                    "_id": chore?._id,
                                    "name": chore?.name,
                                    "done": !chore?.done
                                })}
                                />
                            </td>
                            <td className={`${chore?.done ? "completed-task" : "pending-task"}`}>{chore?.name}</td>

                            <td>
                                <button className={"delete-btn"} onClick={() => deleteChore(chore?._id)}>Delete</button>
                            </td>
                            <td>
                                <button 
                                    className={"edit-btn"}
                                    onClick={() => {
                                        setSelected(chore);
                                        setChoreName(chore?.name);
                                    }}>Edit
                                </button>
                            </td>
                        </tr>
                    )
                )
            }
        </table>
    )
}