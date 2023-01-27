/*import {
  removeAccessToken,
  removeUser,
  setAccessToken,
  setUser,
} from "@/store/user";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { LoadingOverlay } from "@mantine/core";
import React, { PropsWithChildren, useEffect } from "react";
import { useDispatch } from "react-redux";

const GlobalWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  const { getAccessTokenSilently, user, isLoading } = useAuth0();

  useEffect(() => {
    getAccessTokenSilently()
      .then((token) => {
        dispatch(setUser(user));
        dispatch(setAccessToken(token));
        localStorage.setItem("access_token", token);
      })
      .catch((err) => {
        dispatch(removeUser());
        dispatch(removeAccessToken());
      });
  }, [user, dispatch, getAccessTokenSilently]);

  return (
    <>
      <LoadingOverlay visible={isLoading} />
      {children}
    </>
  );
};

export default withAuthenticationRequired(GlobalWrapper);
*/