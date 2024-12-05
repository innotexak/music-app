/* eslint-disable react-native/no-inline-styles */
import React, {FC, useEffect} from 'react';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface IMovingText {
  text: string;
  animatedThreshold: number;
  style: Record<string, any>;
}
const MovingText: FC<IMovingText> = ({text, animatedThreshold, style}) => {
  const translateX = useSharedValue(0);

  const shouldAnimate = text.length >= animatedThreshold;
  const textWidth = text.length + 40;

  useEffect(() => {
    if (!shouldAnimate) return;
    translateX.value = withDelay(
      1000,
      withRepeat(
        withTiming(-textWidth, {
          duration: 5000,
          easing: Easing.linear,
        }),
        -1,
        true,
      ),
    );
    return () => {
      cancelAnimation(translateX);
      translateX.value = 0;
    };
  }, [translateX, text, animatedThreshold, textWidth, shouldAnimate]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });
  return (
    <Animated.Text
      numberOfLines={1}
      style={[
        animatedStyle,
        style,
        shouldAnimate && {width: 9999, paddingLeft: 16},
      ]}>
      {text}
    </Animated.Text>
  );
};

export default MovingText;


