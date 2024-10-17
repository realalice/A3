import { Button, StyleSheet, SafeAreaView, Text } from "react-native";
import { useSpotifyAuth, useSpotifyTracks } from "./utils";
import { Themes } from "./assets/Themes";

export default function App() {
  const { token, getSpotifyAuth } = useSpotifyAuth();
  const tracks = useSpotifyTracks(token);

  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: This button is just for testing your auth implementation.
       * Replace this with a TouchableOpacity (or Pressible) when you can. */}
      <Button title="Test auth" onPress={() => getSpotifyAuth()} />
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
});
