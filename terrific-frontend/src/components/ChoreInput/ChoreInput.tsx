import { ChoreInputProps } from "../../interfaces/chores";
import "./ChoreInput.css"

export default function ChoreInput({ 
    choreName,
    selected,
    setSelected,
    updateChore,
    setChoreName,
    createChore
}: ChoreInputProps) {
    const save = () => {
        if(choreName == "") return alert("Task needs a name");
        if(selected)
            updateChore({
                ...selected,
                name: choreName,
            });
        else
            createChore(choreName);
        setSelected(null);
    }

    return(
        <div className="chore-input-container">
            <span>{(selected ? "Update" : "Add new")} todo</span>
            <input type="text" value={choreName} onChange={(event) => setChoreName(event.target.value)}/>

            <button className="save-btn" onClick={save}>
                { (selected) ? "Update" : "Add" }
            </button>
        </div>
    )
}