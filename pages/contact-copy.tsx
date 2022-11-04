import Layout from "../components/Layout"
import Head from "next/head"
import { useState } from "react";
import Link from "next/link";
export default function Contact(props :any){
    const [blogs,setBlogs] = useState(props.blogs);
    
    return  (
        <>
        <Head>
            <title>Contact US</title>
            <meta name="description" content="this is for about us description page" />
        </Head>
        <Layout>
            <div className="container">
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
                            {blogs.map((item :any)=>{
                                return <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone_number}</td>
                                </tr>
                            })}
                        </tbody>
                 </table>
                </div>
            </div>
        </Layout>
        </>
    )
}


export async function getServerSideProps() {
    let data = await fetch("http://localhost/GyanOk_Vue/public/api/get-users");
    let blogs = await data.json();
    return {
      props: {blogs},
    }
  }