import Footer from "@/components/Footer"
import Header from "@/components/Header"

const About = () => {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 smLp-20 font-[family-name:var(--font-geist-sans)]">

           <Header />

            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <hi>About</hi>
                <h2>Journey to awesoemness. webapp page</h2>
            </main>


            <Footer />
            
            


        </div>
        
    )
}

export default About