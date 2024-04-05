import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/ToolBar";
import Logo from "../shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "../shared/NavigationLink";

function Header() {
  const auth = useAuth();

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
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#000fffc"
                to="/chat"
                text="Go to chat"
                textColor="#000"
              />
              <NavigationLink
                bg="#51538f"
                textColor="white"
                to="/"
                text="logout"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg="#000fffc"
                to="/login"
                text="Go to chat"
                textColor="#000"
              />
              <NavigationLink bg="#51538f" textColor="white" to="/signup" />
            </>
          )}
        </div>
      </ToolBar>
    </AppBar>
  );
}

export default Header;
