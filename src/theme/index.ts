import { extendTheme } from '@chakra-ui/react';

import { THEME_COLORS } from '@primelight-school/theme/colors';
import { DatePickerTheme } from '@primelight-school/theme/DatePicker.theme';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Montserrat',
      },
      heading: {
        fontFamily: 'Montserrat',
      },
      table: {
        fontFamily: 'Montserrat',
        '& *': {
          fontFamily: 'Montserrat !important',
        },
      },
    },
  },
  colors: THEME_COLORS,
  fonts: {
    heading: `'Montserrat', sans-serif`,
    mono: `'Montserrat', sans-serif`,
  },
  components: {
    DatePicker: DatePickerTheme,
    // keep the components alphabetically
  },
});

export default theme;
