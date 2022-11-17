import { ReactNode } from 'react';
import * as C from './style';
import { Header } from '../Header';

type Props = {
    children: ReactNode
}

export const Theme = ({children}: Props) => {
    return (
        //Area pra deixar o site centralizado

        // Header: dentro dessa area existe o cabeçalho Header

        // Steps: os passos

        // Sidebar: lateral da pagina

        // Page: aonde vai ficar as paginas
        <C.Container>
            
            <C.Area>                
                <Header />                
                <C.Steps>                    
                    <C.Sidebar>
                        ...
                    </C.Sidebar>
                    
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}