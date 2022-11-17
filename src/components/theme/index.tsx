import { ReactNode } from 'react';
import * as C from './style';


type Props = {
    children: ReactNode
}

export const Theme = ({children}: Props) => {
    return (
        <C.Container>
            // area pra deixar o site centralizado
            <C.Area>
                // dentro dessa area existe o cabeçalho -> Header
                <Header />
                // os passos
                <C.Steps>
                    //lateral da pagina
                    <C.Sidebar>

                    </C.Sidebar>
                    // aonde vai ficar as paginas
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}