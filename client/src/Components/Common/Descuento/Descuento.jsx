import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopMsj } from "../../../Redux/Store/Slices/AdminSlice";
import styles from "./Descuento.module.css";

const Descuento = () => {
  const dispatch = useDispatch();
  const topMsj = useSelector((state) => state.admin.topMsj);

  useEffect(() => {
    dispatch(getTopMsj());
  }, [dispatch]);

  return (
    <div className={styles.topMessage}>
      <h2>{topMsj}</h2>
    </div>
  );
};

export default Descuento;
