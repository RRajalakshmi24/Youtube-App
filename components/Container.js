import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Container = () => {
  return (
    <View style={styles.mViews5MinAgoParent}>
      <Text style={[styles.mViews, styles.mViewsTypo]}>
        8.2 M views . 5 min ago
      </Text>
      <Text style={[styles.amazonPrime, styles.mViewsTypo]}>Amazon prime</Text>
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract3.png")}
      />
      <Text style={[styles.loremIpsumDolor, styles.mViewsTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector21.png")}
      />
      <Image
        style={[styles.groupChild, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mViewsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  mViews: {
    top: "84.69%",
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    left: "56.43%",
  },
  amazonPrime: {
    left: "64.58%",
    top: "63.27%",
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
  },
  subtractIcon: {
    borderRadius: Border.br_lg,
    width: 165,
    height: 94,
  },
  loremIpsumDolor: {
    width: "43.57%",
    top: "3.06%",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    left: "56.43%",
  },
  vectorIcon: {
    height: "8.16%",
    width: "2.19%",
    top: "91.84%",
    right: "52.66%",
    bottom: "0%",
    left: "45.14%",
  },
  groupChild: {
    height: "17.35%",
    width: "5.33%",
    right: "38.24%",
    bottom: "19.39%",
    top: "63.27%",
    left: "56.43%",
  },
  mViews5MinAgoParent: {
    height: "11.61%",
    width: "81.79%",
    top: "83.77%",
    right: "9.49%",
    bottom: "4.62%",
    left: "8.72%",
    position: "absolute",
  },
});

export default Container;
