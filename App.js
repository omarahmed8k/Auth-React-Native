import { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, FlatList } from 'react-native';
import styles from './styles';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  addGoal = () => {
    if (text.trim() === '') {
      return alert('Please enter a goal');
    }

    setItems((currentItems) => [...currentItems, { id: Math.random().toString(), value: text }])
    setText('');
  }

  console.log(items)

  return (
    <View style={styles.container}>
      <View style={styles.input}><TextInput style={styles.w100} placeholder='New Goal' value={text} onChangeText={(e) => { setText(e) }} /></View>
      <View style={styles.button}><Button title="Add" onPress={() => { addGoal() }} /></View>


      <View style={styles.w100}><View style={{ borderBottomColor: 'white', borderBottomWidth: 1, marginTop: 20, marginBottom: 0 }} /></View>
      <View style={[styles.w100, styles.mb50]}>
        <FlatList
          data={items}
          renderItem={(itemData) => {
            return (
              items?.length > 0 && (
                <Text style={styles.text} onPress={() => {
                  setItems((currentItems) => {
                    return currentItems.filter((item) => item.id !== itemData.item.id)
                  })
                }}>
                  {itemData.item.value}
                </Text>
              )
            )
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View >
  );
}