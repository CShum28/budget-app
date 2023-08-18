import { Link } from "react-router-dom";

function NoPage() {
  return (
    <>
      <h2>Error 404: Page Not Found</h2>

      <Link to="/">
        <button>Back to home</button>
      </Link>
    </>
  );
}

export default NoPage;
