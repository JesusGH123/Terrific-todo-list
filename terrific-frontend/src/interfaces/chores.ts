export interface Chore {
    _id: string,
    name: string,
    done: boolean
}

export interface Chores {
    chores: Chore[];
}

export interface ChoreInputProps {
    createChore: (choreName: string) => void
}

export interface ListProps {
    chores: Chore[],
    deleteChore: (id: string) => void,
    updateChore: (chore: Chore) => void
}