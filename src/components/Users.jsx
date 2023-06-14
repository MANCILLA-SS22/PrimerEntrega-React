import { useFetch } from "./hooks/useFetch"

function Users(){

    const {datos} = useFetch([], "https://jsonplaceholder.typicode.com/users")
    console.log(datos);
    return (
        <div>Users</div>
    )
}

export default Users