import useCookie from "./useCookie";

const UseCookieExample = () => {
  const [username, setUsername, removeUsername] = useCookie("username");

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.target as any).elements.username.value;
    setUsername(username);
  };

  const handleLogout = () => {
    removeUsername();
  };

  return (
    <div>
      {username ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              style={{ border: "1px solid black" }}
              type="text"
              name="username"
            />
          </label>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default UseCookieExample;
