import { useState } from "react";
import { ChoreInputProps } from "../../interfaces/chores";

export default function ChoreInput({ createChore }: ChoreInputProps) {
    const [choreName, setChoreName] = useState("");

    return(
        <>
            Add a new chore
            <input type="text" value={choreName} onChange={(event) => setChoreName(event.target.value)}/>

            <button onClick={() => {
                createChore(choreName);
                setChoreName("");
            }}>+</button>
        </>
    )
}