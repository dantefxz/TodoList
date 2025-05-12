interface ListaTareasProps {
    lista: string[];
  }
  
  const ListaTareas = ({ lista }: ListaTareasProps) => {
    return (
      <ul>
        {lista.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    );
  }
  
  export default ListaTareas;