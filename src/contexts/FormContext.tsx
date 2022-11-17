// Context = contexto, armazenar os dados
// Reducer = executar ações especificas
// Provider = ambiente que libera acesso aos dados
// Hook = vai simplificar o processo de acessar as informações sai/entra

import { createContext, ReactNode, useContext, useReducer } from 'react';

// type dos dados armazenados do state
type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
}

// dentro do type só poder ter as informações do enum
type Action = { 
    type: FormActions;
    payload: any;
 }

// type para o contexto, sempre vai ter dois itens -> state e dispatach
// vai ser utilizado no createContext
type ContextType = {
    state: State;
    dispatch: (action: Action) => void
}
// children
type FormProviderProps = {
    children: ReactNode
}

const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github:''
}

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
enum FormActions{

    // vai mostrar p/ usuario qual passo está
    setCurrentStep,

    // vai mostrar o nome do usuario
    setName,

    // vai mostrar o nivel iniciante/profissional do usuário
    setLevel,

    // vai mostrar o e-mail do usuário
    setEmail,

    // vai mostrar o GitHub do usuário
    setGithub
}
// LEGENDAS + EXPLICAÇÃO //
// state              = recebe os dados
// action             = dentro do action recebe o  tipo da ação
// switch             = para ver qual ação vai ser realizada
// action.type        = vai enviar qual o tipo da ação
//...state            = clona o state
// action.payload     = action vai ter ação que eu quero executar
//                      e payload qual dado eu quero executar

// return = reducer sempre retorna os meus dados
const formReducer = (state: State, action: Action) => {
    switch(action.type){
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        
        case FormActions.setName:
            return {...state, name: action.payload};

        case FormActions.setLevel:
            return {...state, level: action.payload};

        case FormActions.setEmail:
            return {...state, email: action.payload};

        case FormActions.setGithub:
            return {...state, github: action.payload};
        default:
            return state;        
    }
}

// Provider 
// vai ser o componente principal da aplicação

//
const FormProvider = ({ children }:FormProviderProps) => {
    
    // initialData: recebe dados iniciais de um objeto
    // state: contém os dados
    // dispatch: contém as funções que usa para executar as ações

    const [state, dispatch] = useReducer(formReducer, initialData);

    // value: é um obj que recebe dois itens que é preciso
    const value = {state, dispatch};
    return(
        // componente que está utilizando o provider do contexto
        // e depois coloca dentro do children

        
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

// Context HOOK

// Quando quiser utilizar/acessar os dados do contexto
const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}