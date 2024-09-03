import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const InputTheme: ComponentStyleConfig = {
  baseStyle: {
    field: {
      fontFamily: 'Montserrat',
      bg: 'light',
      borderWidth: '2px !important',
      color: 'white_d2',

      '::placeholder': {
        color: 'white_d2',
      },
      '::-ms-input-placeholder': {
        color: 'white_d2',
      },

      _disabled: {
        bg: 'secondary.100',
        color: '#09305A',
        opacity: 1,
        cursor: 'not-allowed',

        _hover: {
          borderColor: 'transparent',
        },
      },

      _invalid: {
        borderColor: '#E05000',
      },

      _hover: {
        borderColor: 'brand.blue',
      },

      _active: {
        borderColor: 'primary.300',
      },
      _focus: {
        borderColor: 'brand.blue',
      },
      _focusWithin: {
        borderColor: 'brand.blue',
      },
    },
  },
};
