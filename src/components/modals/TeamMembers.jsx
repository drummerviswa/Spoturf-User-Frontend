import React, { useState } from "react";
import {
  Radio,
  Card,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

export default function TeamMembers({
  isModalOpen,
  setIsModalOpen,
  onSelectMember,
  selectedMember,
  setSelectedMember
}) {
  const teamMembers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const closeModal = () => {
    setIsModalOpen(false);
    if (onSelectMember) onSelectMember(selectedMember);
  };

  const handleSelectMember = (member) => setSelectedMember(member);

  return (
    <>
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-members-title"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="relative w-full max-w-5xl max-h-full bg-white rounded-lg shadow dark:bg-gray-700 p-6">
            <Typography
              id="team-members-title"
              variant="h4"
              className="mb-4 text-center"
            >
              Team Members
            </Typography>
            <Card className="w-full max-w-full">
              <div className="flex overflow-x-auto no-scrollbar p-2 space-x-4">
                {teamMembers.map((item) => (
                  <ListItem
                    key={item}
                    className="flex-none w-16 justify-center items-center"
                  >
                    <label
                      htmlFor={`horizontal-list-${item}`}
                      className="flex flex-col items-center cursor-pointer"
                    >
                      <ListItemPrefix className="flex justify-center items-center flex-col">
                        <Radio
                          name="horizontal-list"
                          id={`horizontal-list-${item}`}
                          checked={selectedMember === item}
                          onChange={() => handleSelectMember(item)}
                          ripple={false}
                          className="hover:before:opacity-0 focus:ring-primary"
                          containerProps={{
                            className: "p-0",
                          }}
                        />
                        <Typography
                          color="blue-gray"
                          className="font-medium text-md text-blue-gray-400 mt-2"
                        >
                          {item}
                        </Typography>
                      </ListItemPrefix>
                    </label>
                  </ListItem>
                ))}
              </div>
            </Card>
            <div className="flex items-center justify-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={closeModal}
                type="button"
                className="text-white bg-primary/80 hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Choose
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
