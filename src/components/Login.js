function Login() {

    return (
        <div id="login" >
            <form >
                <h1>Login</h1>
                
                
                <input placeholder="Enter Name" name="name" required/><br/>

                    
                    <input type="password" placeholder="Enter Password" name="password" required/><br/>

                        <button>Login</button><br/>
                        <button id="close" onClick={()=>{document.getElementById("login").style.display="none"}} >Close</button>
                    </form>
                </div>

                )
}

                export default Login
