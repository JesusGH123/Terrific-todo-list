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
    <div className="container">
      <h1 className="title">Terrific To-do list</h1>

      <section>
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
          selected={selected}
          deleteChore={deleteChore}
          updateChore={updateChore}
          setSelected={setSelected}
          setChoreName={setChoreName}
        />
      </section>
    </div>
  )
}

export default App;