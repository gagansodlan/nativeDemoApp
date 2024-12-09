import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabRoot() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                title: "Home", tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? "home-sharp" : 'home-outline'} color={color} size={24} />
                )
            }} />
            <Tabs.Screen name="about" options={{
                title: "About us", tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={24} />
                )
            }} />
            <Tabs.Screen name="profile" options={{ title: "profile", tabBarIcon: ({ color, focused }) => (<Ionicons name={focused ? "person" : "person-outline"} color={color} size={24} />) }} />
        </Tabs>
    )
}