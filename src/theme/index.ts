import { extendTheme } from '@chakra-ui/react';

import { THEME_COLORS } from '@primelight-school/theme/colors';
import { DatePickerTheme } from '@primelight-school/theme/DatePicker.theme';

const theme = extendTheme({
  colors: THEME_COLORS,
  components: {
    DatePicker: DatePickerTheme,
    // keep the components alphabetically
  },
});

export default theme;
