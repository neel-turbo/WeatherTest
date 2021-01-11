import React, { Component } from "react";
import { Container, Input, Item, Button, Text } from 'native-base';
import { StyleSheet } from "react-native";


class HomeScreen extends Component {

    state = { CountyName: '' };


    render() {

        return (
            <Container>

                <Item regular style={styles.inputTextStyle}>
                    <Input
                        placeholder='Enter Country'
                        value={this.state.CountyName}
                        onChangeText={(text) => this.setState({ CountyName: text })}
                    />
                </Item>

                <Container style={styles.buttonStyle} >

                    <Button block
                        onPress={() => { this.props.navigation.navigate('Country', { CountryId: this.state.CountyName }) }}
                    >
                        <Text uppercase={false} style={{ fontSize: 17 }}>Search</Text>
                    </Button>
                </Container>

            </Container>
        );
    }
}


const styles = StyleSheet.create({

    inputTextStyle: {
        marginTop: 20,
        marginRight: 20,
        marginBottom: 20,
        marginLeft: 20
    },

    buttonStyle: {
        marginHorizontal: 30,
        marginVertical: 10,

    }

});


export default HomeScreen;