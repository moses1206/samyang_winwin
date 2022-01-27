import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Modal from "./Modal";
import Stack from "./Stack";
import PromotionDetail from "../views/PromotionDetail";

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator screenOptions={{ headerShown: false }}>
    <Nav.Screen name="Modal" component={Modal} />
    <Nav.Screen name="Stack" component={Stack} />
    <Nav.Screen
      name="행사상세"
      component={PromotionDetail}
      getId={({ params }) => params.id}
      options={{ headerShown: true }}
    />
  </Nav.Navigator>
);

export default Root;
