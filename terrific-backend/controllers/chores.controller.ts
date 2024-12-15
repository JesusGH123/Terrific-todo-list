import { uuidv7 } from "uuidv7";
import { ChoreModel } from "../models/chore";

module.exports.get_chores = async (_req, res) => {
    try {
        const chores = await ChoreModel.find();
        res.json(chores);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports.add_chore = async (req, res) => {
    try {
        const newChore = new ChoreModel({
            _id: uuidv7(),
            name: req.body.name,
            done: false
        });

        try {
            await newChore.save();
            res.send("Data inserted successfully");
        } catch (err) {
            res.send("Error: " + err);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports.update_chore = async (req, res) => {
    const newChore = req.body;
    try {
        const updatedChore = await ChoreModel.findByIdAndUpdate(
            newChore._id,
            {
                name: newChore.name,
                done: newChore.done
            },
            { new: true }
        )

        if(!updatedChore)
            return res.status(404).send("Chore not found");
        res.send("Chore updated successfully");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports.delete_chore = async (req, res) => {
    const choreId = req.params.id;

    try {
        const deletedChore = await ChoreModel.findByIdAndDelete(choreId);
        if(!deletedChore) {
            return res.status(404).send("Chore not found");
        }
        res.send("Chore deleted successfully");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}