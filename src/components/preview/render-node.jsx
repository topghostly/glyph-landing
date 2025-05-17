"use client";

import { Node } from "@/types";
import Image from "next/image";
import React from "react";

export const renderNode = (node, index) => {
  switch (node.type) {
    case "paragraph":
      if (!node.content) return <br key={index} />;
      return <p key={index}>{renderText(node)}</p>;

    case "heading":
      const HeadingTag = `h${node.attrs?.level}`;
      return <HeadingTag key={index}>{renderText(node)}</HeadingTag>;

    case "bulletList":
      return (
        <ul key={index} className="ml-8 list-decimal">
          {node.content?.map(renderListItem)}
        </ul>
      );

    case "orderedList":
      return (
        <ol key={index} className="ml-8 list-disc">
          {node.content?.map(renderListItem)}
        </ol>
      );

    case "listItem":
      return <li key={index}>{node.content?.map(renderText)}</li>;

    case "image":
      return (
        <div className="w-full aspect-[16/10] relative">
          <Image
            key={index}
            src={node.attrs?.src}
            alt={node.attrs?.alt || "no alt image"}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            className="my-6 rounded-sm"
            fill
          />
        </div>
      );

    case "blockquote":
      return <blockquote key={index}>{renderText(node)}</blockquote>;

    case "codeBlock":
      const code = node.content?.map((n) => n.text).join("\n") ?? "";

      return (
        <pre
          key={index}
          className="bg-gray-100/30 border border-gray-200 text-[#00095c] p-4 rounded-sm overflow-x-auto my-4"
        >
          <code>{code}</code>
        </pre>
      );

    default:
      return null;
  }
};

export const renderText = (node) => {
  if (!node.content) return null;
  return node.content.map((textNode, index) => {
    if (textNode.type === "text") {
      let textElement = textNode.text || "";
      if (textNode.marks) {
        textNode.marks.forEach((mark) => {
          switch (mark.type) {
            case "bold":
              textElement = <strong key={index}>{textElement}</strong>;
              break;
            case "italic":
              textElement = <em key={index}>{textElement}</em>;
              break;
            case "strike":
              textElement = <del key={index}>{textElement}</del>;
              break;
            case "highlight":
              textElement = <mark key={index}>{textElement}</mark>;
              break;
            case "code":
              textElement = (
                <code key={index} className="bg-gray-200 px-1 rounded">
                  {textElement}
                </code>
              );
              break;
            case "link":
              textElement = (
                <a
                  key={index}
                  href={mark.attrs?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {textElement}
                </a>
              );
              break;
          }
        });
      }
      return <React.Fragment key={index}>{textElement}</React.Fragment>;
    }
    if (textNode.type === "hardBreak") {
      return <br key={index} />;
    }
    return null;
  });
};

export const renderListItem = (node, index) => {
  return <li key={index}>{node.content?.map(renderText)}</li>;
};
