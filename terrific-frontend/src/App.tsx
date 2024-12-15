import './App.css';
import useChores from './hooks/useChores';
import List from './components/List/List';
import ChoreInput from './components/ChoreInput/ChoreInput';

function App() {
  const { chores, createChore, deleteChore, updateChore } = useChores()
  
  return (
    <>
      <h1>Terrific To-do list</h1>

      <ChoreInput createChore={createChore}/>
      <List 
        chores={chores}
        deleteChore={deleteChore}
        updateChore={updateChore}
      />
    </>
  )
}

export default App;