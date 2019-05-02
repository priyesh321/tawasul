import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { Container, Content, Footer, FooterTab, Button, Header, Right, Title, Body, Icon } from 'native-base';

export default class EmployeeDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#fd8103' }}>
                    <Body style={{ right: 1 }}>
                        <Title>Employee Directory</Title>
                    </Body>

                    <Right>
                        <TouchableOpacity>
                            <Button transparent>
                                <Icon name='search' />
                            </Button>
                        </TouchableOpacity>
                        <Button transparent>
                            <Icon name='notifications' />
                        </Button>
                    </Right>
                </Header>

                <Content>
                    <View style={{ marginTop: 10, height: 60, width: '95%', marginLeft: 10, borderRadius: 4, borderColor: 'lightgrey', borderWidth: 1, zIndex: 50 }}>
                        <View style={{ marginLeft: 10, marginTop: 15, flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image style={{ height: 25, width: 25,tintColor:'#2EC2E4' }}
                                    source={require('../images/filter.png')} />
                            </TouchableOpacity>

                            <View style={{ marginLeft: 7, height: 40, width: '88%', borderColor: "lightgrey", borderWidth: 1, bottom: 7, borderRadius: 4, flexDirection: 'row', justifyContent: "space-between" }}>
                                <TextInput
                                    style={{ fontSize: 16, width: '80%' }}
                                    placeholder="Search"
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor="grey"
                                />
                                <TouchableOpacity>
                                    <Image style={{ height: 25, width: 25, marginRight: 8, marginTop: 5,tintColor:'#fd8103' }}
                                        source={require('../images/search.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </Content>

                <Footer>
                    <FooterTab style={{ backgroundColor: '#2EC2E4' }}>
                        <Button >
                            <Image style={styles.buttonImage}
                                source={require('../images/home.png')} />
                        </Button>
                        <Button >
                            <Image style={styles.buttonImage}
                                source={require('../images/camera.png')} />
                        </Button>
                        <Button >
                            <Image style={styles.buttonImage}
                                source={require('../images/calendar.png')} />
                        </Button>
                        <Button>
                            <Image style={styles.buttonImage}
                                source={require('../images/group.png')} />
                        </Button>
                        <Button >
                            <Image style={styles.buttonImage}
                                source={require('../images/menu.png')} />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#fff"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    },
    buttonImage: {
        height: 25,
        width: 25,
        tintColor: 'white'
    },
});
