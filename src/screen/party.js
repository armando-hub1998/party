import * as React from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Party({ route }) {
  const { nome, description, location, hora, date, promotor } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{
            uri: "https://scontent.flad1-1.fna.fbcdn.net/v/t39.30808-6/264989015_1548638415469847_3822156598538710425_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=973b4a&_nc_ohc=G1NEysCX0hAAX9fjaaR&_nc_ht=scontent.flad1-1.fna&oh=00_AT81VLr0UQTzd6phZNDHwKaXJly3WEv0pbgfyUo1fHH9Bg&oe=61C3CDF8",
          }}
        />
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>{nome}</Text>
        <Text style={styles.promotor}>by {promotor}</Text>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.text}>{location}</Text>
        <Text style={styles.hora}>
          {hora} - {date}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("O seu lugar foi reservado!")}
        >
          <Text>Quero ir</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
  imageWrapper: {
    padding: 20,
    alignItems: "center",
  },
  button: {
    padding: 20,
    width: "100%",
    marginTop: 20,
    marginBottom: 50,
    borderRadius: 10,
    fontWeight: "600",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 30,
    width: "100%",
    backgroundColor: "#111",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  image: {
    width: 230,
    height: 230,
  },
  title: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  promotor: {
    padding: 10,
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
  },
  text: {
    padding: 10,
    fontSize: 16,
    color: "#FFF",
  },
  hora: {
    padding: 10,
    fontSize: 14,
    color: "#AAA",
  },
});
