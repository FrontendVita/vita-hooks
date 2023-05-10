import useCopyToClipboard from "./useCopyToClipboard";

const UseCopyToClipboardExample = () => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <button onClick={() => copyToClipboard("Text Copied!!!!")}>
      {isCopied ? "Copied!" : "Copy"}
    </button>
  );
};

export default UseCopyToClipboardExample;
