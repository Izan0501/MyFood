import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native'

const Carousel = () => {

  //get dimensions
  const screenWidth = Dimensions.get('window').width;

  //const [activeIndex, setActiveIndex] = useState(0);

  //dataCarousel
  const carouselData = [
    {
      id: '01',
      image: require('../assets/slider_1.jpg')
    },
    {
      id: '02',
      image: require('../assets/slider_2.jpg')
    },
    {
      id: '03',
      image: require('../assets/slider_3.jpg')
    }
  ];

  //displayImages
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{
            height: 200,
            width: screenWidth,
            borderRadius: 20,
            marginRight: 4,
          }}
        />
      </View>
    );
  };

  //render Carousel Images
  return (
    <View style={styles.container}>
      <FlatList
        data={carouselData}
        //ref={flatlistRef}
        //getItemLayout={getItemLayout}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      //onScroll={handleScroll}
      />
    </View>
  )
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 1,
  },
  searchIcon: {
    color: 'white',
    marginRight: -20,
    zIndex: 111
  },
});

