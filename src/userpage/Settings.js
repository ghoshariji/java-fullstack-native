import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 

const Settings = ({ navigation }) => {
  const goToExaminationProgress = () => {
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Academic Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Academic</Text>
          <View style={styles.academicHeader}>
            <Ionicons
              name="book-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text
              style={styles.sectionTitle}
              onPress={() => navigation.navigate("Result")}
            >
              Driving Report Card
            </Text>
            <View style={styles.arrowContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("Result")}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.line} />
          <View style={styles.academicHeader}>
            <Ionicons
              name="book-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text
              style={styles.sectionTitle}
              onPress={() => navigation.navigate("Schedule")}
            >
              Schedule
            </Text>
            <View style={styles.arrowContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Time-Table")}
              >
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Line */}

        {/* Communication Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reports</Text>
          <View style={styles.academicHeader}>
            <Ionicons
              name="book-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.sectionTitle} onPress={()=>navigation.navigate("Certificate")}>Certificate</Text>
            <View style={styles.arrowContainer} onPress={()=>navigation.navigate("Certificate")}>
              <TouchableOpacity onPress={()=>navigation.navigate("Certificate")}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Help Desk</Text>
          <TouchableOpacity
            style={styles.academicHeader}
            onPress={() => navigation.navigate("Chat Us")}
          >
            <Ionicons
              name="book-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.sectionTitle}>Chat with Us</Text>
            <View style={styles.arrowContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("Chat Us")}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#e0e0e0",
    paddingTop: 50, 
    paddingHorizontal: 20, 
  },
  section: {
    backgroundColor: "#fff", 
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
  },
  academicHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Adjusted to space between
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  arrowContainer: {
    marginLeft: "auto", // Moves the arrow to the right side
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    marginBottom: 20,
  },
});

export default Settings;
