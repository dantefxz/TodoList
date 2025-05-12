import {useState} from "react";

interface AgregarTareaProps {
    agregarTarea: (tarea: string) => void;
  }

const AgregarTarea = ({ agregarTarea }: AgregarTareaProps) => {
    const [tarea, setTarea] = useState<string>('');
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTarea(e.target.value);
    };
  
    const handleAgregar = () => {
      agregarTarea(tarea);
      setTarea('');
    };
  
    return (
      <div>
        <input
          type="text"
          value={tarea}
          onChange={handleChange}
          placeholder="Escribe una tarea..."
        />
        <button onClick={handleAgregar}>Agregar</button>
      </div>
    );
};
  
export default AgregarTarea;