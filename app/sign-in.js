import { router } from "expo-router";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useSession } from "../ctx";
import { AntDesign } from '@expo/vector-icons';

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View className="flex-1 bg-gray-200 items-center justify-center space-y-8">
      {/**logo */}
      <View>
        <Text className="text-2xl font-bold ">Health Care App</Text>
      </View>

      {/**login */}

      <View className="w-full ">
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Handle form submission here (e.g., send data to an API)
          if(values.username==="admin" && values.password==="admin"){
            signIn()
            router.push("/(app)")
          }
            console.log(values);
          }}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <View className="space-y-8 items-center">

            <View className="w-full items-center space-y-2">
            <TextInput
              placeholder="Username"
              value={values.username}
              autoCapitalize="none"
              onChangeText={handleChange("username")}
              className="w-10/12 h-12 p-4 rounded border"
            />
            {touched.username && errors.username && (
              <View className="w-10/12">
              <Text className="text-red-500">{errors.username}</Text>
              </View>
            )}
            </View>

              <View className="w-full items-center space-y-2">
              <TextInput
                placeholder="Password"
                value={values.password}
                autoCapitalize="none"
                onChangeText={handleChange("password")}
                secureTextEntry
                className="w-10/12 h-12 p-4 rounded border"
              />
              {touched.password && errors.password && (
                <View className="w-10/12">
                <Text className="text-red-500">{errors.password}</Text>
                </View>
              )}
              </View>

              {/**Forgot password */}
                  <View  className="w-10/12 items-end">
                  <TouchableOpacity >
                  <Text className="text-green-500">Forgot Password?</Text>
                  </TouchableOpacity>
                  </View>
              <TouchableOpacity
                onPress={handleSubmit}
                className="w-10/12 h-12 shadow-xl items-center justify-center bg-green-500 rounded"
              >
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        {/**Alternative login eg google and facebook auth */}
        <View className="flex flex-row space-x-4 justify-center items-center h-32">
        {/**google */}
        <TouchableOpacity className="border-[0.2px] rounded">
        <AntDesign name="google" size={40} color="black" />
        </TouchableOpacity>


        {/**faceboook */}
        <TouchableOpacity className="border-[0.2px] rounded">
        <AntDesign name="facebook-square" size={40} color="black" />
        </TouchableOpacity>


        {/**instagram */}
        <TouchableOpacity className="border-[0.2px] rounded">
        <AntDesign name="instagram" size={40} color="black" />
        </TouchableOpacity>
        </View>

       
      </View>


 {/**SignUp Link */}

 <View className="w-10/12 h-10 flex-row justify-center space-x-2 ">
 <Text>
 don't have an account?
 </Text>

 <TouchableOpacity
 onPress={()=>{
  router.push("/sign-up")
 }}
 >
 <Text className="text-green-500">
 Sign up
 </Text>
 </TouchableOpacity>
 </View>
    </View>
  );
}

{
  /**<Text
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/');
        }}>
        Sign In
      </Text> */
}
