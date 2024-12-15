import { ChoreInputProps } from "../../interfaces/chores";

export default function ChoreInput({ 
    choreName,
    selected,
    setSelected,
    updateChore,
    setChoreName,
    createChore
}: ChoreInputProps) {

    return(
        <>
            <span>{(selected ? "Update" : "Add")} todo</span>
            <input type="text" value={choreName} onChange={(event) => setChoreName(event.target.value)}/>

            <button onClick={() => {
                if(choreName == "") return alert("Task needs a name");
                if(selected)
                    updateChore({
                        ...selected,
                        name: choreName,
                    });
                else
                    createChore(choreName);
                setSelected(null);
            }}>
                { (selected) ? "Update" : "Add" }
            </button>
        </>
    )
}