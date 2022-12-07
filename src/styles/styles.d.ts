import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      df: string;
      primary: string;
      secondary: string;
      bc_900: string;
      bc_800: string;
      comp: string;
      background: string;
    };

    fontSize: {
      desktop: {
        title: string;
        subTitle: string;
        p: string;
        p_largue: string;
      };
      mobile: {
        title: string;
        subTitle: string;
        p: string;
      };
    };
  }
}
