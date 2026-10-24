import React from 'react';
import { View, Text } from 'react-native';

// 1. Update Welcome to accept `code` and `name` props
const Welcome = ({ code, name }) => {
    return (
        <View>
            <Text>Welcome to {code} - {name}</Text>
        </View>
    );
};

// 2. Update ModuleInfo to render the header and the list of Welcome components
class ModuleInfo extends React.Component {
    render() {
        return (
            <View>
                <Text></Text>
                <Text>These are my modules this semester:</Text>
                <Welcome code="C346" name="Mobile App Development" />
                <Welcome code="C105" name="Introduction to Programming" />
                <Welcome code="C337" name="Immersive Technologies" />
            </View>
        );
    }
}

export default ModuleInfo;