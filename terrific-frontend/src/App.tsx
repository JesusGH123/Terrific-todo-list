import './App.css';
import useChores from './hooks/useChores';
import List from './components/List/List';
import ChoreInput from './components/ChoreInput/ChoreInput';

function App() {
  const { 
    chores,
    selected,
    choreName,
    setSelected,
    createChore,
    deleteChore,
    updateChore,
    setChoreName
  } = useChores()
  
  return (
    <>
      <h1>Terrific To-do list</h1>

      <ChoreInput
        selected={selected} 
        choreName={choreName}
        setSelected={setSelected}
        createChore={createChore}
        updateChore={updateChore}
        setChoreName={setChoreName}
      />
      <List 
        chores={chores}
        deleteChore={deleteChore}
        updateChore={updateChore}
        setSelected={setSelected}
        setChoreName={setChoreName}
      />
    </>
  )
}

export default App;