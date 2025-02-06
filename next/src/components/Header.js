import Link from "next/link"

const Header = () => {
    return (
        <header>

            <nav className="px-2 space-x-8 text-blue-500">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/todos">To Dos</Link>
            </nav>

        </header>
        
    )
}

export default Header