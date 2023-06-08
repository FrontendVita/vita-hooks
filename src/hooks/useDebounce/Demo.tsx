import { ChangeEvent, useCallback, useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const UseDebounceExample = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleSearchTermChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    []
  );

  useEffect(() => {
    // Do fetch here...
    // Triggers when "debouncedSearchTerm" changes
    alert(`debouncedSearchTerm: ${debouncedSearchTerm}`);
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        style={{ border: "1px solid black" }}
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </div>
  );
};

export default UseDebounceExample;
