

const About = () => {
    return (
        <div className="grid frid-rows-[20px_1fr_20px] items-center justify-items-center">

            <header>
                <nav>
                    <a href="">Home</a>
                    <a href="">About</a>
                </nav>

            </header>

            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-">
                <hi>About</hi>
                <h2>Journey to awesoemness. webapp page</h2>
            </main>
            
            <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-items-center'>
                <h3>Emerging Technologies</h3>
                <h3>Delano Marques</h3>
                <h3>February 5,. 2025</h3>
            </footer>


        </div>
        
    )
}

export default About