import React, { Component } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import {h,w} from '../../constants'
import Interactable from 'react-native-interactable'

const Cards = [
  {id: 1, uri: require('../../res/images/111.jpg')},
  {id: 2, uri: require('../../res/images/222.jpg')},
  {id: 3, uri: require('../../res/images/333.jpg')},
  {id: 4, uri: require('../../res/images/444.jpg')}
]

export default class Task extends Component {

  constructor() {
    super()
    this.state = {
      currentIndex: 0
    }
  }

  renderCards = () => {
    
    return Cards.map((item, i) => {

      if( i < this.state.currentIndex)
      {
        return null
      }
      else if( i == this.state.currentIndex)
      {
      return (
        <Interactable.View
          key={item.id}
          horizontalOnly={true}
          snapPoints={[ {x: -380}, {x: 0}, {x: 380} ]}
          friction={0.6}
          style={styles.card}
        >
          <Image 
            source={item.uri}
            style={styles.image} 
          />
        </Interactable.View>
      )
      }
      else
      {
        return (
          <Interactable.View
            key={item.id}
            horizontalOnly={true}
            snapPoints={[ {x: -380}, {x: 0}, {x: 380} ]}
            friction={0.6}
            style={styles.card}
          >
            <Image 
              source={item.uri}
              style={styles.image} 
            />
          </Interactable.View>
        )
      }
    }).reverse()
  }
  
  render () {
    return (
      <View style={styles.container}>
        {this.renderCards()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005FA7'
  },
  card: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 40,
    marginBottom: 40,
    position: 'absolute',
    width: w,
    height: h / 1.1
  },
  image: {
    flex:1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: w,
    height: h / 1.1
  },
  buttonRegist: {
    flex: 0,
    backgroundColor: '#007bff',
    paddingVertical: 5,
    marginTop: 32,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 14
  }
})
