import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignUpPage = () => {
  return (
    <View style={styles.signuppage}>
      <Text style={styles.alreadyHaveAnContainer}>
        <Text style={styles.alreadyHaveAn}>{`Already have an account? `}</Text>
        <Text style={styles.signUp}>Sign up</Text>
      </Text>
      <View style={[styles.signuppageChild, styles.signuppageChildLayout1]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={[styles.signuppageItem, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Text style={[styles.fullName, styles.passwordTypo]}>Full name</Text>
      <Image
        style={[styles.signuppageInner, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/group-6.png")}
      />
      <View style={[styles.rectangleView, styles.signuppageChildLayout1]} />
      <Text style={[styles.enterEmail, styles.logInTypo]}>Enter email</Text>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-3.png")}
      />
      <View style={[styles.signuppageChild1, styles.signuppageChildLayout1]} />
      <View style={[styles.signuppageChild2, styles.signuppageChildLayout1]} />
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Text style={[styles.repeatPassword, styles.passwordTypo]}>
        Repeat password
      </Text>
      <Image
        style={[styles.signuppageChild3, styles.signuppageChildLayout]}
        contentFit="cover"
        source={require("../assets/lock-1.png")}
      />
      <Image
        style={[styles.signuppageChild4, styles.signuppageChildLayout]}
        contentFit="cover"
        source={require("../assets/lock-1.png")}
      />
      <Image
        style={[styles.signuppageChild5, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-41.png")}
      />
      <View style={styles.signuppageChild6} />
      <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector11.png")}
      />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
        <Image
          style={styles.vectorIcon3}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector14.png")}
        />
        <Image
          style={styles.vectorIcon5}
          contentFit="cover"
          source={require("../assets/vector15.png")}
        />
        <Image
          style={[styles.vectorIcon6, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector16.png")}
        />
        <Image
          style={[styles.vectorIcon7, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector17.png")}
        />
        <Image
          style={[styles.vectorIcon8, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector18.png")}
        />
        <Image
          style={[styles.vectorIcon9, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector19.png")}
        />
        <Image
          style={[styles.vectorIcon10, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector20.png")}
        />
        <Image
          style={[styles.shorts2Icon, styles.vectorIconLayout2]}
          contentFit="cover"
          source={require("../assets/shorts-2.png")}
        />
        <Text style={[styles.text, styles.passwordTypo]}>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signuppageChildLayout1: {
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    left: "8.97%",
    right: "8.46%",
    opacity: 0.2,
    borderRadius: Border.br_lg,
    width: "82.56%",
    height: "8.18%",
    position: "absolute",
  },
  vectorIconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  passwordTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  logInTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.productSans,
    textAlign: "center",
    position: "absolute",
  },
  groupIconLayout: {
    width: "4.28%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  signuppageChildLayout: {
    left: "13.59%",
    right: "81.28%",
    width: "5.13%",
    height: "2.37%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    bottom: "9.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout1: {
    top: "9.38%",
    width: "6.54%",
    height: "81.25%",
    bottom: "9.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    width: "5.61%",
    height: "59.38%",
    top: "31.25%",
    bottom: "9.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  alreadyHaveAn: {
    color: Color.colorSilver,
    fontFamily: FontFamily.productSans,
  },
  signUp: {
    color: Color.colorGainsboro,
    fontWeight: "700",
    fontFamily: FontFamily.productSans,
  },
  alreadyHaveAnContainer: {
    top: "85.19%",
    left: "25.38%",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    position: "absolute",
  },
  signuppageChild: {
    top: "20.73%",
    bottom: "71.09%",
    opacity: 0.2,
  },
  vectorIcon: {
    height: "4.04%",
    width: "7.18%",
    top: "75.24%",
    right: "36.15%",
    bottom: "20.72%",
    left: "56.67%",
  },
  signuppageItem: {
    height: "3.36%",
    width: "7.03%",
    top: "75.59%",
    right: "57.33%",
    bottom: "21.04%",
    left: "35.64%",
  },
  fullName: {
    top: "23.34%",
    fontSize: FontSize.size_xl,
    left: "21.54%",
    textAlign: "left",
    opacity: 0.2,
  },
  signuppageInner: {
    width: "3.67%",
    top: "23.82%",
    right: "81.97%",
    bottom: "74.21%",
    left: "14.36%",
    height: "1.98%",
  },
  rectangleView: {
    top: "30.57%",
    bottom: "61.26%",
    opacity: 0.2,
  },
  enterEmail: {
    top: "33.18%",
    left: "22.56%",
    opacity: 0.2,
  },
  groupIcon: {
    height: "1.68%",
    top: "33.77%",
    right: "81.62%",
    bottom: "64.55%",
    left: "14.1%",
  },
  signuppageChild1: {
    top: "40.4%",
    bottom: "51.42%",
    opacity: 0.2,
  },
  signuppageChild2: {
    top: "50.24%",
    bottom: "41.59%",
    opacity: 0.2,
  },
  password: {
    top: "43.01%",
    fontSize: FontSize.size_xl,
    left: "21.54%",
    textAlign: "left",
    opacity: 0.2,
  },
  repeatPassword: {
    top: "52.84%",
    fontSize: FontSize.size_xl,
    left: "21.54%",
    textAlign: "left",
    opacity: 0.2,
  },
  signuppageChild3: {
    top: "43.25%",
    bottom: "54.38%",
  },
  signuppageChild4: {
    top: "53.08%",
    bottom: "44.55%",
  },
  signuppageChild5: {
    top: "43.48%",
    right: "13.41%",
    bottom: "54.54%",
    left: "82.31%",
    height: "1.98%",
  },
  signuppageChild6: {
    top: "61.37%",
    right: "8.97%",
    bottom: "30.45%",
    left: "8.46%",
    backgroundColor: Color.colorCrimson,
    borderRadius: Border.br_lg,
    width: "82.56%",
    height: "8.18%",
    position: "absolute",
  },
  logIn: {
    top: "64.1%",
    left: "42.56%",
    fontWeight: "700",
  },
  vectorIcon1: {
    height: "1.56%",
    width: "1.51%",
    top: "4.98%",
    right: "87.46%",
    bottom: "93.46%",
    left: "11.03%",
  },
  vectorIcon2: {
    height: "87.5%",
    width: "19.16%",
    right: "47.2%",
    left: "33.64%",
    top: "3.13%",
  },
  vectorIcon3: {
    height: "34.38%",
    width: "5.14%",
    right: "53.74%",
    bottom: "34.38%",
    left: "41.12%",
    top: "31.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon4: {
    right: "37.85%",
    left: "55.61%",
  },
  vectorIcon5: {
    right: "31.78%",
    left: "61.68%",
    height: "59.38%",
    width: "6.54%",
    top: "31.25%",
    bottom: "9.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon6: {
    right: "25.23%",
    left: "69.16%",
  },
  vectorIcon7: {
    right: "19.16%",
    left: "74.3%",
  },
  vectorIcon8: {
    right: "14.02%",
    left: "80.37%",
  },
  vectorIcon9: {
    height: "84.38%",
    width: "6.07%",
    top: "6.25%",
    right: "6.54%",
    left: "87.38%",
  },
  vectorIcon10: {
    right: "0%",
    left: "94.39%",
  },
  shorts2Icon: {
    height: "100%",
    width: "15.42%",
    top: "0%",
    right: "84.58%",
    bottom: "0%",
    left: "0%",
  },
  text: {
    left: "23.36%",
    fontSize: FontSize.size_2xl,
    top: "3.13%",
  },
  vectorParent: {
    height: "3.79%",
    width: "54.87%",
    top: "12.56%",
    right: "22.31%",
    bottom: "83.65%",
    left: "22.82%",
    position: "absolute",
  },
  signuppage: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SignUpPage;
