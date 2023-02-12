import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";



export const sectionData = [
  {
    title: "Gmail",
    data: [],
  },
  {
    title: "",
    data: [
      {
        id: 1,
        icon: <MaterialIcons name="all-inbox" size={24} color="white" />,
        text: "All Inboxes",
        number: "",
      },

      {
        id: 2,
        icon: <MaterialIcons name="inbox" size={24} color="white" />,
        text: "Primary",
        number: "99+",
      },
      {
        id: 3,
        icon: <MaterialIcons name="people-alt" size={24} color="white" />,
        text: "Social",
        number: "33 new",
      },

      {
        id: 4,
        icon: <AntDesign name="tago" size={24} color="white" />,
        text: "Promotions",
        number: "9 new",
      },
    ],
  },
  {
    title: "ALL LABELS",
    data: [
      {
        id: "5",
        icon: <Entypo name="star-outlined" size={24} color="white" />,
        text: "Starred",
        number: "7",
      },
      {
        id: "6",
        icon: <Feather name="clock" size={24} color="white" />,
        text: "Snoozed",
        number: "",
      },
      {
        id: 7,
        icon: (
          <MaterialIcons
            name="label-important-outline"
            size={24}
            color="white"
          />
        ),
        text: "Important",
        number: "99+",
      },
      {
        id: 8,
        icon: <MaterialIcons name="send" size={24} color="white" />,
        text: "Sent",
        number: "4",
      },

      {
        id: 9,
        icon: <MaterialIcons name="schedule-send" size={24} color="white" />,
        text: "Scheduled",
        number: "",
      },
      {
        id: 10,
        icon: <MaterialIcons name="outbox" size={24} color="white" />,
        text: "Outbox",
        number: "",
      },
      {
        id: 11,
        icon: <AntDesign name="file1" size={24} color="white" />,
        text: "Drafts",
        number: "13",
      },
      {
        id: 12,
        icon: (
          <MaterialCommunityIcons
            name="email-multiple-outline"
            size={24}
            color="white"
          />
        ),
        text: "All mail",
        number: "99+",
      },
      {
        id: 13,
        icon: <Octicons name="stop" size={24} color="white" />,
        text: "Spam",
        number: "10",
      },
      {
        id: 14,
        icon: (
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={24}
            color="white"
          />
        ),
        text: "Trash",
        number: "1",
      },
    ],
  },

  {
    title: "GOOGLE APPS",
    data: [
      {
        id: 15,
        icon: <MaterialIcons name="calendar-today" size={24} color="white" />,
        text: "Calender",
        number: "",
      },
      {
        id: 16,
        icon: <FontAwesome5 name="user-circle" size={24} color="white" />,
        text: "Contact",
        number: "",
      },
      {
        id: 17,
        icon: <Ionicons name="settings-sharp" size={24} color="white" />,
        text: "Settings",
        number: "",
      },
      {
        id: 18,
        icon: (
          <MaterialCommunityIcons
            name="help-circle-outline"
            size={24}
            color="white"
          />
        ),
        text: "Help & feedback",
        number: "",
      },
    ],
  },
];
