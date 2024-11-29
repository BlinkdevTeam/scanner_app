import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CameraView, Camera } from "expo-camera";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker"; // Import Picker from the correct package
import Approve from "./Modal/Approve";
import Deny from "./Modal/Deny";
import { globalStyles as styles } from "./globalStyles";
import Svg, { Path } from "react-native-svg";
import { database, ref, get, update } from "./firebaseConfig";

export default function App() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showDenyModal, setShowDenyModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>("day1"); // New state for day selection

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
      } catch (error) {
        console.error("Error requesting camera permission:", error);
        setHasPermission(false);
      }
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async (event: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    setData(event.data);
    const usersRef = ref(database, "users");

    try {
      const snapshot = await get(usersRef);

      if (snapshot.exists()) {
        const usersData = snapshot.val();
        const userKey = Object.keys(usersData).find(
          (key) => usersData[key].email === event.data
        );

        if (userKey) {
          const user = usersData[userKey];

          // Update the selected day's attendance in Firebase
          await update(ref(database, `users/${userKey}`), {
            [`${selectedDay}`]: "attended", // Mark the selected day as attended
            [`${selectedDay}timeAttended`]: new Date().toLocaleString("en-US", {
              timeZone: "Asia/Manila",
            }), // Update the time for the selected day
          });

          setFirstName(user.firstName);
          setLastName(user.lastName);
          setShowApproveModal(true);
        } else {
          setShowDenyModal(true);
        }
      } else {
        console.log("No data available");
        setShowDenyModal(true);
      }
    } catch (error) {
      console.error("Error reading from Firebase:", error);
      setShowDenyModal(true);
    }

    // Reset state after timeout
    setTimeout(() => {
      setScanned(false);
      setData(null);
      setFirstName(null);
      setLastName(null);
    }, 4900);
  };

  const closeApproveModal = () => {
    setShowApproveModal(false);
  };

  const closeDenyModal = () => {
    setShowDenyModal(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.scannerContainer}>
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      <Text style={styles.text}>Place the code inside the frame</Text>

      {/* Dropdown for selecting day */}
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedDay}
          onValueChange={(itemValue) => setSelectedDay(itemValue)}>
          <Picker.Item label="December 2, 2024" value="day1" />
          <Picker.Item label="December 3, 2024" value="day2" />
          <Picker.Item label="December 4, 2024" value="day3" />
          <Picker.Item label="December 5, 2024" value="day4" />
        </Picker>
      </View>

      {/* Conditional loader rendering */}
      {scanned && <View style={styles.loader}></View>}

      <StatusBar style="auto" />
      <View style={styles.qrIconContainer}>
        <Svg width="23" height="30" viewBox="0 0 63 85" fill="none">
          <Path
            d="M12.63 80.832L0.382812 84.2014V17.3264L12.63 13.957V80.832Z"
            fill="#A30A24"
          />
          <Path
            d="M31.0016 26.5274V22.9062L62.7613 14.1681V0.164062L16.9023 12.7829V44.4106L62.7613 31.7917V17.7893L31.0016 26.5274Z"
            fill="#A30A24"
          />
          <Path
            d="M48.6621 56.9145V53.2933L16.9023 62.0315V48.029L62.7613 35.4102V67.0378L16.9023 79.6551V65.6526L48.6621 56.9145Z"
            fill="#A30A24"
          />
        </Svg>
      </View>
      <Text style={styles.footer_text}>
        Powered by <Text style={styles.text_span}>BLINK</Text> CREATIVE STUDIO
      </Text>
      <Approve
        visible={showApproveModal}
        onClose={closeApproveModal}
        data={data}
        firstName={firstName}
        lastName={lastName}
      />
      <Deny visible={showDenyModal} onClose={closeDenyModal} data={data} />
    </View>
  );
}
