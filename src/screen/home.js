import * as React from "react";
import uuid from "react-native-uuid";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { getFromDatabase } from "../api";

const PartyItem = ({ item, navigation, itemId }) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate("Festa", {
        itemId,
        ...item,
      })
    }
    style={[styles.item]}
  >
    <Image
      source={{
        uri: item.imageUri,
      }}
      style={styles.image}
    />
    <View style={styles.content}>
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.promotor}>{item.promotor}</Text>
      <Text style={styles.hora}>
        {item.hora} - {item.date}
      </Text>
    </View>
  </TouchableOpacity>
);

export default function Home({ navigation }) {
  const [items, setItem] = React.useState({});

  React.useEffect(() => {
    getFromDatabase(setItem);
  }, [items]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.list}>
        {[Object.values(items)[0]].map((item, index) => (
          <TouchableOpacity
            key={uuid.v4()}
            onPress={() =>
              navigation.navigate("Festa", {
                itemId: Object.keys(items)[index],
                ...item,
              })
            }
            style={[styles.item]}
          >
            <Image
              source={{
                uri: item.imageUri,
              }}
              style={styles.image}
            />
            <View style={styles.content}>
              <Text style={styles.title}>{item.nome}</Text>
              <Text style={styles.promotor}>{item.promotor}</Text>
              <Text style={styles.hora}>
                {item.hora} - {item.date}
              </Text>
            </View>
          </TouchableOpacity>
          // <PartyItem
          //   item={item}
          //   key={uuid.v4()}
          //   navigation={navigation}
          //   itemId={Object.keys(items)[index]}
          // />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
  list: {
    padding: 20,
    color: "#Fff",
  },
  item: {
    height: 90,
    borderRadius: 16,
    marginVertical: 8,
    overflow: "hidden",
    marginHorizontal: 4,
    flexDirection: "row",
    backgroundColor: "#111",
  },
  content: {
    width: "100%",
    justifyContent: "space-around",
    padding: 10,
  },
  image: {
    width: 90,
    height: 90,
  },
  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  promotor: {
    fontSize: 16,
    color: "#FFF",
  },
  hora: {
    fontSize: 14,
    color: "#AAA",
  },
});
