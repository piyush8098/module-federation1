import React from 'react';

export const Context = React.createContext(undefined);

function useModuleContextState() {
    const [moduleInfo, setModuleInfo] = React.useState({title: 'module1'});

    return {
        ...moduleInfo,
        setModuleInfo
    };
}

export function useModuleContext() {
    const context = React.useContext(Context)

    if (context === undefined) {
        throw new Error("ModuleContext is undefined, Make sure you use the ServiceProvider before using the context");
    }

    return context;
}

export function ModuleServiceProvider(props) {
    const value = useModuleContextState();
    return <Context.Provider value={value}>{props.children}</Context.Provider>
}
