export interface Chore {
    _id: string,
    name: string,
    done: boolean
}
export type ChoreOrNull = Chore | null;

export interface Chores {
    chores: Chore[];
}

export interface ChoreInputProps {
    selected: ChoreOrNull,
    choreName: string,
    updateChore: (chore: Chore) => void,
    createChore: (choreName: string) => void,
    setSelected: React.Dispatch<React.SetStateAction<ChoreOrNull>>,
    setChoreName: React.Dispatch<React.SetStateAction<string>>
}

export interface ListProps {
    chores: Chore[],
    selected: ChoreOrNull,
    deleteChore: (id: string) => void,
    updateChore: (chore: Chore) => void,
    setSelected: React.Dispatch<React.SetStateAction<ChoreOrNull>>,
    setChoreName: React.Dispatch<React.SetStateAction<string>>
}