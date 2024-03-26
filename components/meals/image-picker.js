"use client";

import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  //
  const [pickedImg, setPickedImg] = useState();
  const ImgInputRef = useRef();

  const handlePickClick = () => {
    ImgInputRef.current.click();
  };
  const hadleImgChange = (event) => {
    //
    const file = event.target.files[0];

    if (!file) {
      setPickedImg(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImg(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImg && <p>No img picked yet</p>}
          {pickedImg && <Image src={pickedImg} alt="user picked img" fill />}
        </div>

        <input
          id={name}
          className={styles.input}
          type="file"
          accept="image/png, image/jpeg"
          name={name}
          ref={ImgInputRef}
          onChange={hadleImgChange}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Img
        </button>
      </div>
    </div>
  );
}
