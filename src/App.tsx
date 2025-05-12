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

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <AgregarTarea agregarTarea={agregarTarea} />
      <ListaTareas lista={lista} />
    </div>
  );
}

export default App

// Colores:
// Rojo: #f44336 oscurito, #d32f2f brillante
// Fondo: negro/gris oscuro
// Texto: blanco/gris oscuro
// Botones y títulos: rojo (hover o no)
// Detalles: en blanco