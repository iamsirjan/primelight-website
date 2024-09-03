import { extendTheme } from '@chakra-ui/react';

import { THEME_COLORS } from '@primelight-school/theme/colors';
import { DatePickerTheme } from '@primelight-school/theme/DatePicker.theme';
import { InputTheme } from '@primelight-school/theme/Input.theme';
import { TextTheme } from '@primelight-school/theme/text.theme';

const theme = extendTheme({
  breakpoints: {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  },
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
    Text: TextTheme,
    Input: InputTheme,
    Textarea: InputTheme,
    // keep the components alphabetically
  },
});

export default theme;
