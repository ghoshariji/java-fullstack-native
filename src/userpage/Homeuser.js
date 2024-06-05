import React, { useState,useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  openLink,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../componets/Button";
import COLORS from "../constants/colors";
import { Image } from "expo-image";
import CustomToast from "../componets/Customtoast";

const Homeuser = ({ navigation }) => {
  const toastRef = useRef(null);
  const openLink = (url) => {
    Linking.openURL(url);
  };

  const callNumber = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  const youtubeVideos = [
    {
      id: "VIDEO_ID_1",
      title: "Introduction to driving",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjedNhMUPepo9XrHrytZQ1IoQ-rEIPPZ9bKA&s",
      embedUrl: "https://youtu.be/O1m0sc4D9Ps?si=scrXQ6k8a-KrHQVv",
    },
    {
      id: "VIDEO_ID_1",
      title: "Driving test four wheeler",
      thumbnail:
        "https://img.freepik.com/free-vector/flat-design-driving-school-youtube-thumbnail_23-2149272286.jpg",
      embedUrl: "https://youtu.be/z727XNSlJPI?si=u5svjqsiRycPiVRw",
    },
    {
      id: "VIDEO_ID_1",
      title: "Driving test two wheeler",
      thumbnail:
        "https://www.shutterstock.com/shutterstock/videos/3410742097/thumb/11.jpg?ip=x480",
      embedUrl: "https://youtu.be/AhtUDLzlYj0?si=ozLOA3Z-MmX_iiXl",
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(null);

  // Function to play the video
  const playVideo = (videoId) => {
    setCurrentVideo(videoId);
  };
  const openYoutube = (videoId) => {
    // const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    Linking.openURL(videoId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source="https://thumbs.dreamstime.com/b/user-profile-icon-vector-avatar-person-picture-portrait-symbol-neutral-gender-silhouette-circle-button-photo-blank-272664038.jpg"
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Hey, John Doe</Text>
        </View>
        {/* Settings Icon */}
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="settings-outline" size={24} color="black" />
        </Pressable>
      </View>


    <CustomToast visible={true} message="This is a toast message" onHide={() => hideToast()} />


      {/* Content */}
      <ScrollView style={styles.content}>
        {/* Institution Picture Slider Section */}
        <View style={styles.section}>
          <ScrollView horizontal={true}>
            <Image
              source="https://www.prathammotors.com/pm/images/d1.jpg"
              style={styles.institutionImage}
            />
            <Image
              source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfY23tAcEQObdmJzTC3FVLMYqTBbXVwGf9A&s"
              style={styles.institutionImage}
            />
            <Image
              source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp2ngBicWsswnS6mdfgZoar6bsm_36LougxQ&s"
              style={styles.institutionImage}
            />
            <Image
              source="https://www.universaldriving.ca/wp-content/uploads/2023/11/Beginners-To-Learn-Car-Driving.png"
              style={styles.institutionImage}
            />
            <Image
              source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVPk72HOdu55nzlMlv95XfjAOP3FKIsy92rg&s"
              style={styles.institutionImage}
            />
            {/* Add more institution images here */}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Why is driving Licence important to us?
          </Text>
          <ScrollView horizontal={true}>
            {/* Success Story Cards */}
            <View style={styles.successCard}>
              <View style={styles.successCardContent}>
                {/* <Text style={styles.successTitle}>Success Story Title</Text> */}
                <Text style={styles.successText}>
                  As a responsible citizen, one should always get oneself a
                  driving licence if they wish to drive any motor vehicles. This
                  is not just for the safety of self but for the safety of
                  others on the roads as well. Apart from this, owning a driving
                  licence gives you additional personal identification proof.
                </Text>
              </View>
            </View>
            {/* Add more success story cards here */}
          </ScrollView>
        </View>

        <View style={styles.specialOffer}>
          <Text style={styles.sectionTitle}>#Coming Soon</Text>
          <Image
            source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYZ9YTlv48MUWyLG0gwTbOAfEHD5ewIfrpw&s"
            style={styles.specialOfferImage}
          />
        </View>

        {/* free course */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Demo Video available on YouTube
          </Text>
          <ScrollView horizontal={true}>
            {youtubeVideos.map((video, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => openYoutube(video.embedUrl)}
              >
                {/* {console.log(video.embedUrl)} */}
                <View style={styles.videoContainer}>
                  {currentVideo === video.id ? (
                    <WebView
                      javaScriptEnabled={true}
                      domStorageEnabled={true}
                      source={{ uri: video.embedUrl }}
                      style={styles.webView}
                    />
                  ) : (
                    <>
                      <Image
                        source={{ uri: video.thumbnail }}
                        style={styles.thumbnail}
                      />
                      <Text style={styles.videoTitle}>{video.title}</Text>
                    </>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* query section */}
        <View
          style={{
            flexDirection: "column",
            backgroundColor: "#fff",
            elevation: 5,
            borderRadius: 8,
            padding: 8,
            margin: 15,
          }}
        >
          <View style={styles.container2}>
            {/* Left Section */}
            <View style={styles.leftSection}>
              <View style={styles.container1}>
                <Text style={styles.questionText}>Have any questions?</Text>
                <Text style={styles.goodJobText}>
                  Our experts can answer all your call questions over a phone
                  call
                </Text>
                {/* Call Button */}
              </View>
            </View>

            {/* Right Section */}
            <View style={styles.rightSection}>
              <Image
                source="https://media.bizj.us/view/img/10847862/howtophoneskills*900xx6048-3415-0-185.jpg"
                style={styles.circularImage} // Updated style here
              />
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Button
              title="Call us +917439120030"
              onPress={() => callNumber("+917439120030")}
              style={{
                marginTop: 22,
                width: "100%",
                color: COLORS.primary,
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <View style={{ justifyContent: "space-between" }}>
            <View style={styles.socialLinks}>
              <TouchableOpacity
                style={{ padding: 8 }}
                onPress={() => openLink("https://www.youtube.com")}
              >
                <FontAwesome name="youtube" size={24} color="red" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => openLink("https://telegram.me")}
                style={{ padding: 8 }}
              >
                <FontAwesome name="telegram" size={24} color="red" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ padding: 8 }}
                onPress={() => openLink("https://www.instagram.com")}
              >
                <FontAwesome name="instagram" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactText}>Name: John Doe</Text>
            <Text style={styles.contactText}>Phone: +1234567890</Text>
            <Text style={styles.contactText}>Contact Us: 24x7</Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  videoContainer: {
    marginRight: 20,
    alignItems: "center",
  },
  thumbnail: {
    width: 220,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  webView: {
    width: 160,
    height: 90,
  },
  container1: {
    flexDirection: "column",
    paddingHorizontal: 20,
    marginTop: 20,
  },

  container2: {
    flexDirection: "row",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  leftSection: {
    flex: 1,
    marginRight: 10,
    flexDirection: "column",
  },
  rightSection: {
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  goodJobText: {
    fontSize: 16,
    color: "gray",
  },
  callButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  callButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
  },
  circularImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 40,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileName: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  settingsIcon: {
    width: 30,
    height: 30,
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  institutionImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  institutionImage1: {
    width: 85,
    height: 65,
    borderRadius: 10,
    marginRight: 10,
  },
  specialOffer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  specialOfferImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  courseCard: {
    marginRight: 10,
  },
  courseImage: {
    width: 250,
    height: 200,
    borderRadius: 10,
  },
  courseTitle: {
    marginTop: 10,
    fontSize: 16,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  discountPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  originalPrice: {
    fontSize: 16,
    marginLeft: 5,
    textDecorationLine: "line-through",
    color: "#888",
  },
  discountTag: {
    backgroundColor: "green",
    marginLeft: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  discountTagText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buyNowButton: {
    backgroundColor: "blue",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  buyNowButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  successCard: {
    marginRight: 20,
    width: 300,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  successCardContent: {},
  successTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  successText: {
    fontSize: 14,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "black",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
  },
  footerText: {
    fontSize: 14,
    color: "white",
  },
  contactInfo: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  contactText: {
    fontSize: 14,
    marginBottom: 5,
    color: "white",
  },
  socialLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Align items vertically
    marginRight: 20, // Add some right margin to the container
  },
});

export default Homeuser;
