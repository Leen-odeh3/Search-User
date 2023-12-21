import { Users } from "../../data/user";
import InputSearch from "./InputSearch";
import { useState } from "react";

const Search = () => {
  const [search, setsearch] = useState("");

  const filter = Users.filter(
    (ele) =>
      ele.first_name.toLowerCase().includes(search.toLowerCase()) ||
      ele.email.toLowerCase().includes(search.toLowerCase()) ||
      ele.last_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        margin: "auto",
        padding: "10px 30px",
        textAlign: "center",
        marginTop: "3%",
      }}
    >
      <InputSearch search={search} setsearch={setsearch} />
      <table style={{ margin: "auto", textAlign: "center", marginTop: "3%" }}>
        <thead>
          <tr>
            <th>first_name</th>
            <th>last_name</th>
            <th>gender</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {filter.length === 0 ? (
            <p
              style={{
                marginTop: "50px",
                color: "red",
                fontWeight: "700",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              No Element Found
            </p>
          ) : (
            filter.map((e, index) => (
              <tr key={index}>
                <td>{e.first_name}</td>
                <td>{e.last_name}</td>
                <td>{e.gender}</td>
                <td>{e.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <style>
        {`
          td{
            paddingLeft:10px;
          }
          th{
            padding: 20px;
          }
          `}
      </style>
    </div>
  );
};

export default Search;
