import { useState } from "react";
import {
  Button,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSpotifyAuth, useSpotifyTracks } from "./utils";
import { Themes } from "./assets/Themes";

// You'll need these when fetching the tracks!
import getEnv from "./utils/env";
import { getMyTopTracks, getAlbumTracks } from "./utils/apiOptions";

export default function App() {
  const { token, getSpotifyAuth, promptAsync } = useSpotifyAuth();
  const [tracks, setTracks] = useState(null);

  /* TODO: Once you are able to retrieve the token, figure out how
   * to fetch the tracks and store them in the `tracks` state variable */

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button title="Test auth" onPress={() => getSpotifyAuth()} /> */}
      <TouchableOpacity style={styles.button} onPress={getSpotifyAuth}>
        <Image
          style={styles.spotifyLogo}
          source={require("./assets/spotify-logo.png")}
        />
        <Text style={styles.buttonText}>CONNECT TO SPOTIFY</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    flexDirection: "row", // Align image and text in a row
    alignItems: "center",
    backgroundColor: "#1DB954",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 20,
  },
  spotifyLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
