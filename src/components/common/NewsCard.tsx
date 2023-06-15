import { View, Text } from "react-native";
import { FC } from "react";

const NewsCard: FC<NewsArticle> = ({ title, source }) => {
  return (
    <View className="mb-5">
      <Text className="text-base">{title}</Text>
      <Text className="text-xs font-bold">Source: {source.name}</Text>
    </View>
  );
};

export default NewsCard;
