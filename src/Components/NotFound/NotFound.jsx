import React from "react";
import notfound from "../../Assets/not_found.svg";

const NotFound = () => {
  return (
    <>
      <section>
        <div className="container flex justify-center items-center">
          <img src={notfound} alt="404 Not Found" style={{ width: "50%" }} />
        </div>
      </section>
    </>
  );
};

export default NotFound;
