import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import { Icon } from 'react-native-elements';

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ height: 100, backgroundColor: '#FF8C00' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ height: 70, width: 70, marginTop: 20 }}
                            source={require('../images/avatar.png')} />
                        <View>
                            <Text style={{ fontSize: 16, color: 'black', marginLeft: 4 }}>Tawasul</Text>
                            <Text
                                ellipsizeMode='tail' numberOfLines={1}
                                style={{ fontSize: 12, color: 'black', marginTop: 4, marginLeft: 4 }}>user.tawasul@shurooq.gov.ae</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity>
                    <View style={styles.SideView}>
                        <Image style={{ height: 25, width: 25 }}
                            source={require('../images/feed.png')} />
                        <Text style={styles.SideText}>News feed</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Events')}>
                    <View style={styles.SideView}>
                        <Icon name='event' />
                        <Text style={styles.SideText}>Events</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.SideView}>
                        <Image style={{ height: 25, width: 25 }}
                            source={require('../images/directory.png')} />
                        <Text style={styles.SideText}>Employee Directory</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Groups')}>
                    <View style={styles.SideView}>
                        <Icon name='group' />
                        <Text style={styles.SideText}>Groups</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity >
                    <View style={styles.SideView}>
                        <Image style={{ height: 25, width: 25 }}
                            source={require('../images/occasion.png')} />
                        <Text style={styles.SideText}>Occasions</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.SideView}>
                        <Image style={{ height: 25, width: 25 }}
                            source={require('../images/library.png')} />
                        <Text style={styles.SideText}>E-Library</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ height: 1, backgroundColor: 'grey', marginTop: 30 }}>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Events")}>
                    <View style={styles.SideView}>
                        <Image style={{ height: 25, width: 25 }}
                            source={require('../images/logout.png')} />
                        <Text style={styles.SideText}>Logout</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    SideView: {
        marginTop: 20,
        flexDirection: 'row',
        marginLeft: 20
    },
    SideText: {
        fontSize: 17,
        alignSelf: 'center',
        marginLeft: 20,
        color: 'black'
    },
});
