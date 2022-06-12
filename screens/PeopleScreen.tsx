import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface Person {
  id: number;
  name: string;
  lastName: string;
}

const PeopleScreen = () => {
  const person: Person = {
    id: 1,
    name: "Tania Iveth",
    lastName: "Cruz Aragon",
  }; // object

  const persons: Person[] = [
    { id: 1, name: "Tania Iveth", lastName: "Cruz Aragon" },
    { id: 2, name: "Gustavo", lastName: "Hernandez Hidalgo" },
  ];

  const personIDs = persons.map((person) => person.id);

  console.log(personIDs);

  return (
    <View style={styles.content}>
      {persons.map((person, index) => (
        <Text key={index} style={styles.text}>
          {person.name} {person.lastName}
        </Text>
      ))}
    </View>
  );
};

export default PeopleScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 5,
  },
});
