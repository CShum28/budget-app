import Header from "../components/Header";

function Budget({ userInfo }) {
  return (
    <>
      <Header userInfo={userInfo} />
      <p>This is the budget page!</p>
    </>
  );
}

export default Budget;
