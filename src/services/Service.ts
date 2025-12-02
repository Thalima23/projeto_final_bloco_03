import axios from "axios";

//Instância Axios
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

// ========== CRUD SEM TOKEN ========== //

// GET – Buscar dados
export const buscar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url);
    setDados(resposta.data);
}

// POST – Cadastrar
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

// PUT – Atualizar
export const atualizar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados);
    setDados(resposta.data);
}

// DELETE – Deletar
export const deletar = async (url: string) => {
    await api.delete(url);
}