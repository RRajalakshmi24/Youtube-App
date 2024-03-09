import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Explore = () => {
  return (
    <View style={styles.explore}>
      <View style={styles.mViews5MinAgoParent}>
        <Text style={[styles.mViews, styles.mViewsTypo]}>
          8.2 M views . 5 min ago
        </Text>
        <Text style={[styles.amazonPrime, styles.groupChildPosition]}>
          Amazon prime
        </Text>
        <Image
          style={styles.subtractIcon}
          contentFit="cover"
          source={require("../assets/subtract19.png")}
        />
        <Text style={[styles.loremIpsumDolor, styles.explore2Typo]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Text>
        <Image
          style={[styles.vectorIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/vector49.png")}
        />
        <Image
          style={[styles.groupChild, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-341.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-13.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-13.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-13.png")}
        />
      </View>
      <Image
        style={styles.subtractIcon1}
        contentFit="cover"
        source={require("../assets/subtract13.png")}
      />
      <Image
        style={styles.exploreChild}
        contentFit="cover"
        source={require("../assets/group-111.png")}
      />
      <Image
        style={[styles.exploreItem, styles.explorePosition]}
        contentFit="cover"
        source={require("../assets/group-142.png")}
      />
      <Image
        style={styles.library1Icon}
        contentFit="cover"
        source={require("../assets/library-11.png")}
      />
      <Image
        style={[styles.exploreInner, styles.explorePosition]}
        contentFit="cover"
        source={require("../assets/group-132.png")}
      />
      <Text style={styles.home}>Home</Text>
      <Text style={[styles.explore1, styles.libraryTypo]}>Explore</Text>
      <Text style={[styles.channels, styles.libraryTypo]}>Channels</Text>
      <Text style={[styles.library, styles.libraryTypo]}>Library</Text>
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
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector50.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.explore2Position]}
        contentFit="cover"
        source={require("../assets/vector45.png")}
      />
      <Image
        style={[styles.exploreChild1, styles.exploreChildPosition3]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.exploreChild2, styles.exploreChildPosition3]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.exploreChild3, styles.exploreChildPosition3]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Text style={[styles.explore2, styles.explore2Position]}>Explore</Text>
      <Text style={[styles.searchChannels, styles.groupIconPosition]}>
        Search channels
      </Text>
      <Text style={styles.trend}>Trend</Text>
      <Text style={[styles.music, styles.gameTypo]}>Music</Text>
      <Text style={[styles.game, styles.gameTypo]}>Game</Text>
      <Text style={[styles.learning, styles.gameTypo]}>Learning</Text>
      <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
      <View style={[styles.exploreChild4, styles.rectangleViewBorder]} />
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group-84.png")}
      />
      <Image
        style={[styles.exploreChild5, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-28.png")}
      />
      <Image
        style={styles.exploreChild6}
        contentFit="cover"
        source={require("../assets/group-29.png")}
      />
      <View style={styles.lineView} />
      <Image
        style={styles.groupIcon1}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.exploreChild7, styles.exploreChildPosition2]}
        contentFit="cover"
        source={require("../assets/group-27.png")}
      />
      <Image
        style={[styles.exploreChild8, styles.exploreChildPosition2]}
        contentFit="cover"
        source={require("../assets/group-26.png")}
      />
      <Text style={[styles.date, styles.dateTypo]}>Date :</Text>
      <Text style={[styles.sortBy, styles.dateTypo]}>{`Sort by : `}</Text>
      <Text style={[styles.news, styles.newsTypo]}>News</Text>
      <Text style={[styles.mostVies, styles.newsTypo]}>Most vies</Text>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector51.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector52.png")}
      />
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
        source={require("../assets/subtract20.png")}
      />
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract21.png")}
      />
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract22.png")}
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
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector53.png")}
      />
      <Image
        style={styles.vectorIcon6}
        contentFit="cover"
        source={require("../assets/vector54.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector53.png")}
      />
      <Image
        style={[styles.exploreChild9, styles.exploreChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-161.png")}
      />
      <Image
        style={styles.exploreChild10}
        contentFit="cover"
        source={require("../assets/ellipse-232.png")}
      />
      <Image
        style={[styles.exploreChild11, styles.exploreChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-161.png")}
      />
      <Image
        style={[styles.exploreChild12, styles.exploreChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.exploreChild13, styles.exploreChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.exploreChild14, styles.exploreChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.exploreChild15, styles.exploreChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.exploreChild16, styles.exploreChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.exploreChild17, styles.exploreChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.exploreChild18, styles.exploreChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.exploreChild19, styles.exploreChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.exploreChild20, styles.exploreChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={styles.hiconLinearClose}
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
  },
  groupChildPosition: {
    top: "63.27%",
    position: "absolute",
  },
  explore2Typo: {
    color: Color.colorWhite,
    fontWeight: "700",
    fontFamily: FontFamily.productSans,
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupLayout: {
    height: 3,
    width: 3,
    left: 298,
    position: "absolute",
  },
  explorePosition: {
    top: "93.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  libraryTypo: {
    color: Color.colorDimgray_200,
    top: "96.92%",
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  explore2Position: {
    top: "5.33%",
    position: "absolute",
  },
  exploreChildPosition3: {
    left: 322,
    height: 3,
    width: 3,
    position: "absolute",
  },
  groupIconPosition: {
    opacity: 0.7,
    position: "absolute",
  },
  gameTypo: {
    color: Color.colorGray_100,
    opacity: 0.7,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  rectangleViewBorder: {
    opacity: 0.2,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    bottom: "80.69%",
    top: "12.44%",
    height: "6.87%",
    borderStyle: "solid",
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  exploreChildPosition2: {
    top: "22.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  dateTypo: {
    top: "28.08%",
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  newsTypo: {
    color: Color.colorWhitesmoke_100,
    top: "28.08%",
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  vectorIconLayout1: {
    bottom: "70.73%",
    top: "28.67%",
    width: "2.81%",
    height: "0.59%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    left: "61.8%",
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
    left: "45.9%",
    right: "52.29%",
    width: "1.8%",
    height: "0.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  exploreChildLayout: {
    right: "40.5%",
    width: "4.37%",
    left: "55.13%",
    height: "2.01%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  exploreChildPosition1: {
    left: 331,
    height: 3,
    width: 3,
    position: "absolute",
  },
  exploreChildPosition: {
    left: 330,
    height: 3,
    width: 3,
    position: "absolute",
  },
  mViews: {
    width: "37.42%",
    top: "84.69%",
    left: "56.11%",
    position: "absolute",
  },
  amazonPrime: {
    width: "24%",
    left: "64.21%",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
  },
  subtractIcon: {
    width: 155,
    height: 94,
    borderRadius: Border.br_lg,
  },
  loremIpsumDolor: {
    width: "43.33%",
    top: "3.06%",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    textAlign: "left",
    left: "56.11%",
    position: "absolute",
  },
  vectorIcon: {
    height: "8.16%",
    width: "2.19%",
    top: "91.84%",
    right: "52.92%",
    bottom: "0%",
    left: "44.89%",
    position: "absolute",
  },
  groupChild: {
    height: "17.35%",
    width: "5.31%",
    right: "38.58%",
    bottom: "19.39%",
    top: "63.27%",
    position: "absolute",
    left: "56.11%",
  },
  groupItem: {
    top: 70,
  },
  groupInner: {
    top: 75,
  },
  ellipseIcon: {
    top: 80,
  },
  mViews5MinAgoParent: {
    height: "11.61%",
    width: "82.25%",
    top: "73.7%",
    right: "8.52%",
    bottom: "14.69%",
    left: "9.23%",
    position: "absolute",
  },
  subtractIcon1: {
    width: 390,
    height: 161,
    borderRadius: Border.br_26xl,
  },
  exploreChild: {
    top: 786,
    left: 48,
    width: 26,
    height: 26,
    position: "absolute",
  },
  exploreItem: {
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
  exploreInner: {
    height: "2.74%",
    width: "5.73%",
    right: "31.19%",
    bottom: "4.02%",
    left: "63.08%",
  },
  home: {
    left: "11.8%",
    top: "96.92%",
    width: "8.19%",
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  explore1: {
    width: "9.99%",
    left: "28.73%",
  },
  channels: {
    left: "58.71%",
    width: "12.56%",
  },
  library: {
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
    top: "86.97%",
    right: "16.93%",
    bottom: "11.14%",
    left: "79.22%",
    width: "3.85%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon2: {
    height: "1.56%",
    width: "1.53%",
    right: "87.44%",
    bottom: "93.1%",
    left: "11.03%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  exploreChild1: {
    top: 45,
  },
  exploreChild2: {
    top: 50,
  },
  exploreChild3: {
    top: 55,
  },
  explore2: {
    width: "10.51%",
    left: "44.87%",
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "700",
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
    top: "5.33%",
  },
  searchChannels: {
    width: "21.79%",
    top: "15.05%",
    left: "26.41%",
    color: Color.colorDarkgray,
    opacity: 0.7,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
  },
  trend: {
    left: "14.88%",
    top: "22.87%",
    width: "8.19%",
    color: Color.colorWhite,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  music: {
    width: "8.47%",
    left: "38.97%",
    top: "22.87%",
  },
  game: {
    width: "8.71%",
    top: "22.99%",
    left: "65.13%",
  },
  learning: {
    left: "88.72%",
    top: "22.87%",
    width: "12.56%",
  },
  rectangleView: {
    width: "61.03%",
    right: "27.94%",
    left: "11.03%",
  },
  exploreChild4: {
    width: "14.88%",
    right: "10.24%",
    left: "74.88%",
  },
  groupIcon: {
    height: "2.84%",
    width: "6.14%",
    top: "14.45%",
    right: "76.93%",
    bottom: "82.7%",
    left: "16.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  exploreChild5: {
    height: "2.13%",
    top: "14.69%",
    right: "15.13%",
    bottom: "83.18%",
    left: "79.74%",
    width: "5.13%",
    position: "absolute",
  },
  exploreChild6: {
    top: 191,
    left: 34,
    width: 18,
    height: 18,
    position: "absolute",
  },
  lineView: {
    top: 214,
    left: 56,
    borderColor: Color.colorCrimson,
    borderTopWidth: 2,
    width: 30,
    height: 2,
    borderStyle: "solid",
    position: "absolute",
  },
  groupIcon1: {
    top: "22.75%",
    right: "62.56%",
    left: "33.59%",
    opacity: 0.5,
    bottom: "75.24%",
    height: "2.01%",
    width: "3.85%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  exploreChild7: {
    height: "2.37%",
    right: "36.4%",
    left: "58.47%",
    bottom: "75.24%",
    width: "5.13%",
  },
  exploreChild8: {
    height: "2.58%",
    width: "3.74%",
    right: "12.67%",
    bottom: "75.02%",
    left: "83.59%",
  },
  date: {
    width: "7.95%",
    left: "8.71%",
  },
  sortBy: {
    width: "11.03%",
    left: "44.1%",
  },
  news: {
    width: "7.7%",
    left: "22.06%",
  },
  mostVies: {
    width: "12.81%",
    left: "57.18%",
  },
  vectorIcon3: {
    right: "65.4%",
    left: "31.79%",
  },
  vectorIcon4: {
    right: "25.12%",
    left: "72.06%",
  },
  mViews1: {
    top: "43.36%",
    left: "55.13%",
  },
  mViews2: {
    top: "56.28%",
    left: "54.86%",
  },
  mViews3: {
    top: "69.67%",
    left: "55.13%",
  },
  amazonPrime2: {
    top: "40.88%",
  },
  amazonPrime3: {
    left: "61.55%",
    top: "53.79%",
    width: "19.74%",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  amazonPrime4: {
    top: "67.18%",
  },
  loremIpsumDolor2: {
    top: "33.89%",
    left: "55.13%",
  },
  loremIpsumDolor3: {
    top: "46.8%",
    left: "54.86%",
  },
  loremIpsumDolor4: {
    top: "60.19%",
    left: "55.13%",
  },
  vectorIcon5: {
    top: "44.19%",
    bottom: "54.86%",
  },
  vectorIcon6: {
    top: "57.11%",
    right: "52.57%",
    bottom: "41.94%",
    left: "45.63%",
    width: "1.8%",
    height: "0.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon7: {
    top: "70.5%",
    bottom: "28.55%",
  },
  exploreChild9: {
    bottom: "57.11%",
    top: "40.88%",
  },
  exploreChild10: {
    right: "40.77%",
    bottom: "44.19%",
    width: "4.37%",
    top: "53.79%",
    left: "54.86%",
    height: "2.01%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  exploreChild11: {
    bottom: "30.81%",
    top: "67.18%",
  },
  exploreChild12: {
    top: 353,
  },
  exploreChild13: {
    top: 462,
  },
  exploreChild14: {
    top: 575,
  },
  exploreChild15: {
    top: 358,
  },
  exploreChild16: {
    top: 467,
  },
  exploreChild17: {
    top: 580,
  },
  exploreChild18: {
    top: 363,
  },
  exploreChild19: {
    top: 472,
  },
  exploreChild20: {
    top: 585,
  },
  hiconLinearClose: {
    top: 734,
    left: 315,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  explore: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_26xl,
  },
});

export default Explore;
