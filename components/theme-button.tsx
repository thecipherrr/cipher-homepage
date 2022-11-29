import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="switch theme"
          colorScheme={useColorModeValue('teal', 'orange')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
          borderRadius="xl"
          zIndex={2}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeButton
