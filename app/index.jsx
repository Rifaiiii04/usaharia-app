import { Link, useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import "./styles/global.css";

export default function Index() {
  const router = useRouter();
  return (
    <View className="w-screen h-screen flex-1 items-center justify-center bg-white">
      <View className="w-full h-auto items-center justify-center ">
        <Image
          source={require("../assets/image/images.png")}
          className="object-cover scale-75"
        ></Image>
        <View className="w-72 ">
          <Text
            className="text-3xl text-center"
            style={{ fontFamily: "Poppins_700Bold" }}
          >
            Selamat Datang di <Text className="text-green-800">Usaharia</Text>
          </Text>
        </View>
        <View className="w-96 mt-8">
          <Text
            className="text-center text-md"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            <Text className="text-green-800">Usaharia</Text> adalah Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Ipsam totam asperiores
            optio. Eos, blanditiis ipsum!
          </Text>
        </View>
      </View>
      <View className="w-full h-auto items-center mt-10 justify-center">
        <TouchableOpacity
          className="bg-green-700 w-[320px] h-14 flex items-center justify-center rounded-xl "
          onPress={() => router.push("/login")}
        >
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-gray-100 text-lg"
          >
            Masuk Sebagai Pembeli
          </Text>
        </TouchableOpacity>
      </View>
      <View className="w-full h-auto items-center mt-8 justify-center">
        <TouchableOpacity
          className=" w-[320px] h-14 flex items-center justify-center rounded-xl border-2 border-green-700 "
          onPress={() => router.push("/#")}
        >
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-green-700 text-lg"
          >
            Masuk Sebagai Pedagang
          </Text>
        </TouchableOpacity>
      </View>

      <View className="mt-24">
        <Text
          className="text-center text-sm"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          Belum Punya Akun ?{" "}
          <Link href="/register" className="text-green-600">
            Daftar Sekarang
          </Link>
        </Text>
      </View>
    </View>
  );
}
