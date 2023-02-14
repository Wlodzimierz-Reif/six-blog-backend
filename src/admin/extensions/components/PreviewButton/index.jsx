import React from "react";
import { Button } from "@strapi/design-system/Button";
// import Up from "@strapi/icons/Up";

const PreviewButton = () => {
 const postIdArray = window.location.href.split("/")
 console.log(postIdArray)
 const postId = postIdArray[postIdArray.length - 1]
 console.log(process.env.PREVIEW_SECRET)
  return (
    <a href={`http://localhost:3000/api/preview?secret=${process.env.PREVIEW_SECRET}&slug=post-2`} target="_blank">
      <Button
        variant="secondary"
        //   startIcon={<Up />}
        // onClick={() => alert(window.location.href)}
      >
        Hello World
      </Button>
    </a>
  );
};

export default PreviewButton;