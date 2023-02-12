import { View,  Text, SectionList, TouchableHighlight } from "react-native"
import { styles } from "../styles"
import { sectionData } from "../data/sectionlist_data"

export const SectionItems = () => {
    return (
      <View style={styles.listContainer}>
        <SectionList
          sections={sectionData}
          keyExtractor={(item) => item.id}
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
              onPress={() => alert("working...")}
            >
              <View
                style={[
                  item.id == "2"
                    ? { ...styles.listStyle, backgroundColor: "#f87171" }
                    : styles.listStyle,
                  item.id == '1' ? [{ ...styles.listStyle }, styles.inboxStyle ] : '']}
              >
                {item.icon}
                <Text style={styles.text}>{item.text}</Text>

                <Text style={styles.textTotal}>
                  {item.text != "Social" &&
                    item.text != "Promotions" &&
                    item.number}
                </Text>

                {item.id == 1 && (
                  <Text style={styles.textTotal}>{item.number}</Text>
                )}

                {item.text == "Social" && (
                  <Text
                    style={[styles.textTotal, { backgroundColor: "#3b82f6", color:'black'}]}
                  >
                    {item.number}
                  </Text>
                )}
                {item.text == "Promotions" && (
                  <Text
                    style={[styles.textTotal, { backgroundColor: "#16a34a", color: 'black', }]}
                  >
                    {item.number}
                  </Text>
                )}
              </View>
            </TouchableHighlight>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text
              style={
                title == "Gmail" ? { ...styles.mainHeader } : styles.header
              }
            >
              {title}
            </Text>
          )}
        />
      </View>
    );
}



