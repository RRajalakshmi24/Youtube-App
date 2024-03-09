import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const LoginPage = () => {
  return (
    <View style={styles.loginpage}>
      <Text style={styles.dontHaveAnContainer}>
        <Text style={styles.dontHaveAnAccount}>
          <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.signUp}>Sign up</Text>
      </Text>
      <View style={[styles.loginpageChild, styles.loginpageLayout]} />
      <View style={[styles.loginpageItem, styles.loginpageLayout]} />
      <View style={styles.loginpageInner} />
      <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Text style={[styles.enterEmail, styles.logInTypo]}>Enter email</Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Text style={[styles.forgetPassword, styles.passwordTypo]}>
        Forget password ?
      </Text>
      <Image
        style={[styles.loginpageChild1, styles.loginpageChildLayout]}
        contentFit="cover"
        source={require("../assets/group-3.png")}
      />
      <Image
        style={[styles.lock1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/lock-1.png")}
      />
      <Image
        style={[styles.loginpageChild2, styles.loginpageChildLayout]}
        contentFit="cover"
        source={require("../assets/group-4.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
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
          style={[styles.shorts2Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/shorts-2.png")}
        />
        <Text style={[styles.text1, styles.passwordTypo]}>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginpageLayout: {
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    opacity: 0.2,
    borderRadius: Border.br_lg,
    left: "9.23%",
    right: "8.21%",
    width: "82.56%",
    height: "8.18%",
    position: "absolute",
  },
  logInTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.productSans,
    textAlign: "center",
    position: "absolute",
  },
  iconLayout: {
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
  loginpageChildLayout: {
    width: "4.28%",
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
  dontHaveAn: {
    color: Color.colorDimgray_300,
  },
  text: {
    color: Color.colorSilver,
  },
  dontHaveAnAccount: {
    fontFamily: FontFamily.productSans,
  },
  signUp: {
    color: Color.colorGainsboro,
    fontWeight: "700",
    fontFamily: FontFamily.productSans,
  },
  dontHaveAnContainer: {
    top: "80.92%",
    left: "27.44%",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    position: "absolute",
  },
  loginpageChild: {
    top: "27.37%",
    bottom: "64.45%",
    opacity: 0.2,
  },
  loginpageItem: {
    top: "37.32%",
    bottom: "54.5%",
    opacity: 0.2,
  },
  loginpageInner: {
    top: "53.44%",
    bottom: "38.39%",
    backgroundColor: Color.colorCrimson,
    borderRadius: Border.br_lg,
    left: "9.23%",
    right: "8.21%",
    width: "82.56%",
    height: "8.18%",
    position: "absolute",
  },
  logIn: {
    top: "56.16%",
    left: "43.33%",
    fontWeight: "700",
  },
  vectorIcon: {
    height: "4.04%",
    width: "7.18%",
    top: "68.36%",
    right: "35.38%",
    bottom: "27.59%",
    left: "57.44%",
  },
  groupIcon: {
    height: "3.36%",
    width: "7.03%",
    top: "68.72%",
    right: "56.56%",
    bottom: "27.91%",
    left: "36.41%",
  },
  enterEmail: {
    top: "29.98%",
    left: "22.82%",
    opacity: 0.2,
  },
  password: {
    top: "39.93%",
    left: "21.79%",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    opacity: 0.2,
  },
  forgetPassword: {
    top: "47.75%",
    left: "58.97%",
    fontSize: 16,
    opacity: 0.2,
  },
  loginpageChild1: {
    height: "1.68%",
    top: "30.57%",
    right: "81.36%",
    bottom: "67.75%",
    left: "14.36%",
  },
  lock1Icon: {
    height: "2.37%",
    width: "5.13%",
    top: "40.17%",
    right: "81.03%",
    bottom: "57.46%",
    left: "13.85%",
  },
  loginpageChild2: {
    height: "1.98%",
    top: "40.4%",
    right: "13.15%",
    bottom: "57.62%",
    left: "82.56%",
  },
  vectorIcon1: {
    height: "1.56%",
    width: "1.51%",
    top: "4.86%",
    right: "87.46%",
    bottom: "93.58%",
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
  text1: {
    left: "23.36%",
    fontSize: FontSize.size_2xl,
    top: "3.13%",
  },
  vectorParent: {
    height: "3.79%",
    width: "54.87%",
    top: "17.42%",
    right: "23.33%",
    bottom: "78.79%",
    left: "21.79%",
    position: "absolute",
  },
  loginpage: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LoginPage;
