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
import icons from "../constants/icons";
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

  function renderFoodData() {

    const screenWidth = Dimensions.get('window').width;

    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}
      >
        {
          restaurants?.menu.map((item, index) => (
            <View
              key={`menu-${index}`}
              style={{ alignItems: 'center' }}
            >
              <View
                style={{
                  height: '45%'
                }}
              >
                <Image
                  source={item.image}
                  resizeMod="cover"
                  style={{
                    marginRight: 4,
                    marginTop: 0,
                    width: screenWidth,
                    height: '100%',
                    borderRadius: 50
                  }}
                />

                {/**ProductQuantity */}

                <View
                  style={{
                    position: 'absolute',
                    bottom: -20,
                    width: screenWidth,
                    height: 50,
                    justifyContent: 'center',
                    flexDirection: 'row'
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 50,
                      backgroundColor: 'white',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderTopLeftRadius: 25,
                      borderBottomLeftRadius: 25,
                      ...styles.shadow
                    }}
                  >
                    <Text
                      style={{
                        marginTop: 0,
                        fontSize: 25,
                        fontWeight: 'bold',
                      }}
                    >
                      -
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: 50,
                      backgroundColor: 'white',
                      alignItems: 'center',
                      justifyContent: 'center',
                      //...styles.shadow
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold'
                      }}
                    >
                      5
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      width: 50,
                      backgroundColor: 'white',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderTopRightRadius: 25,
                      borderBottomRightRadius: 25,
                      ...styles.shadow
                    }}
                  >
                    <Text
                      style={{
                        marginTop: 0,
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}
                    >
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/**name & desciption*/}

              <View
                style={{
                  width: screenWidth,
                  alignItems: "center",
                  marginTop: 15,
                  paddingHorizontal: 25
                }}
              >
                <Text
                  style={{
                    marginVertical: 15,
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold'
                  }}
                >
                  {`${item.name} - $${item.price}`}
                </Text>
                <Text
                  style= {{
                    fontSize: 15,
                    fontWeight: '500'
                  }}
                >
                  {item.description}
                </Text>
              </View>

              {/**caloriesInfo */}

              <View
               style= {{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 15
               }}
              >
                <Image 
                  source={icons.fire}
                  style= {{
                    width: 20,
                    height: 20,
                    marginRight: 7
                  }}
                />
                <Text 
                  style= {{
                    fontSize: 15
                  }}
                >{item.calories.toFixed(2)} cal</Text>
              </View>
            </View>
          ))
        }
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
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  }
});
