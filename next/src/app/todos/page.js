import Footer from "@/components/Footer"
import Header from "@/components/Header"

const Todos = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json()

    

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Header />
        
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="text-5xl text-blue-800">To Dos list</h1>
                <ul className= "flex flex-col gap-8">
                {
                    todos.map( todo => {
                        <li key={ todo.id } className="bg-teal-200">
                            <h2>{ todo.title }</h2>
                            <p>Status: { todo.completed ? 'completed' : 'not completed'}</p>
                        </li>
                    })

                }
                </ul>
               
            </main>
        
        
            <Footer />
        </div>
    )
}

export default Todos