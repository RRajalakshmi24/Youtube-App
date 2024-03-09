import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Channels = () => {
  return (
    <View style={styles.channels}>
      <View style={styles.ellipseParent}>
        <Image
          style={[styles.groupChild, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-82.png")}
        />
        <Text style={styles.soroushnrz}>soroushnrz</Text>
        <Text style={[styles.mSubscribers, styles.videoTypo1]}>
          1 M Subscribers
        </Text>
        <Text style={[styles.video, styles.videoTypo1]}>200 video</Text>
        <View style={styles.groupItem} />
        <Text style={[styles.subscribed, styles.subscribTypo]}>Subscribed</Text>
      </View>
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract13.png")}
      />
      <Image
        style={styles.channelsChild}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <Image
        style={[styles.channelsItem, styles.channelsPosition]}
        contentFit="cover"
        source={require("../assets/group-141.png")}
      />
      <Image
        style={styles.library1Icon}
        contentFit="cover"
        source={require("../assets/library-1.png")}
      />
      <Image
        style={[styles.channelsInner, styles.channelsPosition]}
        contentFit="cover"
        source={require("../assets/group-132.png")}
      />
      <Text style={styles.home}>Home</Text>
      <Text style={[styles.explore, styles.exploreTypo]}>Explore</Text>
      <Text style={[styles.channels1, styles.exploreTypo]}>Channels</Text>
      <Text style={[styles.library, styles.exploreTypo]}>Library</Text>
      <Image
        style={styles.subtractIcon1}
        contentFit="cover"
        source={require("../assets/subtract14.png")}
      />
      <Text style={[styles.loremIpsumDolor, styles.amazonPrimeTypo]}>
        Lorem ipsum dolor sit amet, consectetur ...
      </Text>
      <Text style={[styles.amazonPrime, styles.amazonPrimeTypo]}>
        Amazon prime
      </Text>
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/vector43.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={[styles.channelsChild1, styles.channelsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <Image
        style={[styles.channelsChild2, styles.channelsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-31.png")}
      />
      <Image
        style={[styles.channelsChild3, styles.channelsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-41.png")}
      />
      <Image
        style={[styles.channelsChild4, styles.channelsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-51.png")}
      />
      <Image
        style={[styles.channelsChild5, styles.channelsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-61.png")}
      />
      <Image
        style={[styles.channelsChild6, styles.channelsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-71.png")}
      />
      <Text style={[styles.channels2, styles.channels2Position]}>Channels</Text>
      <Text style={[styles.searchChannels, styles.groupIconPosition]}>
        Search channels
      </Text>
      <Text style={[styles.sortBy, styles.sortByTypo]}>{`Sort by : `}</Text>
      <Text style={[styles.soroushnrz1, styles.soroushnrzTypo]}>
        soroushnrz
      </Text>
      <Text style={[styles.soroushnrz2, styles.soroushnrzTypo]}>
        soroushnrz
      </Text>
      <Text style={[styles.soroushnrz3, styles.soroushnrzTypo]}>
        soroushnrz
      </Text>
      <Text style={[styles.soroushnrz4, styles.soroushnrzTypo]}>
        soroushnrz
      </Text>
      <Text style={[styles.soroushnrz5, styles.soroushnrzTypo]}>
        soroushnrz
      </Text>
      <Text style={[styles.soroushnrz6, styles.soroushnrzTypo]}>
        soroushnrz
      </Text>
      <Text style={[styles.mybeYouLike, styles.sortByTypo]}>
        Mybe you like that
      </Text>
      <Text style={[styles.mSubscribers1, styles.subscribersTypo]}>
        1 M Subscribers
      </Text>
      <Text style={[styles.mSubscribers2, styles.subscribersTypo]}>
        1 M Subscribers
      </Text>
      <Text style={[styles.mSubscribers3, styles.subscribersTypo]}>
        1 M Subscribers
      </Text>
      <Text style={[styles.mSubscribers4, styles.subscribersTypo]}>
        1 M Subscribers
      </Text>
      <Text style={[styles.mSubscribers5, styles.subscribersTypo]}>
        1 M Subscribers
      </Text>
      <Text style={[styles.mSubscribers6, styles.subscribersTypo]}>
        1 M Subscribers
      </Text>
      <Text style={[styles.video1, styles.videoTypo]}>200 video</Text>
      <Text style={[styles.video2, styles.videoTypo]}>200 video</Text>
      <Text style={[styles.video3, styles.videoTypo]}>200 video</Text>
      <Text style={[styles.video4, styles.videoTypo]}>200 video</Text>
      <Text style={[styles.video5, styles.videoTypo]}>200 video</Text>
      <Text style={[styles.video6, styles.videoTypo]}>200 video</Text>
      <Image
        style={[styles.vectorIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/vector44.png")}
      />
      <View style={[styles.rectangleView, styles.channelsChildBorder]} />
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group-83.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.channels2Position]}
        contentFit="cover"
        source={require("../assets/vector45.png")}
      />
      <View style={[styles.channelsChild7, styles.channelsChildLayout]} />
      <View style={[styles.channelsChild7, styles.channelsChildLayout]} />
      <View style={[styles.channelsChild9, styles.channelsChildLayout]} />
      <View style={[styles.channelsChild10, styles.channelsChildLayout]} />
      <View style={[styles.channelsChild11, styles.channelsChildLayout]} />
      <View style={[styles.channelsChild12, styles.channelsChildLayout]} />
      <View style={[styles.channelsChild13, styles.channelsChildLayout]} />
      <Text style={[styles.subscrib, styles.subscribTypo]}>Subscrib</Text>
      <Text style={[styles.subscribed1, styles.subscribedTypo]}>
        Subscribed
      </Text>
      <Text style={[styles.subscribed2, styles.subscribedTypo]}>
        Subscribed
      </Text>
      <Text style={[styles.subscribed3, styles.subscribedTypo]}>
        Subscribed
      </Text>
      <Text style={[styles.subscribed4, styles.subscribedTypo]}>
        Subscribed
      </Text>
      <Text style={[styles.subscribed5, styles.subscribedTypo]}>
        Subscribed
      </Text>
      <Image
        style={styles.hiconLinearClose}
        contentFit="cover"
        source={require("../assets/hicon--linear--close.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  videoTypo1: {
    color: Color.colorDarkgray,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
  },
  subscribTypo: {
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
  },
  channelsPosition: {
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
  amazonPrimeTypo: {
    left: "44.35%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  iconPosition: {
    left: "79.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  channelsChildLayout1: {
    right: "77.44%",
    width: "13.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "8.71%",
    height: "6.4%",
    position: "absolute",
    overflow: "hidden",
  },
  channels2Position: {
    top: "5.33%",
    position: "absolute",
  },
  groupIconPosition: {
    opacity: 0.7,
    position: "absolute",
  },
  sortByTypo: {
    top: "21.92%",
    color: Color.colorDarkgray,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  soroushnrzTypo: {
    left: "25.64%",
    width: "18.46%",
    textAlign: "left",
    color: Color.colorWhitesmoke_200,
    fontFamily: FontFamily.productSans,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  subscribersTypo: {
    width: "20.78%",
    left: "25.64%",
    color: Color.colorDarkgray,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  videoTypo: {
    left: "51.28%",
    width: "13.6%",
    color: Color.colorDarkgray,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  channelsChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  channelsChildLayout: {
    left: 254,
    height: 32,
    width: 84,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  subscribedTypo: {
    left: "73.07%",
    width: "15.13%",
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  groupChild: {
    height: "100%",
    width: "16.56%",
    top: "0%",
    right: "83.44%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  soroushnrz: {
    width: "22.08%",
    top: "14.81%",
    textAlign: "left",
    color: Color.colorWhitesmoke_200,
    fontFamily: FontFamily.productSans,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    left: "20.25%",
    position: "absolute",
  },
  mSubscribers: {
    width: "24.86%",
    top: "53.7%",
    color: Color.colorDarkgray,
    position: "absolute",
    left: "20.25%",
  },
  video: {
    width: "16.27%",
    left: "50.93%",
    top: "53.7%",
    color: Color.colorDarkgray,
    position: "absolute",
  },
  groupItem: {
    top: 9,
    left: 222,
    height: 32,
    width: 84,
    borderWidth: 1,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  subscribed: {
    width: "18.1%",
    top: "31.48%",
    left: "77%",
    color: Color.colorWhite,
    position: "absolute",
  },
  ellipseParent: {
    width: "83.59%",
    top: "77.61%",
    right: "7.7%",
    bottom: "16%",
    left: "8.71%",
    height: "6.4%",
    position: "absolute",
  },
  subtractIcon: {
    width: 390,
    height: 161,
    borderRadius: Border.br_26xl,
  },
  channelsChild: {
    top: 786,
    left: 48,
    width: 26,
    height: 26,
    position: "absolute",
  },
  channelsItem: {
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
  channelsInner: {
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
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    position: "absolute",
  },
  explore: {
    width: "9.99%",
    left: "28.73%",
  },
  channels1: {
    width: "12.56%",
    left: "58.71%",
  },
  library: {
    width: "9.48%",
    left: "80.01%",
  },
  subtractIcon1: {
    width: 122,
    height: 73,
    borderRadius: Border.br_lg,
  },
  loremIpsumDolor: {
    width: "36.67%",
    top: "83.53%",
    color: Color.colorWhite,
    fontWeight: "700",
  },
  amazonPrime: {
    width: "19.74%",
    top: "88.03%",
    color: Color.colorDimgray_100,
  },
  vectorIcon: {
    height: "1.9%",
    width: "3.85%",
    top: "86.97%",
    right: "16.93%",
    bottom: "11.14%",
  },
  ellipseIcon: {
    height: "5.57%",
    width: "12.04%",
    top: "3.44%",
    right: "8.74%",
    bottom: "91%",
  },
  channelsChild1: {
    top: "26.66%",
    bottom: "66.94%",
  },
  channelsChild2: {
    top: "35.19%",
    bottom: "58.41%",
  },
  channelsChild3: {
    top: "43.72%",
    bottom: "49.88%",
  },
  channelsChild4: {
    top: "52.25%",
    bottom: "41.35%",
  },
  channelsChild5: {
    top: "60.55%",
    bottom: "33.06%",
  },
  channelsChild6: {
    top: "69.08%",
    bottom: "24.53%",
  },
  channels2: {
    width: "13.33%",
    left: "43.34%",
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
    fontWeight: "700",
  },
  searchChannels: {
    width: "21.79%",
    top: "14.69%",
    left: "24.11%",
    color: Color.colorDarkgray,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.productSans,
  },
  sortBy: {
    width: "11.03%",
    left: "8.71%",
  },
  soroushnrz1: {
    top: "27.61%",
  },
  soroushnrz2: {
    top: "36.14%",
  },
  soroushnrz3: {
    top: "44.67%",
  },
  soroushnrz4: {
    top: "53.2%",
  },
  soroushnrz5: {
    top: "61.49%",
  },
  soroushnrz6: {
    top: "70.02%",
  },
  mybeYouLike: {
    width: "24.11%",
    left: "23.59%",
  },
  mSubscribers1: {
    top: "30.09%",
  },
  mSubscribers2: {
    top: "38.63%",
  },
  mSubscribers3: {
    top: "47.16%",
  },
  mSubscribers4: {
    top: "55.69%",
  },
  mSubscribers5: {
    top: "63.98%",
  },
  mSubscribers6: {
    top: "72.51%",
  },
  video1: {
    top: "30.09%",
  },
  video2: {
    top: "38.63%",
  },
  video3: {
    top: "47.16%",
  },
  video4: {
    top: "55.69%",
  },
  video5: {
    top: "63.98%",
  },
  video6: {
    top: "72.51%",
  },
  vectorIcon1: {
    height: "0.59%",
    width: "2.81%",
    top: "22.75%",
    right: "46.67%",
    bottom: "76.66%",
    left: "50.52%",
    position: "absolute",
  },
  rectangleView: {
    height: "6.87%",
    width: "82.58%",
    top: "12.09%",
    right: "8.71%",
    bottom: "81.04%",
    borderColor: Color.colorWhite,
    opacity: 0.2,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_lg,
    left: "8.71%",
    position: "absolute",
  },
  groupIcon: {
    height: "2.84%",
    width: "6.14%",
    top: "14.1%",
    right: "79.25%",
    bottom: "83.06%",
    left: "14.61%",
    maxHeight: "100%",
    maxWidth: "100%",
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
  channelsChild7: {
    top: 234,
    backgroundColor: Color.colorCrimson,
  },
  channelsChild9: {
    top: 306,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    left: 254,
  },
  channelsChild10: {
    top: 378,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    left: 254,
  },
  channelsChild11: {
    top: 450,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    left: 254,
  },
  channelsChild12: {
    top: 520,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    left: 254,
  },
  channelsChild13: {
    top: 592,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    left: 254,
  },
  subscrib: {
    width: "11.8%",
    top: "28.79%",
    left: "74.6%",
    color: Color.colorWhite,
    position: "absolute",
  },
  subscribed1: {
    top: "37.2%",
  },
  subscribed2: {
    top: "45.73%",
  },
  subscribed3: {
    top: "54.27%",
  },
  subscribed4: {
    top: "62.56%",
  },
  subscribed5: {
    top: "71.09%",
  },
  hiconLinearClose: {
    top: 733,
    left: 315,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  channels: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_26xl,
  },
});

export default Channels;
