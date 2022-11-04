import useSWR from "swr";

const fetcher = async () => {
    const response = await fetch('http://localhost/GyanOk_Vue/public/api/get-users-by-id');
    const data = await response.json();
    return data;
}
export default function SwrFetch(){
    const {data,error} = useSWR('getuser',fetcher);
    if(error) return <p>Something went wrong</p>
    if(!data) return <h1>Data is loading....</h1>
    return  (
        <div>

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
                            data.map((item :any)=>{
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
        </div>
    )
}