import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { globalStyles as styles } from "../globalStyles";

interface ApproveProps {
  visible: boolean;
  onClose: () => void;
  data: string | null;
  firstName: string | null;
  lastName: string | null;
}

const Approve: React.FC<ApproveProps> = ({
  visible,
  onClose,
  data,
  firstName,
  lastName,
}) => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (!visible) return;

    setCountdown(4);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeout(() => {
            onClose();
          }, 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [visible, onClose]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/modal/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Svg width="99" height="99" viewBox="0 0 199 199" fill="none">
            <Path
              d="M196.209 108.696C198.1 111.539 199 114.724 199 117.875C199 123.564 196.06 129.128 190.707 132.3C185.517 135.38 182.414 140.868 182.414 146.71C182.414 147.425 182.461 148.147 182.555 148.873C182.653 149.608 182.698 150.338 182.698 151.058C182.698 159.603 176.061 166.964 167.138 167.801C163.747 168.121 160.612 169.406 158.057 171.4C155.501 173.394 153.525 176.103 152.454 179.269C150.052 186.36 143.319 190.819 136.123 190.819C134.15 190.819 132.14 190.482 130.176 189.775C128.236 189.076 126.223 188.735 124.229 188.735C119.652 188.735 115.167 190.526 111.864 193.867C108.483 197.291 103.992 199 99.5 199C95.0084 199 90.5169 197.291 87.1365 193.867C83.8351 190.526 79.35 188.735 74.7708 188.735C72.7772 188.735 70.7622 189.076 68.8241 189.775C66.8604 190.482 64.8497 190.819 62.8774 190.819C55.6807 190.819 48.9455 186.36 46.5459 179.269C45.4753 176.101 43.5009 173.394 40.9432 171.4C38.3876 169.406 35.2529 168.121 31.8618 167.801C22.9364 166.962 16.3016 159.603 16.3016 151.058C16.3016 150.338 16.3486 149.608 16.4448 148.873C16.541 148.149 16.5858 147.428 16.5858 146.71C16.5858 140.87 13.4832 135.38 8.29291 132.3C2.94023 129.126 0 123.562 0 117.875C0 114.724 0.901729 111.539 2.79066 108.696C4.64967 105.901 5.57918 102.701 5.57918 99.5C5.57918 96.2987 4.64967 93.0995 2.79066 90.3041C0.899592 87.4606 0 84.276 0 81.1249C0 75.4358 2.94023 69.8722 8.29291 66.7002C13.4832 63.6202 16.5858 58.132 16.5858 52.2901C16.5858 51.5745 16.5388 50.8527 16.4448 50.1266C16.3465 49.3922 16.3016 48.662 16.3016 47.9422C16.3016 39.397 22.9385 32.0361 31.8618 31.1992C35.2529 30.879 38.3876 29.5943 40.9432 27.6003C43.4988 25.6063 45.4753 22.8967 46.5459 19.7309C48.9476 12.6399 55.6807 8.18112 62.8774 8.18112C64.8497 8.18112 66.8604 8.51799 68.8241 9.22521C70.7643 9.92406 72.7772 10.2651 74.7708 10.2651C79.3478 10.2651 83.833 8.47405 87.1365 5.13255C90.5169 1.70946 95.0084 0 99.5 0C103.992 0 108.483 1.70946 111.864 5.13255C116.603 9.92824 123.783 11.5331 130.176 9.22521C132.14 8.51799 134.15 8.18112 136.123 8.18112C143.319 8.18112 150.055 12.6399 152.454 19.7309C153.525 22.8988 155.499 25.6063 158.057 27.6003C160.612 29.5943 163.747 30.879 167.138 31.1992C176.064 32.0382 182.698 39.397 182.698 47.9422C182.698 48.662 182.651 49.3922 182.555 50.1266C182.459 50.8506 182.414 51.5724 182.414 52.2901C182.414 58.1299 185.517 63.6202 190.707 66.7002C196.06 69.8743 199 75.4379 199 81.1249C199 84.276 198.098 87.4606 196.209 90.3041C194.35 93.0995 193.421 96.2987 193.421 99.5C193.421 102.701 194.35 105.901 196.209 108.696Z"
              fill="url(#paint0_linear_209_969)"
            />
            <Path
              d="M84.3757 150.641L49.4668 116.458V111.556L64.4522 101.783L82.741 119.691L133.086 58.996L149.537 67.1792V72.0816L84.3757 150.641Z"
              fill="url(#paint1_linear_209_969)"
            />
            <Path
              d="M84.3757 145.739L49.4668 111.556L64.4522 96.8825L82.741 114.791L133.086 54.0958L149.537 67.1793L84.3757 145.739Z"
              fill="white"
            />
            <Defs>
              <LinearGradient
                id="paint0_linear_209_969"
                x1="161.476"
                y1="156.99"
                x2="35.5785"
                y2="35.1855"
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="#33D679" />
                <Stop offset="1" stopColor="#AADB53" />
              </LinearGradient>
              <LinearGradient
                id="paint1_linear_209_969"
                x1="87.4591"
                y1="59.7869"
                x2="112.397"
                y2="128.959"
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="#33D679" />
                <Stop offset="1" stopColor="#1DAD59" />
              </LinearGradient>
            </Defs>
          </Svg>
          <Text style={styles.SuccessText}>QR Code Successfully Verified</Text>
          <Text style={styles.modalText}>
            The code is valid and verified.{"\n"}
            You can proceed with the following data:
          </Text>
          <View style={styles.modalDataContainer}>
            {firstName && lastName && (
              <Text style={styles.modalDataText}>
                Name: {firstName} {lastName}
              </Text>
            )}
            {data && <Text style={styles.modalDataText}>Email: {data} </Text>}
          </View>
          <Pressable style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>
              VERIFY ANOTHER QR Code ({countdown} seconds)
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default Approve;
