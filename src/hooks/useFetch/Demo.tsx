import useFetch from "./useFetch";

const UseFetchExample = () => {
  const { data, isLoading, error } = useFetch<{ id: string; name: string }[]>(
    "https://api.example.com/data"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data && data.map((item) => <div key={item.id}>{item.name}</div>)}
    </div>
  );
};

export default UseFetchExample;
