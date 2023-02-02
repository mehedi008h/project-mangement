import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

export const theme = extendTheme(
    { config },
    {
        // styles: {
        //     global: () => ({
        //         body: {
        //             bg: "dark",
        //             color: "white",
        //         },
        //     }),
        // },
        fonts: {
            body: `'Poppins', sans-serif`,
        },
    }
);
