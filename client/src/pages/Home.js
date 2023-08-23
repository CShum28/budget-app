import Header from "../components/Header";

function Home(props) {
  console.log("userInfo: ", props.userInfo);

  return (
    <>
      <Header userInfo={props.userInfo} />
      <h2>This is the home page</h2>
    </>
  );
}

export default Home;
