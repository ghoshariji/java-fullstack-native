import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Pressable,
  ActivityIndicator
} from "react-native";
import { getUserOrderHistory } from "../api/driveAuth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomToast from "../componets/Customtoast";
const Result = ({ navigation }) => {
  const [email, setEmail] = useState(null)
  const [toast, setToast] = useState(false)
  const [loading, setLoading] = useState(false)
  const [toastmesg, setToastMesg] = useState(null)
  const [data, setData] = useState([])
  const fetchData = async () => {
    setLoading(true)
    try {
      const userEmail = await AsyncStorage.getItem(email)
      if (userEmail) {
        setEmail(userEmail)
        const data = await getUserOrderHistory(email)
        setData(data.data)
        setLoading(false)
      }
      else {
        setLoading(false)
        setToastMesg("Internal Server Error");
        setToast(true)
      }
    } catch (error) {
      setLoading(false)
      setToastMesg("Something went Wrong");
      setToast(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <View style={{ flex: 1 }}>
      {loading && (
        <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <ActivityIndicator size="large" color="black" />
        </View>
      )}
      <ScrollView style={{ flex: 1 }}>
        {
          data.length > 0 ? (data.map((exam, index) => (
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
                <Text>name:{exam.name}</Text>
                <Text>email:{exam.email}</Text>
                <Text>phone:{exam.phone}</Text>
                <Text>address:{exam.address}</Text>
                <Text>Date:{new Date(exam.createdAt).toLocaleDateString()}</Text>
              </View>
            </View>
          ))) : (
            <View style={{ flex: 1 }}>
              <Text>No Data Found</Text>
            </View>
          )}
      </ScrollView>
      <CustomToast visible={toast} message={toastmesg} onHide={() => hideToast()} />
    </View>
  );
};

export default Result;
