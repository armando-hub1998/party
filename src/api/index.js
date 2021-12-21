import { getDatabase, ref, onValue, set } from "firebase/database";

export function getFromDatabase(callback) {
  const db = getDatabase();
  const reference = ref(db, "party/");
  onValue(reference, (snapshot) => {
    callback(snapshot.toJSON());
  });
}
