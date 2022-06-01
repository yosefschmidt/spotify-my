function Loginput () {
    let loginbtn=document.getElementById("loginbtn")
document.getElementById("btn").addEventListener('click',()=>{
let input=document.createElement("input")
input.type="text"
input.id="logintext"
loginbtn.appendChild(input)
let inputpass=document.createElement("input")
inputpass.type="password"
inputpass.id="loginpassword"
loginbtn.appendChild(input)
})
}


function Login () {


    return(
       <div id="loginbtn">
        <button id="btn" onClick={Loginput} >login</button>

    </div>)
}

export default Login