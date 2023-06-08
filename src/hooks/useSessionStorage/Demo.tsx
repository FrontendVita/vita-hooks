import useSessionStorage from "./useSessionStorage";

const useSessionStorageExample = () => {
  const [count, setCount] = useSessionStorage("count", 0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default useSessionStorageExample;
