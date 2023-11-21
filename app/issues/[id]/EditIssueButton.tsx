import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const EditIssueButton = ({ issue }: { issue: number }) => {
  return (
    <Link href={`/issues/edit/${issue}`}>
      <Button>
        <Pencil2Icon />
        Edit Issue
      </Button>
    </Link>
  );
};

export default EditIssueButton;
