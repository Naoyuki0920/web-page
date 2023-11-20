'use client'

import { Stack, Box } from '@chakra-ui/react'
import { IconContext } from 'react-icons'
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";


export default function SNS() {
  return (
    <>
      <Box margin="2px">
        <Stack direction={['column', 'row']}>
          <IconContext.Provider value={{ size: '16px' }}>
            <Box margin="4px">
              <FaGithub />
            </Box>
          </IconContext.Provider>
          <a href="https://github.com/Naoyuki0920" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Stack>
      </Box>

      <Box margin="2px">
        <Stack direction={['column', 'row']}>
          <IconContext.Provider value={{ size: '16px' }}>
            <Box margin="4px">
              <FaTwitter />
            </Box>
          </IconContext.Provider>
          <a href="https://twitter.com/hello_naoyuki09" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </Stack>
      </Box>

      <Box margin="2px">
        <Stack direction={['column', 'row']}>
          <IconContext.Provider value={{ size: '16px' }}>
            <Box margin="4px">
              <FaInstagram />
            </Box>
          </IconContext.Provider>
          <a href="https://www.instagram.com/naoyuki110920/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </Stack>
      </Box>
    </>
  )

}