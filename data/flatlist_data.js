import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const data = [
  {
    id: 0,
    icon: '',
    text: 'Gmail',
    number: '',
  },
  {
    id: 2,
    icon: <MaterialIcons name="all-inbox" size={24} color="white" />,
    text: "All Inboxes",
    number: "",
  },
  {
    id: 1,
    icon: <MaterialIcons name="inbox" size={24} color="white" />,
    text: "Primary",
    number: "99+",
  },

  {
    id: 4,
    icon: <MaterialIcons name="people-alt" size={24} color="white" />,
    text: "Social",
    number: "33 new",
  },

  {
    id: 5,
    icon: <AntDesign name="tago" size={24} color="white" />,
    text: "Promotions",
    number: "9 new",
  },

];
