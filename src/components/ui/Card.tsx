import React from "react";

export default function Card({
  title,
  description,
  image,
  children,
}: {
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: "280px",
        background: "#FFFFFF",
        border: "1.5px solid #E4E0D6",
        borderRadius: "10px",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            display: "block",
          }}
        />
      )}
      <div
        style={{
          padding: "18px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "17px",
            color: "#1F1B16",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: "14px",
            lineHeight: 1.5,
            color: "#6B655C",
          }}
        >
          {description}
        </p>

        {children && (
          <div
            style={{
              marginTop: "10px",
              borderTop: "1px solid #EDEAE2",
              paddingTop: "12px",
            }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
