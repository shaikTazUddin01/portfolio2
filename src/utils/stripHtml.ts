
import DOMPurify from "dompurify";
import React from "react";

const stripHtml = (html: string, slice?: number) => {
  const cleanText = DOMPurify.sanitize(html, { ALLOWED_TAGS: [] });
  if (slice) {
    return cleanText.slice(0, 100);
  } else {
    return cleanText;
  }
};

export default stripHtml;
