import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { CameraView, Camera } from "expo-camera";
import React, { useState, useEffect } from "react";
import sampleData from "./assets/sample.json";
import Approve from "./Modal/Approve";
import Deny from "./Modal/Deny";

export default function App() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState<string | null>(null);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showDenyModal, setShowDenyModal] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    setData(data);

    // Assume the scanned QR code data is an email for this example
    const isValidUser = sampleData.users.some(
      (user: { email: string }) => user.email === data
    );

    if (isValidUser) {
      setShowApproveModal(true);
    } else {
      setShowDenyModal(true);
    }

    // Automatically reset scanning after 3 seconds
    setTimeout(() => {
      setScanned(false);
      setData(null);
    }, 3000);
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
      <Text style={styles.text}>Scan a QR code</Text>
      <View style={styles.scannerContainer}>
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr", "pdf417"],
          }}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      {data && <Text style={styles.resultText}>Scanned Data: {data}</Text>}
      <StatusBar style="auto" />
      <Text style={styles.footer_text}>
        Powered by <Text style={styles.text_span}>BLINK</Text> CREATIVE STUDIO
      </Text>

      <Approve visible={showApproveModal} onClose={closeApproveModal} />
      <Deny visible={showDenyModal} onClose={closeDenyModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#A30A24",
    fontSize: 20,
    marginBottom: 20,
  },

  text_span: {
    fontWeight: "bold",
  },

  footer_text: {
    color: "#000000",
    fontSize: 16,
    position: "absolute",
    bottom: 0,
    marginBottom: 12,
  },

  scannerContainer: {
    width: "90%",
    height: 300,
    overflow: "hidden",
    borderRadius: 10,
    borderColor: "#A30A24",
    borderWidth: 2,
    marginBottom: 20,
  },

  resultText: {
    marginTop: 20,
    fontSize: 16,
    color: "green",
  },

  statusText: {
    marginTop: 10,
    fontSize: 18,
    color: "#333",
  },
});
