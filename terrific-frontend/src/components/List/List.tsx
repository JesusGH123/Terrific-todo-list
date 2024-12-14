export default function List() {
    const data = [
        { id: "0193c6bc-348b-7c60-aebe-b9ca5443e882", name: "Loading the dishwater" },
        { id: "0193c6bc-348b-7c60-aebe-b9cbbcaef007", name: "Sweeping" },
        { id: "0193c6bc-348b-7c60-aebe-b9cc76768b05", name: "Laundry" }
    ];

    return (
        <table>
            {
                data.map((chore) => {
                    return(
                        <tr>
                            <input type="checkbox" id={`choreCheckbox${chore.id}`} value={chore?.id}></input>
                            <td>{chore?.name}</td>

                            <button>Delete</button>
                        </tr>
                    )
                })
            }
        </table>
    )
}