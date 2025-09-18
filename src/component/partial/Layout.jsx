import Header from "../ui/organisms/Header/Header";

function Layout({ children }) {
  return (
    <div className="">
      <div >
        <Header/>
      </div>
      <div>{children}</div>
      <div >
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Layout;
