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

- Upload de currículos nos formatos `.pdf` ou `.docx`
- Campo para colar a descrição da vaga desejada
- Extração e leitura automática dos textos
- Processamento com modelo de linguagem (LLM)
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
- **OpenAI API** (ou compatível)
- **Multer** (upload de arquivos)
- **pdf-parse**, **docx** (para leitura dos currículos)

---

## 🌐 Link do Projeto

👉 [Acesse a demonstração](https://meter-read-managment-tool-client.onrender.com) *(ajuste esse link se houver um domínio exclusivo para o revisor)*

---

## 📸 Capturas de Tela

*(adicione as imagens no repositório e atualize os caminhos)*

📁 /demo
├── homepage.png  
├── upload.png  
└── result.png  

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