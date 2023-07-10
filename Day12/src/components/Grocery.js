import { useState } from "react";

const Section = ({ title, description, isVisible, setisVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h2>{title}</h2>
      {isVisible ? (
        <button
          className="cursor-pointer px-4 py-1 bg-slate-700 text-white"
          onClick={() => {
            setisVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer px-4 py-1 bg-slate-700 text-white"
          onClick={() => {
            setisVisible(true);
          }}
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Grocery = () => {
 const [visibleSection, setvisibleSection] = useState("about")

  return (
    <>
      <h1 className="text-3xl text-blue-600 p-2 m-2 font-bold">Instamart</h1>

      <Section
        title={"About Instamart"}
        description={"This is about the first section  of instamart"}
        isVisible={visibleSection == "about"}
        setisVisible={() =>
          setvisibleSection("about")
        }
      />
      <Section
        title={"Team Instamart"}
        description={"We are hardworking 20 people team of instamart"}
        isVisible={visibleSection == "team"}
        setisVisible={() =>
          setvisibleSection("team")
        }
      />
      <Section
        title={"Carrer Instamart"}
        description={
          "Come join us to get the best in class worklife and excellent perks"
        }
        isVisible={visibleSection == "carrer"}
        setisVisible={() =>
          setvisibleSection("carrer")
        }
      />
    </>
  );
};

export default Grocery;
