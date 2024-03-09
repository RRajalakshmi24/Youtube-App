import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Container from "../components/Container";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const VideoPlay = () => {
  return (
    <View style={styles.videoplay}>
      <Image
        style={[styles.videoplayChild, styles.videoplayLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.videoplayItem, styles.videoplayLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.videoplayInner, styles.videoplayLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Container />
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract2.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Text style={styles.text}>+</Text>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-111.png")}
      />
      <Image
        style={[styles.videoplayChild1, styles.vectorIconLayout3]}
        contentFit="cover"
        source={require("../assets/group-14.png")}
      />
      <Image
        style={styles.library1Icon}
        contentFit="cover"
        source={require("../assets/library-11.png")}
      />
      <Image
        style={[styles.videoplayChild2, styles.vectorIconLayout3]}
        contentFit="cover"
        source={require("../assets/group-13.png")}
      />
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.explore, styles.exploreTypo]}>Explore</Text>
      <Text style={[styles.channels, styles.exploreTypo]}>Channels</Text>
      <Text style={[styles.library, styles.exploreTypo]}>Library</Text>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout3]}
        contentFit="cover"
        source={require("../assets/vector22.png")}
      />
      <Image
        style={styles.videoplayChild3}
        contentFit="cover"
        source={require("../assets/group-15.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector23.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector24.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector25.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector26.png")}
      />
      <View style={[styles.lineView, styles.lineViewPosition]} />
      <View style={[styles.videoplayChild4, styles.lineViewPosition]} />
      <Text style={[styles.text1, styles.textTypo]}>2:24</Text>
      <Text style={[styles.text2, styles.textTypo]}>5:24</Text>
      <View style={styles.rectangleView} />
      <Text style={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Text>
      <Image
        style={[styles.videoplayChild5, styles.maybeYouLikePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={[styles.amazonPrime, styles.viewsTypo]}>
        Amazon prime . 8.2 M views . 5 min ago
      </Text>
      <Text style={[styles.mViews, styles.viewsTypo]}>
        8.2 M views . 5 min ago
      </Text>
      <Text style={[styles.mViews1, styles.viewsTypo]}>
        8.2 M views . 5 min ago
      </Text>
      <Text style={[styles.amazonPrime1, styles.viewsTypo]}>Amazon prime</Text>
      <Text style={[styles.amazonPrime2, styles.viewsTypo]}>Amazon prime</Text>
      <Text style={[styles.maybeYouLike, styles.maybeYouLikePosition]}>
        Maybe you like that
      </Text>
      <Text style={[styles.k, styles.kTypo]}>1.4k</Text>
      <Text style={[styles.k1, styles.kTypo]}>1.4k</Text>
      <Text style={[styles.share, styles.kTypo]}>Share</Text>
      <Text style={[styles.download, styles.kTypo]}>Download</Text>
      <Text style={[styles.save, styles.kTypo]}>Save</Text>
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout3]}
        contentFit="cover"
        source={require("../assets/vector27.png")}
      />
      <View style={styles.groupParent}>
        <Image
          style={styles.frameLayout}
          contentFit="cover"
          source={require("../assets/group-20.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/group-19.png")}
        />
        <Image
          style={styles.frameInner}
          contentFit="cover"
          source={require("../assets/group-18.png")}
        />
        <Image
          style={styles.frameChild1}
          contentFit="cover"
          source={require("../assets/group-17.png")}
        />
        <Image
          style={styles.frameChild2}
          contentFit="cover"
          source={require("../assets/group-16.png")}
        />
      </View>
      <View style={styles.videoplayChild6} />
      <Text style={[styles.subscrib, styles.homeTypo]}>Subscrib</Text>
      <Image
        style={styles.videoplayChild7}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={[styles.videoplayChild8, styles.vectorIconLayout3]}
        contentFit="cover"
        source={require("../assets/group-91.png")}
      />
      <Image
        style={styles.subtractIcon1}
        contentFit="cover"
        source={require("../assets/subtract4.png")}
      />
      <Image
        style={styles.subtractIcon1}
        contentFit="cover"
        source={require("../assets/subtract5.png")}
      />
      <Text style={[styles.loremIpsumDolor1, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Text>
      <Text style={[styles.loremIpsumDolor2, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Text>
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector21.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector21.png")}
      />
      <Image
        style={[styles.videoplayChild9, styles.videoplayChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={[styles.videoplayChild10, styles.videoplayChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={[styles.vectorIcon8, styles.vectorIconLayout3]}
        contentFit="cover"
        source={require("../assets/vector28.png")}
      />
      <Image
        style={[styles.vectorIcon9, styles.vectorIcon9Position]}
        contentFit="cover"
        source={require("../assets/vector29.png")}
      />
      <Image
        style={[styles.vectorIcon10, styles.vectorIconLayout3]}
        contentFit="cover"
        source={require("../assets/vector30.png")}
      />
      <Image
        style={[styles.videoplayChild11, styles.vectorIcon9Position]}
        contentFit="cover"
        source={require("../assets/group-22.png")}
      />
      <Image
        style={[styles.videoplayChild12, styles.videoplayChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.videoplayChild13, styles.videoplayChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.videoplayChild14, styles.videoplayChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.videoplayChild15, styles.videoplayChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.videoplayChild16, styles.videoplayChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.videoplayChild17, styles.videoplayChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  videoplayLayout: {
    height: 3,
    width: 3,
    left: 349,
    position: "absolute",
  },
  vectorIconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
  },
  exploreTypo: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xs,
    top: "96.92%",
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  vectorIconLayout2: {
    left: "88.92%",
    right: "9.59%",
    width: "1.49%",
    height: "0.69%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    bottom: "75.44%",
    top: "23.87%",
  },
  vectorIconLayout1: {
    left: "86.15%",
    right: "12.36%",
    width: "1.49%",
    height: "0.69%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineViewPosition: {
    height: 2,
    borderTopWidth: 2,
    borderStyle: "solid",
    left: -1,
    top: 220,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorWhitesmoke_300,
    top: 192,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  maybeYouLikePosition: {
    left: "8.97%",
    position: "absolute",
  },
  viewsTypo: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  kTypo: {
    top: "40.05%",
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  frameLayout: {
    height: 16,
    width: 16,
  },
  loremTypo: {
    width: "35.64%",
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  vectorIconLayout: {
    width: "1.79%",
    height: "0.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  videoplayChildLayout: {
    width: "4.36%",
    height: "2.01%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon9Position: {
    bottom: "83.68%",
    top: "14.57%",
    height: "1.74%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  videoplayChildPosition1: {
    left: 352,
    height: 3,
    width: 3,
    position: "absolute",
  },
  videoplayChildPosition: {
    left: 351,
    height: 3,
    width: 3,
    position: "absolute",
  },
  videoplayChild: {
    top: 768,
  },
  videoplayItem: {
    top: 773,
  },
  videoplayInner: {
    top: 778,
  },
  subtractIcon: {
    width: 375,
    height: 74,
    borderRadius: Border.br_26xl,
  },
  ellipseIcon: {
    top: 747,
    left: 179,
    width: 32,
    height: 32,
    position: "absolute",
  },
  text: {
    top: "88.74%",
    left: "48.46%",
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    color: Color.colorWhite,
    position: "absolute",
  },
  groupIcon: {
    top: 786,
    left: 48,
    width: 26,
    height: 26,
    position: "absolute",
  },
  videoplayChild1: {
    height: "2.83%",
    width: "5.69%",
    right: "63.28%",
    bottom: "3.92%",
    left: "31.03%",
    top: "93.25%",
    maxWidth: "100%",
  },
  library1Icon: {
    top: 784,
    left: 316,
    width: 29,
    height: 29,
    position: "absolute",
    overflow: "hidden",
  },
  videoplayChild2: {
    height: "2.74%",
    width: "5.72%",
    right: "31.21%",
    bottom: "4.02%",
    left: "63.08%",
    top: "93.25%",
    maxWidth: "100%",
  },
  home: {
    left: "11.79%",
    top: "96.92%",
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
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
  rectangleIcon: {
    top: 0,
    left: -7,
    borderTopLeftRadius: Border.br_26xl,
    borderTopRightRadius: Border.br_26xl,
    width: 403,
    height: 221,
    position: "absolute",
  },
  vectorIcon: {
    height: "0.7%",
    width: "3.38%",
    top: "3.55%",
    right: "86.36%",
    bottom: "95.75%",
    left: "10.26%",
  },
  videoplayChild3: {
    width: "4.59%",
    top: "2.61%",
    right: "8.74%",
    bottom: "95.38%",
    left: "86.67%",
    height: "2.01%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    bottom: "76.56%",
    top: "22.75%",
  },
  vectorIcon2: {
    left: "88.92%",
    right: "9.59%",
    width: "1.49%",
    height: "0.69%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon3: {
    bottom: "75.44%",
    top: "23.87%",
  },
  vectorIcon4: {
    bottom: "76.56%",
    top: "22.75%",
  },
  lineView: {
    borderColor: "#7c7c7c",
    width: 392,
  },
  videoplayChild4: {
    borderColor: Color.colorCrimson,
    width: 139,
  },
  text1: {
    left: 35,
  },
  text2: {
    left: 300,
  },
  rectangleView: {
    top: 221,
    left: 0,
    borderBottomRightRadius: Border.br_51xl,
    borderBottomLeftRadius: Border.br_51xl,
    backgroundColor: "#202020",
    width: 390,
    height: 206,
    position: "absolute",
  },
  loremIpsumDolor: {
    width: "69.49%",
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    left: "18.72%",
    top: "27.49%",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  videoplayChild5: {
    height: "3.91%",
    width: "8.46%",
    right: "82.56%",
    bottom: "68.6%",
    top: "27.49%",
    left: "8.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  amazonPrime: {
    top: "31.99%",
    left: "18.72%",
    color: Color.colorDimgray_100,
  },
  mViews: {
    top: "67.77%",
    left: "55.13%",
  },
  mViews1: {
    top: "80.69%",
    left: "54.87%",
  },
  amazonPrime1: {
    left: "61.79%",
    top: "65.28%",
  },
  amazonPrime2: {
    left: "61.54%",
    top: "78.2%",
  },
  maybeYouLike: {
    top: "54.15%",
    color: "#fafafa",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
  },
  k: {
    left: "9.23%",
  },
  k1: {
    left: "29.23%",
  },
  share: {
    left: "45.9%",
  },
  download: {
    left: "61.28%",
  },
  save: {
    left: "84.36%",
  },
  vectorIcon5: {
    height: "0.47%",
    width: "2.56%",
    top: "31.28%",
    right: "10.51%",
    bottom: "68.25%",
    left: "86.92%",
  },
  frameItem: {
    marginLeft: 56,
  },
  frameInner: {
    width: 15,
    height: 15,
    marginLeft: 56,
  },
  frameChild1: {
    width: 20,
    height: 20,
    marginLeft: 56,
  },
  frameChild2: {
    width: 17,
    height: 17,
    marginLeft: 56,
  },
  groupParent: {
    top: 310,
    left: 41,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  videoplayChild6: {
    top: 370,
    left: 170,
    backgroundColor: Color.colorCrimson,
    width: 97,
    height: 42,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  subscrib: {
    top: "45.38%",
    left: "50.26%",
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  videoplayChild7: {
    top: 376,
    left: 124,
    width: 30,
    height: 30,
    position: "absolute",
  },
  videoplayChild8: {
    height: "2.37%",
    width: "5.13%",
    top: "45.14%",
    right: "61.79%",
    bottom: "52.49%",
    left: "33.08%",
  },
  subtractIcon1: {
    width: 165,
    height: 94,
    borderRadius: Border.br_lg,
  },
  loremIpsumDolor1: {
    top: "58.29%",
    left: "55.13%",
  },
  loremIpsumDolor2: {
    top: "71.21%",
    left: "54.87%",
  },
  vectorIcon6: {
    top: "68.6%",
    right: "52.31%",
    bottom: "30.45%",
    left: "45.9%",
  },
  vectorIcon7: {
    top: "81.52%",
    right: "52.56%",
    bottom: "17.54%",
    left: "45.64%",
  },
  videoplayChild9: {
    right: "40.51%",
    bottom: "32.7%",
    top: "65.28%",
    left: "55.13%",
  },
  videoplayChild10: {
    right: "40.77%",
    bottom: "19.79%",
    top: "78.2%",
    left: "54.87%",
  },
  vectorIcon8: {
    height: "2.31%",
    width: "4.74%",
    top: "14.22%",
    right: "47.56%",
    bottom: "83.47%",
    left: "47.69%",
  },
  vectorIcon9: {
    width: "3.44%",
    right: "64.31%",
    left: "32.26%",
  },
  vectorIcon10: {
    height: "1.65%",
    width: "0.38%",
    top: "14.62%",
    right: "68.33%",
    bottom: "83.73%",
    left: "31.28%",
  },
  videoplayChild11: {
    width: "4.41%",
    right: "31.23%",
    left: "64.36%",
  },
  videoplayChild12: {
    top: 559,
  },
  videoplayChild13: {
    top: 668,
  },
  videoplayChild14: {
    top: 564,
  },
  videoplayChild15: {
    top: 673,
  },
  videoplayChild16: {
    top: 569,
  },
  videoplayChild17: {
    top: 678,
  },
  videoplay: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_26xl,
  },
});

export default VideoPlay;
