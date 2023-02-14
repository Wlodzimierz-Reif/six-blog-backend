import React from "react";
import { Button } from "@strapi/design-system/Button";

// import Up from "@strapi/icons/Up";

const PreviewButton = () => {
  const postIdArray = window.location.href.split("/");
  console.log(postIdArray);
  const postId = postIdArray[postIdArray.length - 1];
  console.log(process.env.PREVIEW_SECRET);
  return (
    <a
      href={`http://localhost:3000/api/preview?secret=${process.env.PREVIEW_SECRET}&slug=post-2`}
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <Button
        fullWidth
        variant="default"
        //   startIcon={<Up />}
        // onClick={() => alert(window.location.href)}
      >
        Preview post
      </Button>
      {/* <div>test</div> */}
    </a>
  );
};

export default PreviewButton;
