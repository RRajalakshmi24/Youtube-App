import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const WelcomePage = () => {
  return (
    <View style={styles.welcomepage}>
      <View style={styles.frame}>
        <View style={styles.shorts3Parent}>
          <Image
            style={styles.shorts3Icon}
            contentFit="cover"
            source={require("../assets/shorts-2.png")}
          />
          <Text style={styles.text}>+</Text>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
        </View>
        <Image
          style={styles.frameIcon1}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
      </View>
      <View style={styles.frame1}>
        <Text style={styles.welcomeToBest}>{`Welcome 
to best video app in wolrd`}</Text>
        <View style={styles.frame2}>
          <StatusBar barStyle="default" />
          <Text style={styles.dontHaveAnContainer}>
            <Text style={styles.dontHaveAnAccount}>
              <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
              <Text style={styles.text1}>{` `}</Text>
            </Text>
            <Text style={styles.signUp}>Sign up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shorts3Icon: {
    position: "relative",
    width: 33,
    height: 32,
    overflow: "hidden",
  },
  text: {
    position: "relative",
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.productSans,
    color: Color.colorWhite,
    textAlign: "left",
    marginLeft: 6,
  },
  frameIcon: {
    position: "relative",
    width: 56,
    height: 39,
    overflow: "hidden",
    marginLeft: 6,
  },
  shorts3Parent: {
    width: 113,
    height: 39,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 4,
    marginLeft: 3,
  },
  frameIcon1: {
    position: "relative",
    width: 132,
    height: 37,
    overflow: "hidden",
    marginTop: 11,
  },
  frame: {
    width: 132,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeToBest: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: FontFamily.productSans,
    color: Color.colorWhite,
    textAlign: "center",
    width: 290,
    height: 58,
    marginRight: 12,
  },
  dontHaveAn: {
    color: Color.colorDimgray_300,
  },
  text1: {
    color: Color.colorSilver,
  },
  dontHaveAnAccount: {
    fontFamily: FontFamily.productSans,
  },
  signUp: {
    fontWeight: "700",
    fontFamily: FontFamily.productSans,
    color: Color.colorGainsboro,
  },
  dontHaveAnContainer: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    height: 16,
    marginLeft: 3,
    marginTop: 114,
  },
  frame2: {
    width: 322,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 27,
  },
  frame1: {
    width: 322,
    height: 450,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 86,
  },
  welcomepage: {
    position: "relative",
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 34,
    paddingVertical: 86,
  },
});

export default WelcomePage;
