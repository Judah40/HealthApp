import { Link, Redirect, Stack } from 'expo-router';
import { Text, View } from 'react-native';

import { useSession } from '../../ctx';

export default function AppLayout() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
<Stack >
<Stack.Screen name='index'/>
<Stack.Screen name='patience' options={{title:"My Patients", headerStyle:{backgroundColor:"#4CAF50"}}}/>
<Stack.Screen name='profile' options={{title:"My Profile", headerStyle:{backgroundColor:"#4CAF50"}}}/>
<Stack.Screen name='appointment' options={{title:"Appointment", headerStyle:{backgroundColor:"#4CAF50"}}}/>
<Stack.Screen name='calendar' options={{title:"My Calendar", headerStyle:{backgroundColor:"#4CAF50"}}}/>
</Stack>    );
}
