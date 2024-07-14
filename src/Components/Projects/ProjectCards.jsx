import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(4, 4, 4, 0.8)",
        color: "#fff",
        margin: "20px",
        width: "350px", // Fixed width
        height: "500px", // Fixed height
        borderRadius: "10px",
        overflow: "hidden",
        border: "2px solid #CD5EF8",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)", // Optional: Adding a box shadow for depth
      }}
      className="project-card-view"
    >
      <img
        src={props.imgPath}
        alt="card-img"
        style={{
          height: "150px", // Adjust height for the image
          width: "100%", // Ensure image takes full width of card
          objectFit: "cover", // Cover ensures the image fits the container without stretching
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          padding:"20px"
        }}
      />
      <div style={{ padding: "20px", flex: "1 1 auto", display: "flex", flexDirection: "column" }}>
        <h2 style={{ fontSize: "1.5em", fontWeight: "bold", marginBottom: "10px" }}>{props.title}</h2>
        <p style={{ textAlign: "justify", fontSize: "1em", flex: "1", marginBottom: "20px" }}>
          {props.description}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#CD5EF8",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <BsGithub style={{ marginRight: "5px" }} />
            {props.isBlog ? "Blog" : "GitHub"}
          </a>

          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#CD5EF8",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <CgWebsite style={{ marginRight: "5px" }} />
              {"Demo"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
