import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 
    bg-green-800 text-white'>

                <div className="container flex justify-between text-lg mx-12">
                    <Link to='/home' className="text-2xl font-bold">PrimeFarma</Link>
                    


                    <div className='flex gap-4'>
                        <Link to='/home'className='hover:underline'>Home</Link>
                        <Link to='/produto' className='hover:underline'>Produtos</Link>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
