// import { StyleSheet, View, Text } from "react-native";
// import TaskCard from "./components/TaskCard";
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>My Tasks</Text>
//       <TaskCard title="Finish Lab 2" done={false} />
//       <TaskCard title="Read Chapter 3" done={true} />
//       <TaskCard title="Walk the dog" done={false} />
//       {/* experiment: add a 4th task  */}
//       <TaskCard title="Water the plants" done={true} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 60,
//     paddingHorizontal: 16,
//     backgroundColor: "#FFFFFF",
//   },

//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 12,
//   },
// });


// try replace its contents for welcomeScreen
// import WelcomeScreen from "./screens/WelcomeScreen";

// export default function App() {
//   return <WelcomeScreen />;
// }




// try replace its contents for AddtaskScreen
import AddTaskScreen from './screens/AddTaskScreen';

export default function App() {
return <AddTaskScreen />;

}