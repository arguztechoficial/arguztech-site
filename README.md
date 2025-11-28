# Arguz Tech — Site Institucional (limpo)

Projeto Next.js 15 com App Router, pronto para deploy na Vercel e envio de mensagens via Zoho Mail.

## Como usar

1. Instale as dependências:

```bash
npm install
```

2. Crie o arquivo `.env.local` na raiz com:

```bash
# SMTP Zoho
SMTP_HOST=smtp.zoho.com
SMTP_PORT=465
SMTP_USER=contato@arguztech.com.br
SMTP_PASS=COLOQUE_SUA_SENHA_DE_APP_AQUI

MAIL_FROM="Arguz Tech <contato@arguztech.com.br>"
MAIL_TO=contato@arguztech.com.br
```

3. Rode em desenvolvimento:

```bash
npm run dev
```

4. Teste o formulário em `http://localhost:3000/contato`.

5. No painel da Vercel, crie as mesmas variáveis de ambiente
   (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO)
   e faça o deploy conectado ao GitHub normalmente.

Nenhum uso de `next/document` ou `<Html>` fora do necessário, então esse projeto
não deve disparar o erro `no-document-import-in-page`.
