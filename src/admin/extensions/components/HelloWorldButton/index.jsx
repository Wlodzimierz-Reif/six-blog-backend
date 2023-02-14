import React from "react";
import { Button } from "@strapi/design-system/Button";
// import Up from "@strapi/icons/Up";

const HelloWorldButton = () => {
 const postIdArray = window.location.href.split("/")
 console.log(postIdArray)
 console.log(process.env.PREVIEW_SECRET)
  return (
    <a href={`http://localhost:3000/api/preview?secret=${process.env.PREVIEW_SECRET}&slug=post-1`} target="_blank">
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

export default HelloWorldButton;