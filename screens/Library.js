import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Library = () => {
  return (
    <View style={styles.library}>
      <View style={styles.mViews5MinAgoParent}>
        <Text style={[styles.mViews, styles.mViewsTypo]}>
          8.2 M views . 5 min ago
        </Text>
        <Text style={[styles.amazonPrime, styles.mViewsTypo]}>
          Amazon prime
        </Text>
        <Image
          style={styles.subtractIcon}
          contentFit="cover"
          source={require("../assets/subtract15.png")}
        />
        <Text style={[styles.loremIpsumDolor, styles.home1Typo]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector46.png")}
        />
        <Image
          style={[styles.groupChild, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-34.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-13.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-13.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-13.png")}
        />
      </View>
      <Image
        style={styles.libraryChild}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <Image
        style={styles.subtractIcon1}
        contentFit="cover"
        source={require("../assets/subtract13.png")}
      />
      <Image
        style={styles.libraryItem}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <Image
        style={[styles.libraryInner, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group-141.png")}
      />
      <Image
        style={styles.library1Icon}
        contentFit="cover"
        source={require("../assets/library-1.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group-132.png")}
      />
      <Text style={styles.home}>Home</Text>
      <Text style={[styles.explore, styles.exploreTypo]}>Explore</Text>
      <Text style={[styles.channels, styles.exploreTypo]}>Channels</Text>
      <Text style={[styles.library1, styles.exploreTypo]}>Library</Text>
      <Image
        style={styles.subtractIcon2}
        contentFit="cover"
        source={require("../assets/subtract14.png")}
      />
      <Text style={styles.loremIpsumDolor1}>
        Lorem ipsum dolor sit amet, consectetur ...
      </Text>
      <Text style={styles.amazonPrime1}>Amazon prime</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector43.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector45.png")}
      />
      <Image
        style={[styles.libraryChild1, styles.libraryChildPosition2]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.libraryChild2, styles.libraryChildPosition2]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.libraryChild3, styles.libraryChildPosition2]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.libraryChild4, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.subscrib, styles.home1Typo]}>Subscrib</Text>
      <Image
        style={[styles.libraryChild5, styles.homeParentPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={[styles.libraryChild6, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/group-94.png")}
      />
      <Text style={[styles.biography, styles.newsTypo]}>Biography</Text>
      <View style={[styles.homeParent, styles.homeParentPosition]}>
        <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
        <Text style={[styles.video, styles.newsTypo]}>Video</Text>
        <Text style={[styles.video, styles.newsTypo]}>Playlist</Text>
        <Text style={[styles.video, styles.newsTypo]}>Community</Text>
        <Text style={[styles.video, styles.newsTypo]}>Channels</Text>
        <Text style={[styles.video, styles.newsTypo]}>About us</Text>
      </View>
      <Text style={[styles.news, styles.newsTypo]}>News</Text>
      <Text style={[styles.kSubscribers, styles.newsTypo]}>
        1.2 k Subscribers . 42 videos
      </Text>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector47.png")}
      />
      <View style={styles.lineView} />
      <Text style={[styles.mViews1, styles.viewsTypo]}>
        8.2 M views . 5 min ago
      </Text>
      <Text style={[styles.mViews2, styles.viewsTypo]}>
        8.2 M views . 5 min ago
      </Text>
      <Text style={[styles.mViews3, styles.viewsTypo]}>
        8.2 M views . 5 min ago
      </Text>
      <Text style={[styles.amazonPrime2, styles.amazonTypo]}>Amazon prime</Text>
      <Text style={styles.amazonPrime3}>Amazon prime</Text>
      <Text style={[styles.amazonPrime4, styles.amazonTypo]}>Amazon prime</Text>
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract16.png")}
      />
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract17.png")}
      />
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract18.png")}
      />
      <Text style={[styles.loremIpsumDolor2, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Text>
      <Text style={[styles.loremIpsumDolor3, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Text>
      <Text style={[styles.loremIpsumDolor4, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Text>
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector46.png")}
      />
      <Image
        style={styles.vectorIcon5}
        contentFit="cover"
        source={require("../assets/vector48.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector46.png")}
      />
      <Image
        style={[styles.libraryChild7, styles.libraryChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-34.png")}
      />
      <Image
        style={styles.libraryChild8}
        contentFit="cover"
        source={require("../assets/ellipse-231.png")}
      />
      <Image
        style={[styles.libraryChild9, styles.libraryChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-34.png")}
      />
      <Image
        style={[styles.libraryChild10, styles.libraryChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.libraryChild11, styles.libraryChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.libraryChild12, styles.libraryChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.libraryChild13, styles.libraryChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.libraryChild14, styles.libraryChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.libraryChild15, styles.libraryChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.libraryChild16, styles.libraryChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.libraryChild17, styles.libraryChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.libraryChild18, styles.libraryChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.hiconLinearClose, styles.libraryChildPosition2]}
        contentFit="cover"
        source={require("../assets/hicon--linear--close.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mViewsTypo: {
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  home1Typo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 3,
    width: 3,
  },
  groupIconPosition: {
    top: "93.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  exploreTypo: {
    color: Color.colorDimgray_200,
    top: "96.92%",
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  libraryChildPosition2: {
    left: 322,
    position: "absolute",
  },
  homeParentPosition: {
    left: 43,
    position: "absolute",
  },
  newsTypo: {
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
  },
  viewsTypo: {
    width: "30.78%",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  amazonTypo: {
    left: "64.09%",
    width: "19.74%",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  loremTypo: {
    width: "35.64%",
    color: Color.colorWhite,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  vectorIconLayout: {
    left: "48.2%",
    right: "50%",
    width: "1.8%",
    height: "0.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  libraryChildLayout: {
    right: "38.2%",
    width: "4.37%",
    height: "2.01%",
    left: "57.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  libraryChildPosition1: {
    left: 337,
    height: 3,
    width: 3,
    position: "absolute",
  },
  libraryChildPosition: {
    left: 336,
    height: 3,
    width: 3,
    position: "absolute",
  },
  mViews: {
    width: "37.63%",
    top: "84.69%",
    left: "56.43%",
  },
  amazonPrime: {
    width: "24.14%",
    left: "64.57%",
    top: "63.27%",
  },
  subtractIcon: {
    width: 155,
    height: 94,
    borderRadius: Border.br_lg,
  },
  loremIpsumDolor: {
    width: "43.57%",
    top: "3.06%",
    fontWeight: "700",
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    left: "56.43%",
    position: "absolute",
  },
  vectorIcon: {
    height: "8.16%",
    width: "2.2%",
    top: "91.84%",
    right: "52.65%",
    bottom: "0%",
    left: "45.14%",
  },
  groupChild: {
    height: "17.35%",
    width: "5.34%",
    right: "38.23%",
    bottom: "19.39%",
    top: "63.27%",
    left: "56.43%",
  },
  groupItem: {
    top: 70,
    left: 296,
    height: 3,
    width: 3,
    position: "absolute",
  },
  groupInner: {
    top: 75,
    left: 296,
    height: 3,
    width: 3,
    position: "absolute",
  },
  ellipseIcon: {
    top: 80,
    left: 296,
    height: 3,
    width: 3,
    position: "absolute",
  },
  mViews5MinAgoParent: {
    height: "11.61%",
    width: "81.79%",
    top: "80.57%",
    right: "6.94%",
    bottom: "7.82%",
    left: "11.28%",
    position: "absolute",
  },
  libraryChild: {
    top: 0,
    left: 0,
    borderTopLeftRadius: Border.br_26xl,
    borderTopRightRadius: Border.br_26xl,
    height: 196,
    width: 390,
    position: "absolute",
  },
  subtractIcon1: {
    height: 161,
    width: 390,
    borderRadius: Border.br_26xl,
  },
  libraryItem: {
    top: 786,
    left: 48,
    width: 26,
    height: 26,
    position: "absolute",
  },
  libraryInner: {
    height: "2.83%",
    width: "5.71%",
    right: "63.27%",
    bottom: "3.92%",
    left: "31.02%",
  },
  library1Icon: {
    top: 784,
    left: 295,
    width: 29,
    height: 29,
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    height: "2.74%",
    width: "5.73%",
    right: "31.19%",
    bottom: "4.02%",
    left: "63.08%",
  },
  home: {
    width: "8.19%",
    left: "11.8%",
    top: "96.92%",
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  explore: {
    width: "9.99%",
    left: "28.73%",
  },
  channels: {
    width: "12.56%",
    left: "58.71%",
  },
  library1: {
    width: "9.48%",
    left: "80.01%",
  },
  subtractIcon2: {
    width: 122,
    height: 73,
    borderRadius: Border.br_lg,
  },
  loremIpsumDolor1: {
    width: "36.67%",
    top: "83.53%",
    left: "44.35%",
    color: Color.colorWhite,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  amazonPrime1: {
    top: "88.03%",
    width: "19.74%",
    left: "44.35%",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  vectorIcon1: {
    height: "1.9%",
    width: "3.85%",
    top: "86.97%",
    right: "16.93%",
    bottom: "11.14%",
    left: "79.22%",
  },
  vectorIcon2: {
    height: "1.56%",
    width: "1.53%",
    top: "5.33%",
    right: "87.44%",
    bottom: "93.1%",
    left: "11.03%",
  },
  libraryChild1: {
    top: 45,
    height: 3,
    width: 3,
  },
  libraryChild2: {
    top: 50,
    height: 3,
    width: 3,
  },
  libraryChild3: {
    top: 55,
    height: 3,
    width: 3,
  },
  libraryChild4: {
    height: "7.58%",
    width: "16.41%",
    top: "19.31%",
    right: "11.28%",
    bottom: "73.1%",
    left: "72.31%",
  },
  rectangleView: {
    top: 175,
    left: 86,
    backgroundColor: Color.colorCrimson,
    width: 97,
    height: 42,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  subscrib: {
    width: "11.8%",
    top: "22.27%",
    left: "29.49%",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  libraryChild5: {
    top: 181,
    width: 30,
    height: 30,
  },
  libraryChild6: {
    height: "2.37%",
    width: "5.13%",
    top: "22.04%",
    right: "82.55%",
    bottom: "75.59%",
    left: "12.32%",
  },
  biography: {
    width: "13.6%",
    top: "27.96%",
    color: Color.colorDarkgray,
    position: "absolute",
    left: "11.03%",
  },
  home1: {
    fontWeight: "700",
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
  },
  video: {
    marginLeft: 22,
  },
  homeParent: {
    top: 272,
    flexDirection: "row",
  },
  news: {
    width: "7.7%",
    top: "37.32%",
    left: "11.03%",
    position: "absolute",
  },
  kSubscribers: {
    width: "36.92%",
    left: "33.59%",
    top: "27.96%",
    color: Color.colorDarkgray,
    position: "absolute",
  },
  vectorIcon3: {
    height: "0.59%",
    width: "2.81%",
    top: "28.79%",
    right: "70.51%",
    bottom: "70.62%",
    left: "26.68%",
  },
  lineView: {
    top: 291,
    left: 52,
    borderStyle: "solid",
    borderColor: Color.colorCrimson,
    borderTopWidth: 2,
    width: 15,
    height: 2,
    position: "absolute",
  },
  mViews1: {
    top: "50.71%",
    left: "57.43%",
  },
  mViews2: {
    top: "63.63%",
    left: "57.18%",
  },
  mViews3: {
    top: "77.01%",
    left: "57.43%",
  },
  amazonPrime2: {
    top: "48.22%",
  },
  amazonPrime3: {
    left: "63.84%",
    top: "61.14%",
    width: "19.74%",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  amazonPrime4: {
    top: "74.53%",
  },
  loremIpsumDolor2: {
    top: "41.23%",
    left: "57.43%",
  },
  loremIpsumDolor3: {
    top: "54.15%",
    left: "57.18%",
  },
  loremIpsumDolor4: {
    top: "67.54%",
    left: "57.43%",
  },
  vectorIcon4: {
    top: "51.54%",
    bottom: "47.51%",
  },
  vectorIcon5: {
    top: "64.45%",
    right: "50.25%",
    bottom: "34.6%",
    left: "47.95%",
    width: "1.8%",
    height: "0.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon6: {
    top: "77.84%",
    bottom: "21.21%",
  },
  libraryChild7: {
    bottom: "49.76%",
    top: "48.22%",
  },
  libraryChild8: {
    right: "38.45%",
    bottom: "36.85%",
    width: "4.37%",
    height: "2.01%",
    top: "61.14%",
    left: "57.18%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  libraryChild9: {
    bottom: "23.46%",
    top: "74.53%",
  },
  libraryChild10: {
    top: 415,
  },
  libraryChild11: {
    top: 524,
  },
  libraryChild12: {
    top: 637,
  },
  libraryChild13: {
    top: 420,
  },
  libraryChild14: {
    top: 529,
  },
  libraryChild15: {
    top: 642,
  },
  libraryChild16: {
    top: 425,
  },
  libraryChild17: {
    top: 534,
  },
  libraryChild18: {
    top: 647,
  },
  hiconLinearClose: {
    top: 732,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  library: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_26xl,
  },
});

export default Library;
