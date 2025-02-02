import "../index.css";

import { Button } from "../components/ui/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { useEffect, useState } from "react";
import { SideBar } from "../components/ui/SideBar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents,refresh } = useContent();
  

  useEffect(() => {
    refresh();
  }, [modalOpen])

  return (
    <div>
      <SideBar />

      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            startIcon={<PlusIcon size="lg" />}
            size="sm"
            variant="primary"
            text="Add Content"
          />
          <Button
            onClick={async() => {
              const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                share: true
              }, {
                headers: {
                  "Authorization":localStorage.getItem("token")
                }
              }); // store thsi in config
              const shareurl =  `http://localhost:5173/share/${response.data.hash}`
              alert(shareurl);
            }}
            startIcon={<ShareIcon size="lg" />}
            variant="secondary"
            size="sm"
            text="Share Brain"
          />
        </div>
        <div className="flex-wrap gap-4">
          {/* {JSON.stringify(contents)} */}
          {contents.map(
            
            
            ({type, link, title},) => 
              
            <Card
            title={title}
            type={type}
            link={link}
            
          /> 
          )}
          
        </div>
      </div>
    </div>
  );
}
