import React from "react";
import { Outlet } from "react-router-dom";
import LoadContext from "../context/LoadingProvider";
import { useContext, useEffect } from "react";
import Loader from "./Loader";
import { AnimatePresence } from "framer-motion";

const CheckLoaded = () => {
  const { isLoading } = useContext(LoadContext);
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>{true && <Loader />}</AnimatePresence>
      <Outlet />
    </>
  );
};

export default CheckLoaded;
