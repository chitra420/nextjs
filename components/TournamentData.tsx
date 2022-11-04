import { useState } from "react";
import { useEffect } from "react";
export default function TournamentData(){

    const [blogs,setBlogs] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/comments')
          .then((res) => res.json())
          .then((data) => {
            setBlogs(data)
            setLoading(false)
          })
      }, [])

    if(isLoading){
        return <p className="text-center">Comments loading...</p>
    }
    return (

            <>
                {
                    blogs.map((item :any)=>{
                        return <div className="col-md-6" key={item.id}><div className="card mb-4">
                            <div className="card-body">
                                <h4>{item.email}</h4>
                                <p>{item.body}</p>
                            </div>
                        </div></div>
                    }) 
                }
            </>
    )
    
}