
// import React from 'react'  // importing React 

// // importing some of the components of react-native to use it in the code directly
// import {
//   View,
//   Text,
//   Button,
//   SafeAreaView // It removes the notch(camera notch) from the mobile & display all the content
// } from 'react-native'

// let age = 22;
// let email = "adnan@gmail.com";

// function fruit(){
//   return 'apple';
// }

// const App = () => {
//   const name = "Adnan";
//   return (       // it is compulsory to use return ...
//   <SafeAreaView>
//       <View>
//         <Text style={{fontSize: 30}}> {name}</Text>
//         <Text style={{fontSize: 30}}> {age}</Text>
//         <Text style={{fontSize: 30}}> {email}</Text>
//         <Text style={{fontSize: 30}}> {fruit()}</Text>
//         <Button title='Press'></Button>
//         <Text style={{fontSize: 30}}> {age===22 ? "Above 18" : "Unknown age"}</Text>
//       </View>
//     </SafeAreaView>
//   )

// }

// export default App;

// --------------------------------------------------------------------------------------------------

// import React from 'react'

// import {
//   View,
//   Text,
//   SafeAreaView
// } from 'react-native'

// import CompanyData from './components/CompanyData'

// let App = () => {
//   return (
//     <SafeAreaView>
//       <View>
//         <CompanyData /> 
//         <Text></Text>
//         <Text style={{ fontSize: 30 }} >Components</Text>
//         <Text></Text>
//         <UserData />
//       </View>
//     </SafeAreaView>
//   )
// }

// let UserData = () => {
//   return (
//     <View>
//       <Text style={{ fontSize: 20 }} >Name: 'Adnan'</Text>
//       <Text style={{ fontSize: 20 }} >Age: 23</Text>
//       <Text style={{ fontSize: 20 }} >Email: adnan@test.com</Text>
//     </View>
//   )
// }

// export default App;

// --------------------------------------------------------------------------------------------------

// import React from 'react'
// import { View, Text, Button} from 'react-native'


// let App = () => {
//   // let data = 100;
//   const fruit=(val: string)=>{
//     // console.warn("Function called")
//     console.warn(val);

//     // data = 20;
//     // console.warn(data)
//   }

//   return (
//       <View>
//         {/* Here comes the state component from next video */}
//         {/* <Text style={{fontSize: 30, color:'black'}} >{data}</Text> */}

//         <Text style={{fontSize: 30, color:'black'}} >Button and onPress Event</Text>

//         {/* if you want to use parameter use the below one */}
//         <Button title='On Press' onPress={() =>fruit("Hello Adnan")} /> 

//         {/* if u dont want to use parameter then go for this */}
//         {/* <Button title='On Presss' onPress={fruit} color={'green'}/> */}
//       </View>
//   );
// };

// export default App;

// --------------------------------------------------------------------------------------------------
// ############################# STATE ##################################

// import React,{useState} from 'react'

// import {View, Text, Button} from 'react-native'

// let App = ()=> {
//   // let data = "Changes"
//   const [name, setName] = useState("Adnan");

//   function upName(){
//     setName("Ahmed")
//     // data = "Not changed"
//   }

//   return(
//     <View>
//       <Text style={{fontSize: 30}}>State in React Native</Text>
//       <Text style={{fontSize: 30}}>{name}</Text>
//       {/* <Text style={{fontSize: 30}}>{data}</Text> */}
//       <Button title='Update Name' onPress={upName} />
//       {/* <App1/> */}
//     </View>
//   )
// }

// // let App1 = ()=>{
// //   const [name, setName] = useState("Ismail");
// //   function testName(){
// //     setName("Mannan")
// //   }
// //   return(
// //     <View>
// //       <Text style={{fontSize: 20}}>APP 1</Text>
// //       <Text style={{fontSize: 20}}>{name}</Text>
// //       <Button title='Update' onPress={testName} />
// //     </View>
// //   )
// // }

// export default App;

// --------------------------------------------------------------------------------------------------
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Text>App</Text> */}
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ContactList/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

// --------------------------------------------------------------------------------------------------
// import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// // import Icon from 'react-native-vector-icons/FontAwesome';
// import Foundation from 'react-native-vector-icons/Foundation';
// import { DataTable } from 'react-native-paper';


// const App = () => {
  
//   // const  data = [
//   //   {
//   //     name: 'Prajesh Shakya',
//   //     present: 'yes', 
//   //     absent: 'no'
//   //   },
//   // ]

//   const [name, setName] = useState('')

//   function showName (){
//     setName('Ahmed')
//     // setName(`${data.name}`)
//   }
//   const [numEntries, setNumEntries] = useState(0);
//   const [entries, setEntries] = useState([]);

//   const handleAddEntry = () => {
//     const newEntry = {
//       name: 'Prajesh Shakya',
//       present: 'yes',
//       absent: 'no'
//     };
//     setEntries([...entries, newEntry]);
//   };
// useEffect(()=>{
//   let abc=[];
//   for(let i=0;i<numEntries;i++){
//     const newEntry = {
//       name: 'Prajesh Shakya',
//       present: 'yes',
//       absent: 'no'
//     };
//     abc.push(newEntry)
//   }
//   setEntries([...entries, ...abc]); 

// },[numEntries])
//   return (
//     <View>
//       <TextInput placeholder='enter number' onChangeText={value=>{console.log(value);setNumEntries(value);}}/>
//       <FlatList data={entries} keyExtractor={data=>data.name} renderItem={({item})=>(
//           // <View>
//           //   <Text>
//           //     {item.name}
//           //   </Text>
//           //   </View>
//           <Text>{item.name}</Text>
//       )}/>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     // backgroundColor: 'pink',
//   },
//   headerContainer: {
//     height: 100,
//     backgroundColor: '#0A79DF',
//     flexDirection: 'row',
//     // justifyContent: 'center',
//     paddingHorizontal: 20,
//     alignItems: 'center'
//   },
//   headerText: {
//     fontSize: 28,
//     letterSpacing: 2,
//     fontWeight: 'bold',
//     color: 'white',
//     marginLeft: 15,
//   },
//   dateContainer: {
//     backgroundColor: '#74B9FF',
//     height: 50,
//     flexDirection: 'row',
//   },
//   one: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingLeft: 20
//   },
//   cls: {
//     fontSize: 23,
//     fontWeight: 'bold',
//     color: 'white'
//   },
//   cls1: {
//     fontSize: 23,
//     color: 'white'
//   },
//   two: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     // paddingLeft: 20
//   },
//   datTit: {
//     fontSize: 23,
//     fontWeight: 'bold',
//     color: 'white'
//   },
//   datDesc: {
//     fontSize: 21,
//     color: 'white'
//   },
//   tableContainer: {
//     // backgroundColor: 'pink'
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // flexDirection: 'column'
//   },
//   headerStyle: {
//     backgroundColor: '#74B9FF',
    
//   },
//   titText: {
//     fontSize: 15,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: 'white'
//   },

// })


