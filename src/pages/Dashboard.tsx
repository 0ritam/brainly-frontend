import "../index.css";

import { Button } from "../components/ui/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { useState } from "react";
import { SideBar } from "../components/ui/SideBar";
import { useContent } from "../hooks/useContent";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();

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
            startIcon={<ShareIcon size="lg" />}
            variant="secondary"
            size="sm"
            text="Share Brain"
          />
        </div>
        <div className="flex gap-4">
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
