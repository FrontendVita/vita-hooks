import useLocalStorage from "./useLocalStorage";

const UseLocalStorageExample = () => {
  const [count, setCount] = useLocalStorage("count", 0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default UseLocalStorageExample;
