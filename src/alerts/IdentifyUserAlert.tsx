import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Box, 
  Button,
} from "@chakra-ui/react";

export const IdentifyUserAlert = () => {
  // Attributes
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);
  // Context
  // Methods
  // Component
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Login / Signin
            </AlertDialogHeader>

            <AlertDialogBody></AlertDialogBody>

            <AlertDialogFooter>
              <Button>Sigin with Google</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
