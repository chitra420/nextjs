import Image from 'next/image'
import Layout from '../components/Layout';
import { useState } from 'react';
export default function Gallery(props :any){

    const loaderProp =({ src  }) => {
        return src;
    }
    const [photos,setPhotos] = useState(props.photoArr);
    return (
        <>
        <Layout>
            <div className="container">
                <div className="row">
                    {photos.map((item :any)=>{
                        return <div className="col-md-3">
                            <Image
                                src={item.url}
                                alt={item.url} 
                                height={150}
                                width={150}
                                loader={loaderProp}
                            />
                        </div>
                    })}
                </div>
            </div>
        </Layout>
        </>   
    )
}

export async function getServerSideProps() {
    let data = await fetch("https://jsonplaceholder.typicode.com/photos");
    let photoArr = await data.json();
    return {
      props: {photoArr},
    }
  }