import Head from 'next/head'
import { VStack, Box } from '@chakra-ui/react'
import { NavBar } from '@/src/components/navbar'
import { theNavBarProps } from '@/src/handlers/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>All Project - ICO</title>
        <meta name="description" content="All Project ICO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack w='full'>
        <Box h='10px' />
        <NavBar props={theNavBarProps} />
      </VStack>
    </>
  )
}
