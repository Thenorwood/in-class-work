import Link from "next/link"

const Header = () => {
    return (
        <header>

            <nav className="space-x-8">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/todos">To Dos</Link>
            </nav>
        </header>
        
    )
}

export default Header