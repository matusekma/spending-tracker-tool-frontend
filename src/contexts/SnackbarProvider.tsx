import React, {ReactElement, useState} from "react";
import SnackbarContext, {SnackbarContextProps} from "./SnackbarContext";

const SnackbarProvider = function ({
                                       children,
                                   }: { children: React.ReactNode }): ReactElement<SnackbarContextProps> {
    const [snackbarState, setSnackbarState] = useState({
        isOpen: false,
        message: ""
    })

    return (
        <SnackbarContext.Provider value={{snackbarState, setSnackbarState}}>{children}</SnackbarContext.Provider>
    );
};

export default SnackbarProvider
