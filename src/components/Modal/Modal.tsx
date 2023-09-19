import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Image, { StaticImageData } from "next/image";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: StaticImageData[];
  source: string;
  teamSize: number;
  technical: string[];
  myRole: string;
  linkGithub?: string;
  linkWeb?: string;
}

const Modal: React.FC<ModalProps> = ({
  open,
  handleClose,
  name,
  description,
  tags,
  image,
  teamSize,
  technical,
  myRole,
  source,
  linkGithub,
  linkWeb,
}) => {
  const [selectImage, setSelectImage] = useState(image[0]);
  return (
    <Dialog
      fullScreen={false}
      maxWidth={"lg"}
      open={open}
      onClose={handleClose}
      sx={{ backgroundColor: "#424242bf" }}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle sx={{ fontWeight: "600" }} id="responsive-dialog-title">
        Project
      </DialogTitle>
      <DialogContent>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-6">
          <div className="w-[100%] mx-auto">
            <Image
              className="rounded-md shadow-lg border"
              style={{ transition: "all 0.3s", borderColor: "#c7c7c7" }}
              src={selectImage}
              alt="img"
            />
            <div className="grid grid-cols-4 gap-4 mt-4">
              {image.map((e, index) => (
                <Image
                  onClick={() => setSelectImage(e)}
                  style={{ borderColor: "#c7c7c7" }}
                  key={index}
                  className="rounded-md border shadow-lg cursor-pointer"
                  src={e}
                  alt="img"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-2xl">{name}</h4>
            <p className="py-2 text-gray-500">{description}</p>
            <span>Team size: {teamSize}</span>
            <span className="">My role: {myRole}</span>
            {linkGithub && (
              <span>
                Link github:{" "}
                <a href={linkGithub} target="_blank">
                  {linkGithub}
                </a>
              </span>
            )}
            {linkWeb && (
              <span>
                Link demo:{" "}
                <a href={linkWeb} target="_blank">
                  {linkWeb}
                </a>
              </span>
            )}
            <div>
              Technical:{" "}
              {technical.map((e, index) => (
                <span key={index}>
                  {e}
                  {index < technical.length - 1 ? ", " : "."}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ marginBottom: "6px", marginRight: "6px" }}
          onClick={handleClose}
          autoFocus
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
