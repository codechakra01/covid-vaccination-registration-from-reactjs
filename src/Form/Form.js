

export default function Form({setName,setEmail, setmobileNo, setaddharNo, setpinCode, setAddress, setGender, setMaritalStatus, setVaccenter, setCountry,
    setState, setdateOfBirth, setappointmentDate}) {


    return (
        <>

            <form>

                <table className="table table-hover" style={{ marginTop: "20px" }}>

                    <tbody>
                        <tr>
                            <th>
                                <label htmlFor="name" >Name</label>
                            </th>
                            <td>
                                <input type="text" id="name" placeholder="Enter your name" onChange={(e) => {
                                    setName(e.target.value)
                                    console.log(e.target.value)
                                }} className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="email">Email</label>
                            </th>
                            <td>
                                <input
                                    type="email"
                                    id="name"
                                    placeholder="Enter your email id"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        console.log(e.target.value)

                                    }}
                                    className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="mob">Mobile No.</label>
                            </th>
                            <td>
                                <input type="number" id="mob" onChange={(e) => {
                                    setmobileNo(e.target.value)
                                    console.log(e.target.value)

                                }} className="form-control" />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label htmlFor="aadhar-no">Aadhar no</label>
                            </th>
                            <td>
                                <input type="number" id="aadhar-no"
                                    onChange={(e) => {
                                        setaddharNo(e.target.value)
                                        console.log(e.target.value)

                                    }} className="form-control" />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label htmlFor="gender">Select gender</label>
                            </th>
                            <td>
                                <select id="gender" onChange={
                                    (e) => {
                                        setGender(e.target.options[e.target.selectedIndex].text)
                                        console.log(e.target.options[e.target.selectedIndex].text)
                                    }
                                } className="form-select" >
                                    <option>--Select--</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Third gender</option>

                                </select>
                            </td>
                        </tr>


                        <tr>
                            <th>
                                <label htmlFor="marital-status">Marital Status</label>
                            </th>
                            <td>
                                <select id="marital-status" onChange={
                                    (e) => {
                                        setMaritalStatus(e.target.options[e.target.selectedIndex].text)
                                        console.log(e.target.options[e.target.selectedIndex].text)
                                    }
                                } className="form-select">
                                    <option>--Select--</option>
                                    <option>Married</option>
                                    <option>Unmarried</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label htmlFor="date-of-birth">Date of birth</label>
                            </th>
                            <td>
                                <input type="date" id="date-of-birth" className="form-control" 
                                 onChange= { (e)=>{
                                    setdateOfBirth(e.target.value)
                                    console.log(e.target.value)

                                }}/>
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label htmlFor="vacc-center">Vaccine Center Details</label>
                            </th>
                            <td>
                                <select id="vacc-center" onChange={
                                    (e) => {
                                        setVaccenter(e.target.options[e.target.selectedIndex].text)
                                        console.log(e.target.options[e.target.selectedIndex].text)
                                    }
                                }
                                className="form-select" >
                                        <option>--Select--</option>
                                    <option>Mumbai</option>
                                    <option>Pune</option>
                                    <option>Kalyan</option>

                                </select>
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label htmlFor="date">Appointment date</label>
                            </th>
                            <td>
                                <input type="date" id="date" onChange= { (e)=>{
                                    setappointmentDate(e.target.value)
                                    console.log(e.target.value)

                                }} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="address">Address</label>
                            </th>
                            <td>
                                {" "}
                                <textarea
                                    type="text"
                                    id="address"
                                    style={{ resize: "none" }}
                                    defaultValue={""}

                                    onChange={(e) => {
                                        setAddress(e.target.value)
                                        console.log(e.target.value)

                                    }}
                                    className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="country">Country</label>
                            </th>
                            <td>
                                <select id="country"
                                    onChange={
                                        (e) => {
                                            setCountry(e.target.options[e.target.selectedIndex].text)
                                            console.log(e.target.options[e.target.selectedIndex].text)
                                        }
                                    } className="form-control" >
                                        <option>--Select--</option>
                                    <option>USA</option>
                                    <option>UK</option>
                                    <option>IND</option>
                                    <option>RA</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="state">State</label>
                            </th>
                            <td>
                                <select id="state" onChange={
                                    (e) => {
                                        setState(e.target.options[e.target.selectedIndex].text)
                                        console.log(e.target.options[e.target.selectedIndex].text)
                                    }
                                } className="form-control" >
                                    <option>--Select--</option>
                                    <option>Maharashtra</option>
                                    <option>Uttar pradeshK</option>
                                    <option>Gujrat</option>
                                    <option>Goa</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label htmlFor="pincode">Pincode</label>
                            </th>
                            <td>
                                <input type="number" id="pincode" onChange={(e) => {
                                    setpinCode(e.target.value)
                                    console.log(e.target.value)

                                }} className="form-control" />
                            </td>
                        </tr>

                    </tbody>
                </table>
            </form>


            {/* colSpan={2} style={{ textAlign: "center" }} */}
        </>
    )
}

