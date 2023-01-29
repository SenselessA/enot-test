import React, {createContext, useState} from 'react';

type NewsLineContext = [
    isHide: boolean,
    setHide: (stop: boolean) => void
];

export const newsLineContext = createContext<NewsLineContext>([false, () => {}]);

type NewsLineProviderProps = {
    children?: React.ReactNode
};

const NewsLineProvider:React.FC<NewsLineProviderProps> = ({children}) => {
    const [isHide, setHide] = useState(false);

    return (
        <newsLineContext.Provider value={[isHide, setHide]}>
            {children}
        </newsLineContext.Provider>
    );
};

export default NewsLineProvider;