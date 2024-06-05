import { View, Text, Pressable, } from 'react-native'
import React, { useEffect } from 'react'
import COLORS from '../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../componets/Button';
import { Image } from 'expo-image'; 

const Welcome = ({ navigation }) => {
    
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "black",
            }}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 10,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />

                    <Image
                        source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLNExSIbR9y5ltANHGtG0HMtTX9rQx6bpwg&s"
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: -30,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-5deg" }
                            ]
                        }}
                    />

                    <Image
                        source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPdDsIfrOmc1lonGSxxnpseNd7LidqnbiO3w&s"
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 130,
                            left: -50,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "15deg" }
                            ]
                        }}
                    />

                    <Image
                        source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpID6Pkl80qb17FJ12P8pOHaVhWMy2LhmN2Q&s"
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: "absolute",
                            top: 110,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Let's Get</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Started</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            marginVertical: 4
                        }}>
                            Start your journey with Us.
                        </Text>
                        {/* <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                        }}>
                           
                        </Text> */}
                    </View>

                    <Button
                        title="Join Now"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: 22,
                            width: "100%",
                            color : COLORS.primary
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.white,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Welcome