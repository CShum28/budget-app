import Button from "./Button";

function Header(props) {
  const signOut = (event) => {
    event.preventDefault();
  };

  // need to figure out the signout
  // might have to add some backend to it to clear the cookie
  // https://www.npmjs.com/package/cookie-session
  // req.session = null

  return (
    <>
      <h1>This is the header</h1>
      {props.userInfo && <p>Logged in as: {props.userInfo}</p>}
      <Button onClick={signOut}>Logout</Button>
    </>
  );
}

export default Header;
