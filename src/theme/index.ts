import { extendTheme } from '@chakra-ui/react';
import { THEME_COLORS } from '@shangrila-cargo/theme/colors';
import { DatePickerTheme } from '@shangrila-cargo/theme/DatePicker.theme';

const theme = extendTheme({
  colors: THEME_COLORS,
  components: {
    DatePicker: DatePickerTheme,
  },
});

export default theme;
