"use client";

"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import StarRating from "./StarRating";
import styles from "./review.module.css";

const Page = () => {
  const [editorContent, setEditorContent] = useState("");
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
    // toast.info("Editor content updated!");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value.split(","));
  };

  const handleSubmit = () => {
    // 제출 로직 추가
    toast.success("Review submitted successfully!");
  };

  const handleCancel = () => {
    // 취소 로직 추가
    setEditorContent("");
    setRating(0);
    setTags([]);
    setImage(null);
    toast.info("Review creation cancelled.");
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>여행 후기 작성</h1>
      </div>
      <ToastContainer />

      <div>
        <label>태그: </label>
        <input
          type="text"
          value={tags.join(",")}
          onChange={handleTagChange}
          placeholder="태그를 쉼표로 구분하여 입력하세요"
        />
      </div>
      <div>
        <label>이미지 업로드: </label>
        <input type="file" onChange={handleImageChange} />
      </div>
      <div>
        <label className={styles.label}>후기 내용</label>
        <ReactQuill
          value={editorContent}
          onChange={handleEditorChange}
          className="react-quill"
          style={{ height: "400px" }}
        />
      </div>
      <div className={styles.button_container}>
        {/* <button
          onClick={handleSubmit}
          className={`${styles.button} ${styles.button_submit}`}
        >
          제출
        </button>
        <button
          onClick={handleCancel}
          className={`${styles.button} ${styles.button_cancel}`}
        >
          취소
        </button> */}
      </div>
      <div style={{ marginTop: "50px" }}>
        <label>평점: </label>
        <StarRating rating={rating} onRatingChange={setRating} />
      </div>
    </div>
  );
};

export default Page;
