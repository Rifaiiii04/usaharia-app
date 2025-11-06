import { MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const router = useRouter();

  return (
    <View className="w-screen h-screen">
      <View className="w-full mt-16 ml-2">
        <Pressable onPress={() => router.back()}>
          <MaterialIcons
            name="arrow-back"
            size={42}
            style={{ marginLeft: 10 }}
            color="black"
          />
        </Pressable>
      </View>
      <View className="ml-5 w-80 h-auto flex flex-col items-start mt-5 justify-start">
        <Text className="text-3xl" style={{ fontFamily: "Poppins_700Bold" }}>
          Selamat Datang
        </Text>
        <Text
          className="text-xl mt-3 text-gray-500"
          style={{ fontFamily: "Poppins_600SemiBold" }}
        >
          Masuk untuk melanjutkan penggunaan aplikasi
        </Text>
      </View>
      {/* Input Section */}
      <View className="w-96  relative left-4 h-full mt-5 p-3 ">
        <View classNamew="w-full h-full flex flex-col items-start justify-start mt-10">
          <Text
            className="text-lg ml-1 mt-2"
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            Email
          </Text>
          <TextInput
            className="border-2 px-5 mt-2 rounded-2xl py-5 border-gray-300"
            placeholder="Masukkan Email Anda"
            style={{ fontFamily: "Poppins_400Regular" }}
          />
          <Text
            className="text-lg ml-1 mt-5"
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            Password
          </Text>
          <TextInput
            className="border-2 px-5 mt-2 rounded-2xl py-5 border-gray-300"
            placeholder="Masukkan Password Anda"
            style={{ fontFamily: "Poppins_400Regular" }}
          />
        </View>
        <Pressable className="mt-5">
          <Text
            className="text-green-700 text-sm"
            style={{ fontFamily: "Poppins_500Medium" }}
          >
            Lupa Password ?{" "}
          </Text>
        </Pressable>
        <View className="w-full flex items-center justify-center mt-5">
          <TouchableOpacity className="w-80 bg-green-700 h-14 flex items-center justify-center rounded-2xl">
            <Text
              className="text-white text-lg"
              style={{ fontFamily: "Poppins_700Bold" }}
            >
              Masuk
            </Text>
          </TouchableOpacity>
        </View>
        <View className="w-full h-auto flex items-center justify-center flex-col">
          <View className="flex gap-5 flex-row w-full items-center justify-center mt-8">
            <View className="w-20 h-0.5 bg-gray-300"></View>
            <Text style={{ fontFamily: "Poppins_400Regular" }}>Atau</Text>
            <View className="w-20 h-0.5 bg-gray-300"></View>
          </View>
          <View>
            <TouchableOpacity className="w-14 h-14 mt-5 bg-gray-100 shadow  rounded-full">
              <Image
                source={require("../../assets/image/google.png")}
                className="w-14 h-14"
              ></Image>
            </TouchableOpacity>
          </View>
          <View className="w-64 h-0.5 bg-gray-300 mt-5"></View>
        </View>

        <Text
          className="text-center  text-sm mt-10"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          Belum Punya Akun ?{" "}
          <Link href="/#" className="text-green-700">
            <Text>Daftar Sekarang</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
}
