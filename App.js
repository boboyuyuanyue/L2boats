
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Boat from './Boat';

export default function App() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>GetABoat - For Sale</Text>

            <Boat
                name="SEA RAY 500 SUNDANCER"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                image={require('./img/sea_ray.jpg')}
            />

            <Boat
                name="FOUR WINNS HORIZON 180"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                image={require('./img/four_winns.jpg')}
            />

            <Boat
                name="FLIPPER 640 ST"
                description="A modern take on the classic, traditional hardtop and perfect for all occasions."
                image={require('./img/flipper.jpg')}
            />

            <Boat
                name="BAYLINER"
                description="A stylish and comfortable powerboat for your next adventure."
                image={require('./img/bayliner.jpg')}
            />

            <Boat
                name="FAIRLINE"
                description="A luxurious powerboat with elegant styling and comfort."
                image={require('./img/fairline.jpg')}
            />

            <Boat
                name="PRINCESS"
                description="A refined yacht offering space, comfort and performance."
                image={require('./img/princess.jpg')}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 3,
    },

    header: {
        fontSize: 10,
        color: '#111111',
        marginBottom: 15,
    },
});
