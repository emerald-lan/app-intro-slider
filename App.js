import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, PixelRatio, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons';
import AppIntroSlider from 'react-native-app-intro-slider';

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Regular: Roboto_400Regular,
    Medium: Roboto_500Medium,
    Bold: Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const { width, height } = Dimensions.get('window');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#EBF3FA' }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
        >

        <View style={{ width, height }}>
          <Image source={require('./assets/img/1/image3.png')} style={{ position: 'absolute', bottom: 0.48*height, left: 0 }} />
          <Image source={require('./assets/img/1/Saly-22.png')} style={{ position: 'absolute', bottom: 0.325*height, alignSelf: 'center' }} />
          
          <View style={styles.wrapper}>
            <Text style={styles.text}>Receiving guidelines {"\n"}from psychologists</Text>
          </View>
        </View>
              
        <View style={{ width, height }}>
          <Image source={require('./assets/img/2/image19.png')} style={{ position: 'absolute', bottom: 0.338*height, left: 0 }} />
          <Image source={require('./assets/img/2/Saly-1.png')} style={{ position: 'absolute', bottom: 0.24*height, alignSelf: 'center' }} />
          
          <View style={styles.wrapper}>
            <Text style={styles.text}>Noting down your{"\n"} emotion diary</Text>
          </View>
        </View>

        <View style={{ width, height }}>
          <Image source={require('./assets/img/3/image17.png')} style={{ position: 'absolute', top: 0, right: 0 }} />
          <Image source={require('./assets/img/3/Saly-34.png')} style={{ position: 'absolute', bottom: 0.289*height, alignSelf: 'center' }} />
          
          <View style={styles.wrapper}>
            <Text style={styles.text}>Exploring posts and events about mental health</Text>
          </View>
        </View>

        <View style={{ width, height }}>
          <Image source={require('./assets/img/4/image3.png')} style={{ position: 'absolute', bottom: 0.04*height, right: 0 }} />
          <Image source={require('./assets/img/4/Saly-14.png')} style={{ position: 'absolute', bottom: 0.217*height, alignSelf: 'center' }} />
          
          <View style={styles.wrapper}>
            <Text style={styles.text}>Chatting with strangers{"\n"}</Text>
          </View>
        </View>

        </ScrollView>
      </SafeAreaView>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    wrapper: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: '12%',
      left: 0,
      right: 0,
    },
    text: {
      fontFamily: 'Bold',
      fontSize: 28,
      color: '#193566',
      textAlign: 'center',
      bottom: '12.81%',
    }
  });




//   return (
//     <View style={styles.container}>
//       <Text style={{ fontFamily: "Bold", fontSize: 25, color: "red" }}>tram cam</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#EBF3FA',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
