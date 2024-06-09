import Todo from "@/components/modules/todo/Todo"

const Home = () => {
  return (
    <div className='w-screen py-20 flex justify-center flex-col items-center'>
      <h1 className='text-4xl font-bold'>TO-DO List</h1>
      <Todo />
    </div>
  )
}

export default Home