import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomePage = () => {
  return (
    <View style={styles.homepage}>
      <View style={styles.homepageChild} />
      <Image
        style={[styles.vectorIcon, styles.homepageLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.homepageItem, styles.homepageLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.homepageInner, styles.homepageChildLayout3]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.homepageChildLayout3]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.homepageChild1, styles.homepageChildLayout3]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.homepageChild2, styles.homepageChildLayout3]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.homepageChild3, styles.homepageChildLayout3]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.homepageChild4, styles.homepageChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={[styles.homepageChild5, styles.homepageChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={[styles.homepageChild6, styles.homepageChildLayout3]}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={[styles.homepageChild7, styles.homepageChildLayout3]}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-9.png")}
      />
      <Image
        style={[styles.homepageChild8, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-8.png")}
      />
      <Image
        style={[styles.homepageChild9, styles.homepageLayout]}
        contentFit="cover"
        source={require("../assets/group-10.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <Text style={[styles.text, styles.textTypo]}>+</Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout3]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout3]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconLayout3]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.vectorIcon8, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.homepageChild10, styles.homepageChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.homepageChild11, styles.homepageChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.homepageChild12, styles.homepageChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Text style={[styles.all, styles.designerTypo]}>All</Text>
      <Text style={[styles.game, styles.designerTypo]}>Game</Text>
      <Text style={[styles.loremIpsumDolor, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Text>
      <Text style={[styles.loremIpsumDolor1, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Text>
      <Text style={[styles.adel82, styles.adel82Typo]}>
        Adel . 8.2 M views . 5 min ago
      </Text>
      <Text style={[styles.amazonPrime, styles.adel82Typo]}>
        Amazon prime . 8.2 M views . 5 min ago
      </Text>
      <Text style={[styles.ui, styles.designerTypo]}>Ui</Text>
      <Text style={[styles.figma, styles.designerTypo]}>figma</Text>
      <Text style={[styles.uiDesigner, styles.designerTypo]}>Ui designer</Text>
      <Text style={[styles.uxDesigner, styles.designerTypo]}>Ux designer</Text>
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract.png")}
      />
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract1.png")}
      />
      <View style={[styles.homepageChild13, styles.rectangleViewBg]} />
      <Text style={styles.live}>live</Text>
      <Image
        style={[styles.homepageChild14, styles.homepageChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.homepageChild15, styles.homepageChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.homepageChild16, styles.homepageChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.homepageChild17, styles.homepageChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.homepageChild18, styles.homepageChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.homepageChild19, styles.homepageChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={styles.subtractIcon2}
        contentFit="cover"
        source={require("../assets/subtract2.png")}
      />
      <Image
        style={styles.homepageChild20}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>+</Text>
      <Image
        style={styles.homepageChild21}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <Image
        style={[styles.homepageChild22, styles.homepageChildPosition]}
        contentFit="cover"
        source={require("../assets/group-14.png")}
      />
      <Image
        style={styles.library1Icon}
        contentFit="cover"
        source={require("../assets/library-1.png")}
      />
      <Image
        style={[styles.homepageChild23, styles.homepageChildPosition]}
        contentFit="cover"
        source={require("../assets/group-13.png")}
      />
      <Text style={styles.home}>Home</Text>
      <Text style={[styles.explore, styles.exploreTypo]}>Explore</Text>
      <Text style={[styles.channels, styles.exploreTypo]}>Channels</Text>
      <Text style={[styles.library, styles.exploreTypo]}>Library</Text>
      <Image
        style={[styles.vectorIcon9, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={[styles.vectorIcon10, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homepageLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homepageChildLayout3: {
    bottom: "83.53%",
    top: "11.26%",
    width: "11.28%",
    height: "5.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homepageChildLayout2: {
    left: "11.54%",
    right: "81.03%",
    width: "7.44%",
    height: "3.44%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout: {
    bottom: "93.13%",
    top: "4.03%",
    height: "2.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.15%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleViewBg: {
    backgroundColor: Color.colorCrimson,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  vectorIconLayout3: {
    top: "4.86%",
    height: "1.07%",
    bottom: "94.08%",
    width: "1.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout2: {
    top: "5.21%",
    height: "0.71%",
    bottom: "94.08%",
    width: "1.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout1: {
    width: "1.28%",
    top: "5.21%",
    height: "0.71%",
    bottom: "94.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homepageChildLayout1: {
    bottom: "87.91%",
    top: "11.61%",
    width: "1.03%",
    height: "0.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  designerTypo: {
    fontSize: FontSize.size_smi,
    top: "19.91%",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  loremTypo: {
    fontWeight: "700",
    left: "21.54%",
    width: "61.79%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  adel82Typo: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    left: "21.54%",
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  homepageChildLayout: {
    height: 3,
    width: 3,
    left: 346,
    position: "absolute",
  },
  homepageChildPosition: {
    top: "93.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  exploreTypo: {
    color: Color.colorDimgray_200,
    top: "96.92%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  vectorIconLayout: {
    left: "80.77%",
    right: "15.9%",
    width: "3.33%",
    height: "1.66%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homepageChild: {
    height: "2.61%",
    width: "9.74%",
    top: "19.67%",
    right: "81.28%",
    bottom: "77.73%",
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_lg,
    left: "8.97%",
    position: "absolute",
  },
  vectorIcon: {
    height: "1.9%",
    top: "4.5%",
    right: "84.87%",
    bottom: "93.6%",
    width: "6.15%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "8.97%",
  },
  vectorIcon1: {
    height: "0.83%",
    top: "5.09%",
    right: "87.18%",
    left: "11.28%",
    bottom: "94.08%",
    width: "1.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homepageItem: {
    height: "5.57%",
    width: "12.05%",
    top: "2.73%",
    right: "8.21%",
    bottom: "91.71%",
    left: "79.74%",
  },
  homepageInner: {
    right: "79.74%",
    left: "8.97%",
  },
  ellipseIcon: {
    right: "65.9%",
    left: "22.82%",
  },
  homepageChild1: {
    right: "52.05%",
    left: "36.67%",
  },
  homepageChild2: {
    right: "38.21%",
    left: "50.51%",
  },
  homepageChild3: {
    right: "24.36%",
    left: "64.36%",
  },
  homepageChild4: {
    top: "48.46%",
    bottom: "48.1%",
  },
  homepageChild5: {
    top: "80.21%",
    bottom: "16.35%",
  },
  homepageChild6: {
    right: "10.51%",
    left: "78.21%",
  },
  homepageChild7: {
    right: "-3.33%",
    left: "92.05%",
  },
  groupIcon: {
    right: "23.85%",
    left: "70%",
  },
  homepageChild8: {
    right: "33.59%",
    left: "60.26%",
  },
  homepageChild9: {
    height: "2.52%",
    width: "4.36%",
    top: "12.56%",
    right: "83.08%",
    bottom: "84.92%",
    left: "12.56%",
  },
  rectangleView: {
    width: "3.08%",
    top: "15.17%",
    right: "79.49%",
    bottom: "83.77%",
    borderRadius: 3,
    left: "17.44%",
    height: "1.07%",
    backgroundColor: Color.colorCrimson,
  },
  text: {
    top: "14.81%",
    left: "18.21%",
    fontSize: FontSize.size_3xs,
  },
  vectorIcon2: {
    right: "82.05%",
    left: "16.41%",
  },
  vectorIcon3: {
    right: "80.51%",
    left: "17.95%",
  },
  vectorIcon4: {
    right: "78.97%",
    left: "19.74%",
  },
  vectorIcon5: {
    right: "77.44%",
    left: "21.03%",
  },
  vectorIcon6: {
    right: "76.15%",
    left: "22.31%",
  },
  vectorIcon7: {
    right: "74.36%",
    left: "24.1%",
  },
  vectorIcon8: {
    right: "72.82%",
    left: "25.9%",
  },
  homepageChild10: {
    right: "67.18%",
    left: "31.79%",
  },
  homepageChild11: {
    right: "39.49%",
    left: "59.49%",
  },
  homepageChild12: {
    right: "11.79%",
    left: "87.18%",
  },
  all: {
    left: "12.05%",
  },
  game: {
    left: "23.08%",
  },
  loremIpsumDolor: {
    top: "48.22%",
  },
  loremIpsumDolor1: {
    top: "79.98%",
  },
  adel82: {
    top: "52.37%",
  },
  amazonPrime: {
    top: "84.12%",
  },
  ui: {
    left: "39.49%",
  },
  figma: {
    left: "50%",
  },
  uiDesigner: {
    left: "65.9%",
  },
  uxDesigner: {
    left: "89.74%",
  },
  subtractIcon: {
    width: 321,
    height: 182,
    borderRadius: Border.br_lg,
  },
  homepageChild13: {
    top: 231,
    left: 56,
    width: 41,
    height: 22,
    borderRadius: Border.br_lg,
  },
  live: {
    top: "27.73%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.productSans,
    left: "17.44%",
    position: "absolute",
  },
  homepageChild14: {
    top: 416,
  },
  homepageChild15: {
    top: 684,
  },
  homepageChild16: {
    top: 421,
  },
  homepageChild17: {
    top: 689,
  },
  homepageChild18: {
    top: 426,
  },
  homepageChild19: {
    top: 694,
  },
  subtractIcon2: {
    width: 375,
    height: 74,
    borderRadius: Border.br_26xl,
  },
  homepageChild20: {
    top: 747,
    left: 179,
    width: 32,
    height: 32,
    position: "absolute",
  },
  text1: {
    top: "88.74%",
    left: "48.46%",
    fontSize: FontSize.size_2xl,
  },
  homepageChild21: {
    top: 786,
    left: 48,
    width: 26,
    height: 26,
    position: "absolute",
  },
  homepageChild22: {
    height: "2.83%",
    width: "5.69%",
    right: "63.28%",
    bottom: "3.92%",
    left: "31.03%",
  },
  library1Icon: {
    top: 784,
    left: 316,
    width: 29,
    height: 29,
    position: "absolute",
    overflow: "hidden",
  },
  homepageChild23: {
    height: "2.74%",
    width: "5.72%",
    right: "31.21%",
    bottom: "4.02%",
    left: "63.08%",
  },
  home: {
    left: "11.79%",
    top: "96.92%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  explore: {
    left: "28.72%",
  },
  channels: {
    left: "58.72%",
  },
  library: {
    left: "80%",
  },
  vectorIcon9: {
    top: "46.09%",
    bottom: "52.25%",
  },
  vectorIcon10: {
    top: "77.96%",
    bottom: "20.38%",
  },
  homepage: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_26xl,
  },
});

export default HomePage;
