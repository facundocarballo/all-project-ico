import React from "react";
import Head from "next/head";
import {
  VStack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Button,
} from "@chakra-ui/react";
import { NavBar } from "@/src/components/navbar";
import { theNavBarProps } from "@/src/handlers/navbar";
import { useHomeProvider } from "@/src/context/home";
import { trySiginWithCredential } from "@/src/handlers/google";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "@firebase/auth";
import User from "@/src/types/user";
import { app, firebaseConfig } from "@/src/firebase/config";
import { initializeApp } from "firebase/app";

let read: boolean = true;

export default function Home() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { user, setUser } = useHomeProvider();
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  React.useEffect(() => {
    handleUseEffect();
  }, []);

  const handleUseEffect = async () => {
    if (!read) return;
    read = false;

    const _user = await trySiginWithCredential();
    if (_user == undefined) {
      setIsOpen(true);
      return;
    }

    setUser(_user);
  };

  const handleSiginGoogle = async () => {
    initializeApp(firebaseConfig)
    const auth = getAuth();
    try {
      const res = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = await User.CreateUserWithCredential(res.user);
      const credential = GoogleAuthProvider.credentialFromResult(res);
      if (credential === null) {
        console.log("Credential null.");
        return;
      }
      const token = credential.accessToken;
      if (token === undefined) {
        console.log("Token undefined.");
        return;
      }
      user.SaveToken(token);
      setUser(user);
      setIsOpen(false);
    } catch (err) {
      console.error("Error sigin with google. ", err);
    }
  };

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
              <Button onClick={handleSiginGoogle}>Sigin with Google</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Head>
        <title>All Project - ICO</title>
        <meta name="description" content="All Project ICO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack w="full">
        <Box h="10px" />
        <NavBar props={theNavBarProps} />
      </VStack>
    </>
  );
}
