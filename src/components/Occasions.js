import React, { Component } from "react";
import { StyleSheet, Image, } from "react-native";
import { TouchableOpacity, } from "react-native-gesture-handler";
import { Container, Content, Footer, FooterTab, Button, Header, Right, Title, Body, Icon } from 'native-base';
import CalendarStrip from "react-native-calendar-strip";

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
                        <Title>Occasions</Title>
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
                    <CalendarStrip
                        calendarAnimation={{ type: 'sequence', duration: 30 }}
                        daySelectionAnimation={{ type: 'border', duration: 300 }}
                        style={{ height: 70 }}
                        calendarHeaderStyle={{ color: '#2EC2E4' }}
                        calendarColor={'#FFFFFF'}
                        dateNumberStyle={{ color: 'black' }}
                        dateNameStyle={{ color: 'grey' }}
                        iconContainer={{ flex: 0.1 }}
                    />
                </Content>

                <Footer>
                    <FooterTab style={{ backgroundColor: '#2EC2E4' }}>
                        <Button>
                            <Image style={styles.buttonImage}
                                source={require('../images/home.png')} />
                        </Button>

                        <Button>
                            <Image style={styles.buttonImage}
                                source={require('../images/camera.png')} />
                        </Button>

                        <Button>
                            <Image style={styles.buttonImage}
                                source={require('../images/calendar.png')} />
                        </Button>

                        <Button>
                            <Image style={styles.buttonImage}
                                source={require('../images/group.png')} />
                        </Button>

                        <Button>
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
