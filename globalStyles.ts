// globalStyles.ts
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  logoContainer: {
    width: "70%",
    height: undefined,
    aspectRatio: 1.5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  SuccessText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
    color: "#0E9046",
  },
  InvalidText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
    color: "#D63333",
  },
  modalText: {
    fontSize: 15,
    marginVertical: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#EFB71E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginVertical: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  modalDataContainer: {
    width: "80%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  modalDataText: {
    fontSize: 16,
    color: "green",
    marginTop: 10,
    textAlign: "left",
    fontWeight: "bold",
  },
  qrIconContainer: {
    position: "absolute",
    bottom: 0,
    marginBottom: 50,
  },
});
