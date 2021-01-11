import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right, Spinner } from 'native-base';
import { Image } from 'react-native';

const CountryDetail = ({ route, navigation }) => {

    const { CapitalData } = route.params;



    //console.log(CapitalData);

    const i = 0;
    //console.log(CapitalData.current.weather_icons);

    const icon = CapitalData.current.weather_icons[i];

    //console.log(icon);

    return (
        <Container>

            <Content>
                <Card style={{ flex: 0 }}>

                    <CardItem>

                        <Image source={{ uri: icon }} style={{ height: 200, width: 200, flex: 1 }} />

                    </CardItem>

                    <CardItem style={styles.cardItemStyle}>
                        <Text style={styles.labelStyle} >Capital Name: </Text>
                        <Text>{CapitalData.location.name}</Text>
                    </CardItem>

                    <CardItem style={styles.cardItemStyle}>
                        <Text style={styles.labelStyle} >Temperature: </Text>
                        <Text>{CapitalData.current.temperature} °C</Text>
                    </CardItem>

                    <CardItem style={styles.cardItemStyle}>
                        <Text style={styles.labelStyle} >Precipitation: </Text>
                        <Text>{CapitalData.current.precip} %</Text>
                    </CardItem>

                    <CardItem style={styles.cardItemStyle}>
                        <Text style={styles.labelStyle} >Wind Speed: </Text>
                        <Text>{CapitalData.current.wind_speed} km/h</Text>
                    </CardItem>


                </Card>
            </Content>

        </Container>
    );
}

const styles = StyleSheet.create({

    cardItemStyle: {
        marginHorizontal: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    labelStyle: {
        color: '#0f6fdb'
    },

});

export default CountryDetail;