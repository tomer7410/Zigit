import React ,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { initializeUser } from '../../features/userSlice'
import { IUser } from '../../interfaces/interfaces'
import { login } from '../../services/apiServices'
import { Circles} from 'react-loading-icons'
import './loginPage.css'
const LoginPage = () => {
  const navigate=useNavigate()
   const dispatch = useDispatch();
  const [email,setEmail]=useState<string>("")
  const [password,setPasword]=useState<string>("")
  const [isLoading,setIsLoading]=useState<Boolean>(false)
  const [showAlert,setShowAlert]=useState(false)
  const handleClick=async ()=>{
    if(emailValidation()){
      if(showAlert) setShowAlert(false)
      setIsLoading(!isLoading)
    
      try {
        let res= await login({email,password})
        setIsLoading(!isLoading)
        let user=res.data[0] as IUser ;
        localStorage.setItem("token",user.token)
        dispatch(initializeUser(user))
        navigate('/info')
        
      } catch (error) {
         alert(`error:${error}`)
          
      }
    }
    else{
      setShowAlert(true)
    }
    
  }
  const emailValidation=()=>{
    let isValid=(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    console.log(isValid);
    return isValid
    
    
    
  }

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    
    if(e.target.name=="password")
    {
      setPasword(e.target.value)
    }
    else{
      setEmail(e.target.value)
    }

  }
  return (
    <div className='Login-Container'>
       <Circles style={{position:"absolute",marginTop:"1.5%"}} width={"3%"} display={isLoading?"":"none"}/>
        <p>Sign In</p>
        <form className='Grid-Container'>
            <label className='Grid-Item'>Email:</label>
            <input name="email" className='Grid-Item'  value={email} onChange={handleChange} ></input>
            <div className='Grid-Item' id="alert" style={{display:showAlert?'':'none'}}>Invalid email Address</div>
            <label className='Grid-Item'>Password:</label>
            <input name="password"type="password"  className='Grid-Item'value={password}  onChange={handleChange}></input>
        </form>
       <button type="button" onClick={handleClick} >Login</button>
    </div>
  )
}

export default LoginPage