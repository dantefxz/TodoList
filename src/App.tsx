import { useState } from 'react'
import './App.css'
import AgregarTarea from './components/AgregarTarea';
import ListaTareas from './components/ListaTareas';
import './components/Tareas.css'

const App = () => {
  const [lista, setLista] = useState<string[]>([]);

  const agregarTarea = (tarea: string) => {
    if (tarea.trim() === '') return;
    setLista([...lista, tarea]);
  };

  const removerTarea = (indice: number) => {
    setLista(lista.filter((_, i) => i !== indice));
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <AgregarTarea agregarTarea={agregarTarea} />
      <ListaTareas lista={lista} onRemoverTarea={removerTarea} /> 
    </div>
  );
}

export default App
