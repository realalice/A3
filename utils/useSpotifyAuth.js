import getEnv from "./env";
import { useState, useEffect } from "react";
import {
  ResponseType,
  useAuthRequest,
  makeRedirectUri,
} from "expo-auth-session";

import * as WebBrowser from "expo-web-browser";

const {
  REDIRECT_URI,
  SCOPES,
  CLIENT_ID,
  ALBUM_ID,
  SPOTIFY_API: { DISCOVERY },
} = getEnv();

// needed so that the browser closes the modal after auth token
WebBrowser.maybeCompleteAuthSession();

const useSpotifyAuth = () => {
  const [token, setToken] = useState(null);
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: CLIENT_ID,
      scopes: SCOPES,
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: REDIRECT_URI,
    },
    DISCOVERY
  );

  // TODO: Figure out how to set `token` properly!
  const getSpotifyAuth = () => {
    promptAsync();
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      if (access_token) {
        setToken(access_token);
        console.log("Spotify Access Token:", access_token);
      } else {
        console.warn("Access token not found in response:", response);
      }
    } else if (response?.type === "error") {
      console.error("Authentication error:", response);
    }
  }, [response]);

  return { token, getSpotifyAuth: promptAsync };
};

export default useSpotifyAuth;
