import { useState } from "react";
import Layout from "../../components/Layout";
export default function Slug(props :any){
  const [blogs,setBlogs] = useState(props.blogData);
    return (
        <>
          <Layout>
              <div className="container">
                <div className="card">
                  <div className="card-header">
                    <h3>{blogs.title}</h3>
                  </div>
                  <div className="card-body">
                    <p>{blogs.body}</p>
                  </div>
                </div>
              </div>
          </Layout>
        </>   
    )
}


export async function getServerSideProps(context :any) {
    let id = context.query.slug;
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let blogData = await data.json();
    return {
      props: {blogData},
    }
  }