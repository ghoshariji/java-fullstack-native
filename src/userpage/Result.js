import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";

const Result = ({ navigation }) => {
  // Dummy data for exams
  const exams = [
    { name: "Exam 1", score: 80 },
    { name: "Exam 2", score: 75 },
    { name: "Exam 3", score: 90 },
    { name: "Exam 3", score: 90 },
    { name: "Exam 3", score: 90 },
    { name: "Exam 3", score: 90 },
    { name: "Exam 3", score: 90 },
    { name: "Exam 3", score: 90 },
    // Add more exam objects as needed
  ];
  const handleResult = (exam) => {
    console.log(exam);
    navigation.navigate("Resultdetails", { exam });
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {exams.map((exam, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text>{exam.name}</Text>
              <Text>Score: {exam.score}%</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Result;
