import LoginForm from "./LoginForm";

export default function Admin(){
    return (
        <div id="admin" style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            minHeight:"100vh"
        }}>

            <LoginForm />
        </div>
    )
}