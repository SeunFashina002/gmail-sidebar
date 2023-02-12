import {
  StyleSheet,
} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1917",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  listContainer: {
    backgroundColor: "#27272a",
    width: 320,
    height: '100%',
  },

  mainHeader: {
    color: 'white',
    paddingLeft: 25,
    marginTop: 60,
    fontSize: 30,
    marginBottom: -18,
  },

  text: {
    color: "white",
    fontSize: 16,
    marginLeft: 20,
    marginRight: 'auto',
  },

  header: {
    color: 'white',
    paddingLeft: 25,
    paddingTop: 15,
    paddingBottom: 15,
    fontWeight: 'bold',
    fontSize: 12,
  },

  textTotal: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    right: 10,
    borderRadius: 10,
    width: 55,
    textAlign: 'center',
    padding: 4,
    
  },

  inboxStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "gray",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    width: 350,
    height: 70,
    paddingLeft: 25,
    // paddingVertical: 50,
    
    marginBottom: 3,
  },

  listStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    marginTop: 1,
    marginRight: 1,
    height: 60,
    paddingLeft: 25,
  },
});
