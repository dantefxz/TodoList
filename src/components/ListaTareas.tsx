interface ListaTareasProps {
    lista: string[];
    onRemoverTarea: (indice:number) => void;
  }
  
  const ListaTareas = ({ lista, onRemoverTarea }: ListaTareasProps) => {
    return (
      <ul>
        {lista.map((tarea, index) => (
          <li key={index}>
            {(index + 1) + ". " + tarea}
          <button onClick={() => onRemoverTarea(index)}>X</button>
          </li>
        ),
        )}
      </ul>
    );
  }
  
  export default ListaTareas;