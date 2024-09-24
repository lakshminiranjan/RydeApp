import { icons } from "@/constants";
import { Tabs } from "expo-router"
import { Image, ImageSourcePropType, View } from "react-native";

const TabIcon = ({ source, focused }: { source: ImageSourcePropType, focused: boolean }) => (
    <View className={`flex flex-row justify-center items-center rounded-full ${focused ? 'bg-general-300' : ''}`} >
        <View className={`rounded-full w-12 h-12 items-center justify-center ${focused ? 'bg-general-400' : ''}`}>
            <Image source={source} tintColor="white" resizeMode="contain" className="w-7 h-7"/>
        </View>
    </View>
)

const Layout = () => {
    return (
      <Tabs
        initialRouteName="index"
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#333333",
            borderRadius: 50,
            paddingBottom:0,
            overflow: "hidden",
            marginHorizontal: 20,
            marginBottom: 10,
            height: 78,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
            
          }
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ focused }) => {
              return <TabIcon focused={focused} source={icons.home} />;
            },
          }} // Added missing closing brace
        />
        <Tabs.Screen
          name="rides"
          options={{
            headerShown: false,
            title: "Rides",
            tabBarIcon: ({ focused }) => {
              return <TabIcon focused={focused} source={icons.list} />;
            },
          }} // Added missing closing brace
        />
        <Tabs.Screen
          name="chat"
          options={{
            headerShown: false,
            title: "Chat",
            tabBarIcon: ({ focused }) => {
              return <TabIcon focused={focused} source={icons.chat} />;
            },
          }} // Added missing closing brace
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ focused }) => {
              return <TabIcon focused={focused} source={icons.profile} />;
            },
          }} // Added missing closing brace
        />
      </Tabs>
    );
}

export default Layout;