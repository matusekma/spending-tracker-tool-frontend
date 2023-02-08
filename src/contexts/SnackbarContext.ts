import React from "react";

export type SnackbarContextProps = {
    snackbarState: {isOpen: boolean, message: string}
    setSnackbarState: React.Dispatch<React.SetStateAction<{isOpen: boolean, message: string}>>
}

const SnackbarContext = React.createContext<SnackbarContextProps>({
        snackbarState: {
            isOpen: false,
            message: ""
        },
        setSnackbarState: () => {}
    }
);

export default SnackbarContext
