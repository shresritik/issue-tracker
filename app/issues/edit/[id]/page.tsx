import React from "react";
import dynamic from "next/dynamic";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueFormSkeleton from "./loading";
const IssueForm = dynamic(() => import("../../_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});
const EditFormPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditFormPage;
