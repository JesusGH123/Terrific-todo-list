import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Chore } from "../interfaces/chores";


export default function useChores() {
    const [chores, setChores] = useState([]);

    const getChores = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:3000/chores");
            setChores(res.data);
        } catch(error) {
            console.error("Error: ", error);
        }
    }, []);

    const deleteChore = async (id: string) => {
        try {
            await axios.delete(`http://localhost:3000/chore/${id}`);
            getChores();
        } catch(error) {
            console.error("Error: ", error);
        }
    };

    const createChore = async (choreName: string) => {
        try {
            await axios.post("http://localhost:3000/chore", {
                name: choreName
            });
            getChores();
        } catch(error) { 
            console.error("Error: ", error);
        }
    };

    const updateChore = async (chore: Chore) => {
        try {
            await axios.put("http://localhost:3000/chore", chore)
            getChores();
        } catch(error) {
            console.error("Error: ", error);
        }
    }

    useEffect(() => {
        getChores();
    }, [getChores]);

    return {
        chores,
        createChore,
        deleteChore,
        updateChore,
    }
}