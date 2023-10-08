import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points.map((val, index) => (
          <View style={styles.pointWrapper} key={val + index}>
            <Text style={styles.pointDot} />
            <Text style={styles.pointText}>{val}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
