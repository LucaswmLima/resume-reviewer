# 📄 Revisor de Currículo – Resume Analyzer

Aplicação web que analisa currículos com base na descrição de uma vaga, destacando palavras-chave relevantes com o apoio de modelos de linguagem. O objetivo é ajudar profissionais a melhorar seus currículos para aumentar as chances de aprovação em sistemas de rastreamento de candidatos (ATS).

---

## 🎯 Objetivo

- Automatizar a análise de currículos com base em descrições de vaga
- Detectar palavras-chave ausentes, presentes e recomendadas
- Auxiliar o usuário a adaptar seu currículo de forma mais estratégica
- Melhorar a compatibilidade entre currículo e vaga usando inteligência artificial

---

## 🚀 Funcionalidades

- Campo para colar a descrição da vaga desejada e o texto do CV
- Processamento e extração para leitura automática dos textos
- Retorno com análise de compatibilidade, palavras-chave faltantes e sugestões
- Interface clara e responsiva

---

## 🧰 Tecnologias Utilizadas

### Front-end
- **React**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **i18next** (tradução multilíngue)

### Back-end
- **Node.js**
- **Express**

---

## 🌐 Link do Projeto

👉 [Acesse a demonstração](https://meter-read-managment-tool-client.onrender.com)

---

## 📸 Capturas de Tela



```md
![Tela inicial](./demo/homepage.png)
![Upload de currículo e vaga](./demo/upload.png)
![Resultado da análise](./demo/result.png)
```

---

## ⚙️ Como Rodar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/resume-analyzer.git
cd resume-analyzer
```

### 2. Instale as dependências

#### Front-end

```bash
cd client
npm install
npm run dev
```

#### Back-end

```bash
cd server
npm install
```

### 3. Configure o ambiente

Crie um arquivo `.env` na raiz do back-end com sua chave da OpenAI:

```env
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PORT=3001
```

### 4. Inicie o back-end

```bash
npm run dev
```

> O front-end será executado em `http://localhost:5173` (ou conforme configuração do Vite)  
> O back-end ficará disponível em `http://localhost:3001`

---

## 👤 Autor

**Lucas William Martins Lima**  
📫 [lucaswilliamml@gmail.com](mailto:lucaswilliamml@gmail.com)  
🔗 [GitHub](https://github.com/LucaswmLima)

---

## 📝 Licença

Este projeto está sob a licença MIT.