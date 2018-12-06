import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Animated} from 'react-native';
import Images from '../../assets/images';

class ImageLoader extends Component {
    state = {
      opacity: new Animated.Value(0),
    }
  
    onLoad = () => {
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }

    render () {
        return (
            <Animated.Image
                onLoad={this.onLoad}
                {...this.props}
                style={[
                {
                    opacity: this.state.opacity,
                    transform: [
                    {
                        scale: this.state.opacity.interpolate ({
                            inputRange: [0, 1],
                            outputRange: [0.9, 1],
                        })
                    }
                    ]
                },
                this.props.style,
                ]}
            />
        );
    }
}

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        <ImageLoader
            style={styles.image}
            source={Images.logo2}
        />
        </View>
        <Animated.Text style={styles.welcome}>Hi! This is Develom.</Animated.Text>
        <Text style={styles.welcomeSubTittle}>Frozen Food Application</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dfe4ea',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  imageContainer: {

  },
  welcomeSubTittle: {
    fontSize: 15,
  }
});
