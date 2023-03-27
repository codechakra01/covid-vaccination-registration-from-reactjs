import './App.css';
import Form from './Form/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import { Route, Routes, useNavigate } from 'react-router-dom';
import Success from './EndPage/Success';

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobileNo, setmobileNo] = useState("")
  const [addharNo, setaddharNo] = useState("")
  const [pinCode, setpinCode] = useState("")
  const [address, setAddress] = useState("")
  const [gender, setGender] = useState("")
  const [maritalStatus, setMaritalStatus] = useState("")
  const [vaccenter, setVaccenter] = useState("")
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [dateOfBirth, setdateOfBirth] = useState("")
  const [appointmentDate, setappointmentDate] = useState("")
 const  setNavigation = useNavigate()
  const dateValidation = (val) => {
    let valDate = new Date(val).getTime()
    let date = new Date().getTime()

    return valDate > date

  }

  const ageValidation = (val) => {
    let year = new Date(val).getFullYear()
    let currentYear = new Date().getFullYear()
    return currentYear - year >= 18
  }

  const inputValidation = () => {
    let checkVal = true
    let message = ""
    if (name !== "" && email !== "" && mobileNo !== "" && addharNo !== "" && pinCode !== "" && address !== "" && multiSelectValidation(gender) &&
      multiSelectValidation(maritalStatus) && multiSelectValidation(vaccenter) && multiSelectValidation(country) && multiSelectValidation(state) && dateOfBirth !== ""
      && appointmentDate !== "") {
      if (!emailValidation(email)) {
        message = "Enter valid Email Id"
        checkVal = false
      }

      if (!dateValidation(appointmentDate)) {
        message += "\n" + "enter valid appointment date"
        checkVal = false
      }

      if (!ageValidation(dateOfBirth)) {
        message += "\n" + "Enter valid birth date"
        checkVal = false

      }
      if (mobileNo.length !== 10) {

        message += "\n" + "Enter valid Mobile Number"
        checkVal = false

      }
      if (addharNo.length !== 12) {
        message += "\n" + "Enter valid Aadhar Number"
        checkVal = false

      }

     
        return checkVal
      

      

    } else {


    
      return false
    }

  }



  const emailValidation = (val) => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (val.match(mailformat)) {
      return true
    } else {
      return false
    }
  }

  const multiSelectValidation = (val) => {
    return val !== "" || val !== "--Select--"
  }

  return (


    <div className="App">

      <Routes>

        <Route path="/" element={<>
          <div className="container d-flex flex-column align-items-center ">

            <h3 style={{ marginTop: "20px" }}>Covid Vaccine Registration Form</h3>
            <Form setName={setName} setEmail={setEmail} setmobileNo={setmobileNo} setaddharNo={setaddharNo}
              setpinCode={setpinCode} setAddress={setAddress} setGender={setGender} setMaritalStatus={setMaritalStatus}
              setVaccenter={setVaccenter} setCountry={setCountry} setState={setState} setdateOfBirth={setdateOfBirth}
              setappointmentDate={setappointmentDate}

            />

            <div className='flex-row justify-content-center' >
              <button type="button" className="btn btn-primary" style={{ marginRight: "20px" }} onClick={
                () => {
                  if(inputValidation())
                  {
                    setNavigation("/success")
                  }else{
                    alert("Please enter all details!")
                  }
                    
                  
                 
                }
              }>Submit</button>
              <button type="button" className="btn btn-primary">Reset</button>
            </div>
          </div>

        </>}></Route>


        <Route path='/success' element={ <Success/>}></Route>
      </Routes>


    </div>
  );
}



export default App;
