import { View } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

export default function DashBoardScreen() {

    const categories = ['Tech', 'Sport', 'Music', 'Movies', 'Books']
    const items = [
        { title: 'title1', description: 'description' },
        { title: 'title1', description: 'description' },
        { title: 'title1', description: 'description' },
        { title: 'title1', description: 'description' },
        { title: 'title1', description: 'description' },
        { title: 'title1', description: 'description' },
    ]
    return (

        <View>

            <Header />
            <SearchBar />




        </View>
    )
}