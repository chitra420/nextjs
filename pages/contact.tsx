import Layout from "../components/Layout"
import Head from "next/head"
import UserData from "../components/userdata"
import TournamentData from "../components/TournamentData"
import SwrFetch from "./swr-fetch"


export default function Contact(){
    return  (
        <>
        <Head>
            <title>Contact US</title>
            <meta name="description" content="this is for about us description page" />
        </Head>
        <Layout>
            <div className="container">
            <div className="row">
                    <div className="col-md-12"><h1></h1><SwrFetch></SwrFetch></div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <UserData></UserData>
                    </div>
                    <div className="col-md-6">
                        <TournamentData></TournamentData>
                    </div>
                </div>
                
                
            </div>
        </Layout>
        </>
    )
}