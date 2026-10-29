
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Boat({ name, description, image }) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>⛵ {name}</Text>

            <Text style={styles.description}>
                {description}
            </Text>

            <Image
                source={image}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },

    name: {
        fontSize: 16,
        color: '#777777',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 12,
        color: '#777777',
    },

    image: {
        width: '100%',
        height: 190,
        marginTop: 5,
    },
});
