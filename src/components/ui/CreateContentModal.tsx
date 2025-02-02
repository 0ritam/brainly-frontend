import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../../config";
import axios from "axios";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModal({ open, onClose }) {
  const titleref = useRef<HTMLInputElement>();
  const linkref = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleref.current?.value;
    const link = linkref.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/content`, {
      link,
      title,
      type

    }, {
      headers:{
        "Authorization":localStorage.getItem("token")
      }
    })

    onClose();
  }

  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-200 bg-opacity-80 fixed top-0 left-0 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <div className="flex justify-end">
              <div onClick={onClose} className="cursor-pointer">
                <CrossIcon size="md" />
              </div>
            </div>

            <div className="mb-4 ">
              <Input reference={titleref} placeholder={"Title"} />
              <Input reference={linkref} placeholder={"Link"} />
            </div>

            <div className="mb-4">
              <h1 className="text-lg font-semibold">Type</h1>
              <div className="flex gap-4 mt-2 justify-center">
                <Button
                  text="Youtube"
                  size="md"
                  variant={type === ContentType.Youtube ? "primary" : "secondary"}
                  onClick={() => setType(ContentType.Youtube)}
                />
                <Button
                  text="Twitter"
                  size="md"
                  variant={type === ContentType.Twitter ? "primary" : "secondary"}
                  onClick={() => setType(ContentType.Twitter)}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Button onClick={addContent} size="sm" variant="primary" text="Submit" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
