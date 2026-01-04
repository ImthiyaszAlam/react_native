import { View } from "react-native";
import { Text } from "react-native";

export default function ListItem({ title, description }: { title: string, description: string }) {
    return (
        <View>

            <Text>{title}</Text>
            <Text>{description}</Text>


        </View>
    )
}