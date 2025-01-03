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
}

const Deny: React.FC<ApproveProps> = ({ visible, onClose, data }) => {
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
      onRequestClose={onClose}>
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
              d="M196.209 111.005C198.1 113.908 199 117.161 199 120.379C199 126.189 196.06 131.87 190.707 135.11C185.517 138.255 182.414 143.86 182.414 149.826C182.414 150.557 182.461 151.294 182.555 152.035C182.653 152.785 182.698 153.531 182.698 154.266C182.698 162.993 176.061 170.51 167.138 171.365C163.747 171.692 160.612 173.004 158.057 175.04C155.501 177.076 153.525 179.844 152.454 183.077C150.052 190.318 143.319 194.872 136.123 194.872C134.15 194.872 132.14 194.528 130.176 193.805C128.236 193.092 126.223 192.743 124.229 192.743C119.652 192.743 115.167 194.573 111.864 197.985C108.483 201.481 103.992 203.227 99.5 203.227C95.0084 203.227 90.5169 201.481 87.1365 197.985C83.8351 194.573 79.35 192.743 74.7708 192.743C72.7772 192.743 70.7622 193.092 68.8241 193.805C66.8604 194.528 64.8497 194.872 62.8774 194.872C55.6807 194.872 48.9455 190.318 46.5459 183.077C45.4753 179.841 43.5009 177.076 40.9432 175.04C38.3876 173.004 35.2529 171.692 31.8618 171.365C22.9364 170.508 16.3016 162.993 16.3016 154.266C16.3016 153.531 16.3486 152.785 16.4448 152.035C16.541 151.296 16.5858 150.559 16.5858 149.826C16.5858 143.862 13.4832 138.255 8.29291 135.11C2.94023 131.868 0 126.186 0 120.379C0 117.161 0.901729 113.908 2.79066 111.005C4.64967 108.15 5.57918 104.883 5.57918 101.613C5.57918 98.344 4.64967 95.0768 2.79066 92.2221C0.899592 89.3182 0 86.0659 0 82.8479C0 77.038 2.94023 71.3562 8.29291 68.1168C13.4832 64.9715 16.5858 59.3667 16.5858 53.4007C16.5858 52.6699 16.5388 51.9327 16.4448 51.1913C16.3465 50.4413 16.3016 49.6955 16.3016 48.9605C16.3016 40.2338 22.9385 32.7165 31.8618 31.8618C35.2529 31.5349 38.3876 30.2229 40.9432 28.1865C43.4988 26.1501 45.4753 23.383 46.5459 20.15C48.9476 12.9084 55.6807 8.35488 62.8774 8.35488C64.8497 8.35488 66.8604 8.6989 68.8241 9.42114C70.7643 10.1348 72.7772 10.4831 74.7708 10.4831C79.3478 10.4831 83.833 8.65403 87.1365 5.24157C90.5169 1.74576 95.0084 0 99.5 0C103.992 0 108.483 1.74576 111.864 5.24157C116.603 10.1391 123.783 11.778 130.176 9.42114C132.14 8.6989 134.15 8.35488 136.123 8.35488C143.319 8.35488 150.055 12.9084 152.454 20.15C153.525 23.3851 155.499 26.1501 158.057 28.1865C160.612 30.2229 163.747 31.5349 167.138 31.8618C176.064 32.7187 182.698 40.2338 182.698 48.9605C182.698 49.6955 182.651 50.4413 182.555 51.1913C182.459 51.9306 182.414 52.6678 182.414 53.4007C182.414 59.3645 185.517 64.9715 190.707 68.1168C196.06 71.3584 199 77.0401 199 82.8479C199 86.0659 198.098 89.3182 196.209 92.2221C194.35 95.0768 193.421 98.344 193.421 101.613C193.421 104.883 194.35 108.15 196.209 111.005Z"
              fill="url(#paint0_linear_210_1026)"
            />
            <Path
              d="M114.803 104.489L145.414 132.225V135.101L130.117 150.401L99.5052 119.789L68.8913 150.401L53.5918 135.101V132.225L84.2057 104.489L53.5918 73.8756V70.9994L68.8913 58.5782L99.5052 89.1921L130.117 58.5782L145.414 70.9994V73.8756L114.803 104.489Z"
              fill="url(#paint1_linear_210_1026)"
            />
            <Path
              d="M114.803 101.615L145.414 132.225L130.117 147.525L99.5052 116.913L68.8913 147.525L53.5918 132.225L84.2057 101.615L53.5918 70.9994L68.8913 55.702L99.5052 86.3159L130.117 55.702L145.414 70.9994L114.803 101.615Z"
              fill="white"
            />
            <Defs>
              <LinearGradient
                id="paint0_linear_210_1026"
                x1="161.476"
                y1="160.324"
                x2="33.0221"
                y2="38.6312"
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#D63333" />
                <Stop offset="1" stopColor="#F7875B" />
              </LinearGradient>
              <LinearGradient
                id="paint1_linear_210_1026"
                x1="105.134"
                y1="145.623"
                x2="94.4837"
                y2="65.104"
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#AD2929" />
                <Stop offset="1" stopColor="#D63333" />
              </LinearGradient>
            </Defs>
          </Svg>
          <Text style={styles.InvalidText}>Invalid QR Code</Text>
          <Text style={styles.modalText}>
            The code cannot be verified. Please try again.
          </Text>
          {data && <Text style={styles.modalDataText}>{data} </Text>}
          {/* Display the scanned data */}
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

export default Deny;
