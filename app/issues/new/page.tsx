import dynamic from "next/dynamic";
import React from "react";
import IssueFormSkeleton from "./loading";
const IssueForm = dynamic(() => import("../_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});
const NewIssueForm = () => {
  return <IssueForm />;
};

export default NewIssueForm;
