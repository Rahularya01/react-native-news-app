import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useNewsData } from "../api/useNewsData";
import NewsCard from "../components/common/NewsCard";

const Home = () => {
  const { data, isLoading, isSuccess, isError, error } = useNewsData({});
  return (
    <ScrollView>
      {isLoading && <Text>Loading...</Text>}
      {isSuccess && (
        <View className="p-3">
          {data.articles.map((news, i) => (
            <NewsCard key={i} {...news} />
          ))}
        </View>
      )}
      {isError && <Text>{JSON.stringify(error.response?.data)}</Text>}
    </ScrollView>
  );
};

export default Home;
