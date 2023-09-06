import React, { useEffect, useState } from "react";
import { getImages } from "../../api/pexels";
import RegisterForm from "../../components/RegisterForm";
import { useRegister } from "../../hooks/useRegister";
import { Icon } from "react-native-elements";
import { View } from "react-native";
import Votes from "../../components/Votes";

const HomeScreen = () => {
  const { initialValues, validationSchema, handleRegister, candidates, page, handleChangePage, votes,} =
    useRegister();
  return (
    <>
      <View
        style={{
          backgroundColor: "#303134",
          padding: 5,
          borderRadius: 9,
          width: 60,
          marginLeft: '40%'
          
        }}
      >
        <Icon
          name={page ? "leaderboard" : "description"}
          color={"white"}
          onPress={() => {handleChangePage()}}
        />
      </View>
      {page ? (
        <RegisterForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          handleRegister={handleRegister}
          candidates={candidates}
          page={page}
        />
      ):(
        <Votes votes={votes} candidates={candidates}/>
      )}
    </>
  );
};

export default HomeScreen;
