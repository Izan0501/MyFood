import {
  StyleSheet,
  Platform,
  Text,
  Animated,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";

import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Restaurant = ({ route, navigation }) => {

  const [restaurants, setRestaurants] = React.useState(null);
  const [currentLocation, setcurrentLocation] = React.useState(null);

  React.useEffect(() => {

    let item = route.params;
    let currentLocation = route.params

    setRestaurants(item);
    setcurrentLocation(currentLocation);


  });

  function renderHeader() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons
            name="keyboard-backspace"
            size={30}
            color="black"
            style={{
              marginLeft: 10.5,
              marginTop: 10
            }}
          />
        </TouchableOpacity>

        {/**Restaurant Name Section */}

        <View
          style={styles.contain}
        >
          <View
            style={styles.titleRestaurantContain}
          >
            <Text
              style={styles.txtTitle}
            >
              {restaurants?.name}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.iconList}
        >
          <Feather
            name="list"
            size={30}
            color="black" />
        </TouchableOpacity>
      </View>
    );

  };

  {/**restaurant products */ }

  const renderImage = () => {

    const screenWidth = Dimensions.get('window').width;

    restaurants?.menu.map((item, index) => {

      <View
        key={`menu-${index}`}
        style={{ alignItems: 'center' }}
      >
        <Image
          source={item}
          resizeMod="cover"
          style={{
            width: screenWidth,
            height: '100%'
          }}
        />
      </View>
    });

  };

  function renderFoodData() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}
      >
        {renderImage()}
      </Animated.ScrollView>
    );

  }

  return (
    <SafeAreaView
      style={
        styles.androidSafeArea
      }>
      {renderHeader()}
      {renderFoodData()}
    </SafeAreaView>
  );

};

export default Restaurant;

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 40 : 0,
    haderButton: {
      width: 50,
      paddingLeft: 40,
      justifyContent: 'center'
    }
  },
  contain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5.5,
  },
  titleRestaurantContain: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    borderRadius: 35,
    backgroundColor: "#EFEFF1"
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 22
  },
  iconList: {
    width: 50,
    paddingRight: 20,
    justifyContent: 'center'
  }
});
