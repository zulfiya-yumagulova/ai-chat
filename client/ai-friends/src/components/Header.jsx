import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/ToolBar";
import Logo from "../shared/Logo";

function Header() {
  return (
    <AppBar
      style={{
        backgroundColor: "#912BBC",
        position: "static",
        boxShadow: "none",
      }}
    >
      <ToolBar style={{ display: "flex" }}>
        <Logo />
      </ToolBar>
    </AppBar>
  );
}

export default Header;
