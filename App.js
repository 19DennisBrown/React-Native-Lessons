import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('Dev')
  const [age, setAge] = useState(23)
  const [value, setValue] = useState(0)
  const [dev, setDev] = useState({name:'Snr Dev😁', experience:12})

  const clickHandler=()=>{
    setName('Expert dev😒')
    setValue(value + 1)
    setDev({name:"Jnr Dev🤦", experience:1})
  }
  const incrementHandler=()=>{
    setValue(0)
  }

  const [people, setPeople] = useState([
    {name: 'Joness', key:1},
    {name: 'Jacob', key:2},
    {name: 'Jose', key:3},
    {name: 'Tramp', key:4},
    {name: 'Zaki', key:5},
    {name: 'Pioli', key:6},
  ])

  const pressHandler=(key)=>{
    console.log(key)
    setPeople((prevPeople)=>{
      return prevPeople.filter(person => person.key != key)
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>React native, yeeeaaah!!</Text>
      </View>

      <View style={styles.list}>
        <Text style={styles.formHeader}>Lists</Text>
          <FlatList
            // numColumns={3}
            keyExtractor={(item)=> item.key}
            data={people}
            renderItem={({ item })=>(
              <TouchableOpacity onPress={()=>pressHandler(item.key)}>
                <Text style={styles.person}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
         {/* <ScrollView>
            {people.map((person)=>{
              return(
                <View key={person.key}>
                  <Text style={styles.person}>{person.name}</Text>
                </View>
              )
            })}
         </ScrollView> */}
      </View>
      
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          lorem ipsum contigua,
          <Text> {name}</Text>
        </Text>
        <Text>
          This {dev.name} with {dev.experience} years of experience.
        </Text>
        <View style={styles.buttonContainer}>
          <Button title='update' onPress={clickHandler}/>
          <Button title='reset' onPress={incrementHandler}/>
        </View>
        <Text style={styles.bodyText}>
          {value}
        </Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formHeader}>form</Text>
        <View>
          <Text>Enter name: </Text>
          <TextInput
          //  multiline
           keyboardType='email-address'
           style={styles.input}
           placeholder='eg Dev snr'
           onChangeText={(val)=>setName(val)}
           />
          <Text>Enter age: </Text>
          <TextInput
           keyboardType='numeric'
           style={styles.input}
           placeholder='eg 18'
           onChangeText={(val)=>setAge(val)}
           />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor:'blue',
    padding: 20,
  },
  text: {
    fontWeight:'bold',
    fontSize:16,
  },
  body: {
    backgroundColor: 'pink',
    padding: 20,
    marginTop: 10,
    borderRadius: 12,
    width: 400,
  },
  bodyText: {
    fontStyle: 'italic',
    margin: 4,
    textAlign: 'right',
    fontSize: 20,
  },
  buttonContainer:{
    width:200,
    height:50,
    marginTop:10,
  },
  form: {
    backgroundColor: 'yellow',
    width: 400,
    height:200 ,
    borderRadius: 10,
    marginTop: 17,
    paddingLeft:30,
  },
  formHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline line-through'
  },
  input: {
    borderRadius: 12,
    borderWidth:1,
    width: 250,
    paddingHorizontal:10,
    margin: 6,
  },
  list: {
    backgroundColor: 'orange',
    width: 400,
    height:200 ,
    borderRadius: 10,
    marginTop: 17,
    paddingHorizontal:10,
  },
  person: {
    height: 50,
    marginVertical:10,
    borderWidth:2,
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:9,
    borderColor:'grey',
    backgroundColor:'green'
  }
});
