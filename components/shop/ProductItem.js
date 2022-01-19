import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
const ProductItem = (props) => {
  let TouchbleCmp = TouchableOpacity
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchbleCmp = TouchableNativeFeedback
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchbleCmp onPress={props.onViewDetail} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              <Button
                color={Colors.primary}
                title='View Details'
                onPress={props.onViewDetail}
              />
              <Button
                color={Colors.primary}
                title='To Cart'
                onPress={props.onAddToCart}
              />
            </View>
          </View>
        </TouchbleCmp>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5, //shadow mac dinh chi co tren ios nen fai them nay vao
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'open-sans-bold',
  },
  price: {
    fontSize: 14,
    fontFamily: 'open-sans',
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20,
  },
})

export default ProductItem
