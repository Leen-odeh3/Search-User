


const InputSearch = ({search,setsearch}) => {

  return (
    <div>
      <input
        placeholder="Search.."
        type="search"
        value={search}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          outline: "none",
          border: "1px solid gray",
          fontSize: "16px",
        }}
        onChange={(e)=>setsearch(e.target.value)}
      />
    </div>
  );
};

export default InputSearch;
