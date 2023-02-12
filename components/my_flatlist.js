import { View, TouchableHighlight, Text, FlatList } from "react-native"
import { data } from "../data/flatlist_data"
import { styles } from "../styles"



export const ListItems = () => {

    return (
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableHighlight
              key={item.id}
              style={{
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                marginTop: 7,
                marginRight: 7,
              }}
              activeOpacity={0.1}
              underlayColor="gray"
              onPress={()=> alert('pressed!!')}
              
            >
              <View
                style={
                  item.id == "1"
                    ? { ...styles.listStyle, backgroundColor: "#f87171" }
                    : styles.listStyle
                }
              >
                {item.icon}
                <Text style={styles.text}>{item.text}</Text>

                {item.id == 1 && (
                  <Text style={styles.textTotal}>{item.number}</Text>
                )}

                {item.text == "Social" && (
                  <Text
                    style={[styles.textTotal, { backgroundColor: "#3b82f6" }]}
                  >
                    {item.number}
                  </Text>
                )}
                {item.text == "Promotions" && (
                  <Text
                    style={[styles.textTotal, { backgroundColor: "#16a34a" }]}
                  >
                    {item.number}
                  </Text>
                )}
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
}
