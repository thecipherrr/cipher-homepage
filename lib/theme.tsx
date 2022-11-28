import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#e3e4e0', '#344d67')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      points: {
        as: 'h3',
        fontSize: 'lg',
        mt: 4
      }
    }
  },
  Link: {
    basestyle: (props: StyleFunctionProps) => ({
      color: mode('#293242', '#afgf8c')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: 'Reef'
}

const colors = {
  storm: '#292324',
  shrekGreen: '#6eccaf',
  paleBlue: '#a5c9ca',
  offWhite: '#f2e7d5',
  lemonYellow: '#f3ecb0',
  almostWhite: '#f7f7f7'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
