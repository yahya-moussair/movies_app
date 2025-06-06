import { useAppContext } from "@/context";
import {
  Image,
  View,
  Text,
  Platform,
  ScrollView,
  Pressable,
  ImageBackground,
  Dimensions,
  TextInput,
  BackHandler,
} from "react-native";


export default function HomeScreen() {

  const { name } = useAppContext()


  return (
    <>

      <View className="items-center justify-center h-screen px-6 text-center bg-black">
        <Text className="text-white">Hello wordl from {name}</Text>
      </View>
    </>
  );
}



