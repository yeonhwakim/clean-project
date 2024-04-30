import { ToggleTask } from "../../features/toggle-task";
import Layout from "../../widgets/layout/ui";
import CreateTask from "../../features/create-task/ui";
import ReadTask from "../../features/read-task/ui";

export default function Home() {
  return (
    <Layout>
      <CreateTask />
      <ReadTask />
      <ToggleTask itemId={1} />
    </Layout>
  );
}

// import { useState } from 'react'
// import { Input } from '@/shared/ui/input'
// import { Button } from '@/shared/ui/button'
// import { Checkbox } from '@/shared/ui/checkbox'

// export default function Home() {
//   const [todos, setTodos] = useState([])
//   const [newTodo, setNewTodo] = useState('')

//   const addTodo = () => {
//     if (newTodo.trim()) {
//       setTodos([...todos, { text: newTodo, completed: false }])
//       setNewTodo('')
//     }
//   }

//   const toggleTodo = (index) => {
//     const updatedTodos = [...todos]
//     updatedTodos[index].completed = !updatedTodos[index].completed
//     setTodos(updatedTodos)
//   }

//   return (
//     <main className="flex min-h-screen flex-col items-center p-4">
//       <h1 className="text-4xl font-bold mb-8">Todo App</h1>
//       <div className="flex gap-2 mb-4">
//         <Input
//           placeholder="새 Todo 입력하기"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//         />
//         <Button onClick={addTodo}>추가</Button>
//       </div>
//       <ul className="w-full max-w-md">
//         {todos.map((todo, index) => (
//           <li
//             key={index}
//             className="flex items-center justify-between bg-slate-100 p-4 rounded mb-2"
//           >
//             <div className="flex items-center gap-2">
//               <Checkbox checked={todo.completed} onClick={() => toggleTodo(index)} />
//               <span className={`${todo.completed ? 'line-through' : ''}`}>
//                 {todo.text}
//               </span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </main>
//   )
// }