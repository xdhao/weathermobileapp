import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, StatusBar, ScrollView, SafeAreaView} from 'react-native';
import Search from './Search';


export default function Weather({ weatherData, fetchWeatherData }) {

    const { weather,
            visibility,
            weather: [{description, icon}],
            name,
            main: { temp, humidity, feels_like },
            wind: { speed },
            sys: { sunrise, sunset },
    } = weatherData;
    const [{ main }] = weather;
    
    
    return (
        <SafeAreaView style={styles.container}>
            
            <StatusBar backgroundColor='darkgray' />
                <Search fetchWeatherData={fetchWeatherData} />
                <ScrollView>
                <View style={{alignItems: 'center' }}>
                    <Text style={styles.title}>{name}</Text>
                    
                </View>
                <View style={styles.current}>
                <Image
                        style={styles.largeIcon}
                        source={{
                        uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
                        }}
                    />
                    <Text style={styles.currentTemp}>{temp} °C</Text>
                </View>
                <Text style={styles.currentDescription}>{description}</Text>
                <View style={styles.allInfo}>
                    <View style={styles.extraInfo}>

                        <View style={styles.info}>
                            <Text style={{ fontSize: 20, textAlign:'center', fontWeight: 'bold', }}>Ощущается как</Text>
                            <Text style={{ fontSize: 20, textAlign:'center' }}>{feels_like} °C</Text> 
                        </View>

                        <View style={styles.info}>
                            <Text style={{ fontSize: 20, textAlign:'center', fontWeight: 'bold', }}>Влажность</Text>
                            <Text style={{ fontSize: 20, textAlign:'center' }}>{humidity}%</Text>
                        </View>
                    
                    </View>
                    <View style={styles.extraInfo}>

                        <View style={styles.info}>
                            <Text style={{ fontSize: 20, textAlign:'center', fontWeight: 'bold', }}>Видимость</Text>
                            <Text style={{ fontSize: 22, textAlign:'center' }}>{visibility}</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={{ fontSize: 20, textAlign:'center', fontWeight: 'bold', }}>Ветер</Text>
                            <Text style={{ fontSize: 20, textAlign:'center' }}>{speed} m/s</Text>                
                        </View>
                    
                    </View>               
                    <View style={styles.extraInfo}>

                        <View style={styles.info}>
                            <Text style={{ fontSize: 20, textAlign:'center', fontWeight: 'bold', }}>Рассвет</Text>
                            <Text style={{ fontSize: 20, textAlign:'center' }}>{new Date(sunrise*1000).toLocaleString()}</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={{ fontSize: 20, textAlign:'center', fontWeight: 'bold', }}>Закат</Text>
                            <Text style={{ fontSize: 20, textAlign:'center' }}>{new Date(sunset*1000).toLocaleString()}</Text>
                        </View>
                    
                    </View>
                </View>
                </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width
    },
    headerText: {
        fontSize: 36,
        marginTop: 10,
    },
    extraInfo: {
        flexDirection: 'row',
        marginTop: 0,
        justifyContent: 'space-between',
        padding: 10
    },
    allInfo: {
        borderWidth: 1,
        borderRadius: 15,
        width: Dimensions.get('screen').width - 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderColor: 'black'
    },
    info: {
        width: Dimensions.get('screen').width/2.5,
        padding: 10,
        justifyContent: 'center'
    },
    largeIcon: {
        width: 200,
        height: 150,
      },
      current: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
      },
      currentTemp: {
        fontSize: 32,
        textAlign: 'center',
      },
      currentDescription: {
        textAlign:'center',
        fontSize:24,
        marginBottom:10
      },
      title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 32,
      },
});