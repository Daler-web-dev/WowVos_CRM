import React from 'react';

interface LayoutProps {
    children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <header></header>   
            <aside></aside>
            <main>{children}</main>
            <footer></footer>
        </>
    );
};

export default Layout;