import React from 'react';
import Forecast from "./Forecast"
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';


export default class Weather extends React.Component {
 constructor(props){
    super(props);
    this.state = {
        forecast: {
            main: '-' ,description:'-',temp: 0
        }
    }
 }
 fetchData = () => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
  .then((response) => response.json())
  .then((json) => {
  this.setState(
  {
  forecast: {
  main: json.weather[0].main,
  description: json.weather[0].description,
  temp: json.main.temp
  }
  });
  })
  .catch((error) => {
  console.warn(error);
  });
  }
 
 componentDidMount = () => this.fetchData()
 render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./bg.jpeg')} style={styles.backdrop}> 
          <View style = {styles.show}>
            <Text style={{color: 'white'}}>{this.props.zipCode}</Text>
            <Forecast {...this.state.forecast}/>
          </View>
          <View style = {styles.show2}></View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 25     
    },
    show:{
      flex:2,
      backgroundColor: 'black',
      opacity:0.7,
      justifyContent:'center',
      alignItems:'center'
    },
    show2:{
      flex:4,
      backgroundColor: 'white',
      opacity:0
    },
    backdrop: { 
      width: '100%', 
      height: '100%'},
   });
   
