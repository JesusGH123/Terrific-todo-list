import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Chore, ChoreOrNull } from "../interfaces/chores";
import { API_URLS } from "../constants/constants";

export default function useChores() {
    const [chores, setChores] = useState([]);
    const [choreName, setChoreName] = useState("");
    const [selected, setSelected] = useState<ChoreOrNull>(null);

    const getChores = useCallback(async () => {
        try {
            const res = await axios.get(API_URLS.GET_CHORES);
            setChores(res.data);
        } catch(error) {
            console.error("Error: ", error);
        }
    }, []);

    const deleteChore = async (id: string) => {
        try {
            await axios.delete(`${API_URLS.DELETE_CHORE}/${id}`);
            getChores();
        } catch(error) {
            console.error("Error: ", error);
        }
    };

    const createChore = async (choreName: string) => {
        try {
            await axios.post(API_URLS.CREATE_CHORE, {
                name: choreName
            });
            getChores();
            setChoreName("");
        } catch(error) { 
            console.error("Error: ", error);
        }
    };

    const updateChore = async (chore: Chore) => {
        try {
            await axios.put(API_URLS.UPDATE_CHORE, chore)
            getChores();
            setChoreName("");
        } catch(error) {
            console.error("Error: ", error);
        }
    }

    useEffect(() => {
        getChores();
    }, [getChores]);

    return {
        chores,
        selected,
        choreName,        
        setSelected,
        createChore,
        deleteChore,
        updateChore,
        setChoreName,
    }
}