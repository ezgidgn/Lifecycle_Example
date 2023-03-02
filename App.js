
import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView,Text, View } from 'react-native';

function App(){

const [helloFlag, setHelloFlag]=useState(true);


function updateFlag(){
  setHelloFlag(helloFlag);
}
  return(
    <SafeAreaView>
      <Text style={{fontWeight:'bold',fontSize:30,}}>Hello Lifecycle</Text>
      <Button 
      title='Up' onPress={updateFlag}/>
      {helloFlag && <Hello />}
    </SafeAreaView>
    

  );
}


export default App;

function Hello(){
  useEffect(() =>{
    console.log('Merhaba dünya');

    return()=>{
      console.log('Gidiyorun...')
    };
  },[]);
  return (
  <View style ={{backgroundColor:"pink", padding:10,}}>
  <Text style={{fontWeight:"bold",}}>I'm Hello Component</Text>
  </View>
  );
}
