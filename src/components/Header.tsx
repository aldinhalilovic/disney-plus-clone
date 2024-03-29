import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../app/hooks";
import { loginAction } from "../app/slices/loginSlice";
import { auth, provider } from "../firebase";
import { signInWithPopup, UserCredential } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const addToLocal = (res: UserCredential) => {
    localStorage.setItem("name", res.user.displayName ?? "");
    localStorage.setItem("photo", res.user.photoURL ?? "");
    localStorage.setItem("email", res.user.email ?? "");
  };

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        addToLocal(res);
        dispatch(
          loginAction.setUserLogin({
            name: res.user.displayName,
            email: res.user.email,
            photo: res.user.photoURL,
          }),
        );
        navigate("/");
      })
      .catch((e) => console.log(e));
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(loginAction.setSignOut());
        navigate("/login");
        localStorage.clear();
      })
      .catch((e) => console.log(e));
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" onClick={() => navigate("/")} />
      {localStorage.getItem("name") === null ? (
        <LoginContainer>
          <Login onClick={googleSignIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" />
              <span onClick={() => navigate("/")}>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <Login onClick={signOut}>Logout</Login>
        </>
      )}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &::after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform-origin: left center;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
