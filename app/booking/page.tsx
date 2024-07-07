"use client";
import BookForm from "@/components/website/BookForm/BookForm";
import React, { useEffect } from "react";

type Props = {};

export default function page({}: Props) {
  useEffect(() => {
    scrollTo(0, 0);
  },[]);
  return (
    <div>
      <BookForm />
    </div>
  );
}
