import Header from "./Header";
import Footer from "./Footer";

export default  function Layout(props){
  return (
      <div>
      <Header />
      <div className="main_content my-5">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}