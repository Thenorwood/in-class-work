const User =  async ({ params }) => {

        const { userId } = await params

        const response = await fetch (`https://jsonplaceholder.typicode.com/users/${userId}`)
        const user = await response.json()

    return (
        <div className="bg-gray-200 p-6 shadow-lg rounded-lg">
            <div className="text-4x1">user details</div>
            <div className="text-2x1">{ user.name }</div>
            <div>{ user.email } </div>
            <div>{user.username } </div>
            <div>{user.company.name}</div>
            
            
            
            
             </div>
    )
}

export default User