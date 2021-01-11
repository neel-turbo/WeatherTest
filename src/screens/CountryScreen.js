import React, { Component, useState, useEffect } from "react";
import { Container, Input, Item, Content, Card, CardItem, Text, Button, Spinner } from 'native-base';
import { FlatList, StyleSheet, ScrollView, View } from "react-native";
import { SvgUri } from 'react-native-svg';

import countryApi from "../api/CountryApi";
import WeatherApi from "../api/WeatherApi";

class CountryScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            results: [], err: '', loading: false, capitalData: []
        };

        const { route, navigation } = this.props;
        this.Country = route.params.CountryId;
    }

    componentDidMount() {
        this.getCountryData();
    }

    getCountryData = async () => {

        this.setState({ loading: true });
        await countryApi.get(`rest/v2/name/${this.Country}`).then(response => {
            this.setState({ results: response.data, loading: false });


        }).catch(e => {
            this.setState({ err: e });
            this.setState({ loading: false });
        });
    }


    getWeatherInfo = async (Capital) => {

        await WeatherApi.get(`current?access_key=1341c00eaf8f18ffd45957179bf18a7f&QUERY=${Capital}`).then(response => {

            this.setState({ capitalData: response.data });
            this.props.navigation.navigate('Capital Details', { CapitalData: this.state.capitalData })

        }).catch(e => {
            this.setState({ err: e });
        })
    }

    onRenderScreen() {

        if (this.state.loading) {
            return (<Spinner color='#397fe5' />)
        }
        return (

            <Container>
                {this.state.err.length > 0 ? <Text>Something went wrong</Text> : null}
                <FlatList

                    data={this.state.results}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <Content style={{ margin: 5 }}>
                                <Card>

                                    <CardItem style={styles.countryNameStyle}>
                                        <Text style={styles.headerTextStyle}> {item.name}</Text>
                                    </CardItem>

                                    <Content >
                                        <View style={styles.containerStyle}>

                                            <View style={{ flex: 1 }}>
                                                <CardItem >
                                                    <SvgUri height="100" width="100" uri={item.flag} />
                                                </CardItem>

                                            </View>

                                            <View style={{ flex: 2 }}>

                                                <CardItem >
                                                    <Text style={styles.labelStyle} >Latitude Longitude: </Text>
                                                    <Text>{item.latlng.toString()}</Text>
                                                </CardItem>

                                                <CardItem >
                                                    <Text style={styles.labelStyle}>Population: </Text>
                                                    <Text>{item.population}</Text>
                                                </CardItem>

                                                <CardItem >
                                                    <Text style={styles.labelStyle}>Capital: </Text>
                                                    <Text>{item.capital}</Text>
                                                </CardItem>


                                                <Button info block style={{ marginHorizontal: 5, marginVertical: 5 }}
                                                    onPress={() => this.getWeatherInfo(item.capital)}
                                                >
                                                    <Text uppercase={false} style={{ fontSize: 16 }}>Capital Weather</Text>
                                                </Button>

                                            </View>

                                        </View>

                                    </Content>

                                </Card>

                            </Content>
                        );
                    }}
                />
            </Container>
        )
    }


    render() {


        return (
            <Container>
                { this.onRenderScreen()}
            </Container>
        )
    }
}


const styles = StyleSheet.create({

    countryNameStyle: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        borderColor: '#cecccc',
        borderWidth: 1,
        padding: 5

    },

    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0f6fdb'
    },

    labelStyle: {
        color: '#0f6fdb'
    },

    footerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },




});


export default CountryScreen;