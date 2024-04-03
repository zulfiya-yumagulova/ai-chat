import { Link } from "react-router-dom";

function Logo() {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Link to="/">
        <img
          src="../../public/open-ai.svg"
          alt="open-ai"
          width={"30px"}
          height={"30px"}
          className="ai-logo"
        />
        <span style={{ fontSize: "20px", color: "#fff" }}>AI-Friends</span>
      </Link>
    </div>
  );
}

export default Logo;
