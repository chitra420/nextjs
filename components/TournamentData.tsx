import { useState } from "react";
import { useEffect } from "react";
export default function TournamentData(){

    const [blogs,setBlogs] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost/GyanOk_Vue/public/api/get-users')
          .then((res) => res.json())
          .then((data) => {
            setBlogs(data)
            setLoading(false)
          })
      }, [])

    if(isLoading){
        return <p className="text-center">Please wait until page is loading...</p>
    }
    return (
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogs.map((item :any)=>{
                                return <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone_number}</td>
                                </tr>
                            }) 
                        }
                    </tbody>
                </table>
            </div>
    )
    
}