import { Chore, ListProps } from "../../interfaces/chores";

export default function List({ 
    chores,
    deleteChore, 
    updateChore,
    setSelected,
    setChoreName,
}: ListProps) {
    return (
        <table>
            {
                chores.map((chore: Chore) => {
                    return(
                        <tr>
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
                            <td id={`choreName${chore?._id}`} >{chore?.name}</td>

                            <button id={`btnDelete${chore?._id}`} onClick={() => deleteChore(chore?._id)}>Delete</button>
                            <button 
                                id={`btnEdit${chore?._id}`}
                                onClick={() => {
                                    setSelected(chore);
                                    setChoreName(chore?.name);
                                }}>Edit</button>
                        </tr>
                    )
                })
            }
        </table>
    )
}