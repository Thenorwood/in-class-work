'use server' //definiong server actrions

const fetchAuthorDetails = async (userId) => {
    const response = await fetch(`https://jasonplaceholder.typicode.com/users/${userId}`)
        const user = await response.json()

        return user
}

export default fetchAuthorDetails