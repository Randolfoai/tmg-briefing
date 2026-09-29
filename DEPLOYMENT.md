# TMG Briefing — Instruções de Deploy

## Arquitetura

```
GitHub Pages
      |
      v
Google Apps Script Web App
      |
      v
Google Sheets (privado)
```

O formulário público é hospedado no GitHub Pages. As respostas são enviadas por `fetch` para um Web App do Google Apps Script, que grava em uma Planilha Google privada. **Nenhuma resposta fica armazenada no GitHub.**

## URLs

| Recurso | URL / localização |
|---|---|
| Site público (GitHub Pages) | `https://SEU-USUARIO.github.io/tmg-briefing/` |
| Repositório GitHub | `https://github.com/SEU-USUARIO/tmg-briefing` |
| Apps Script Web App | URL terminada em `/exec` configurada em `index.html` |
| Planilha Google | Nome: **Briefing - Tocantins Mil Graus** — localizada na conta `randolfoai@gmail.com` |

> Substitua `SEU-USUARIO` pelo nome de usuário real do GitHub.

## Planilha

- Nome: **Briefing - Tocantins Mil Graus**
- Acesso: **privado**.
- A aba `Respostas` é criada automaticamente na primeira submissão.
- Colunas principais: `Data/Hora`, `Versão`, `Nome`, `Função`, `Visão do projeto`, `Top 3 prioridades`, `Critério de sucesso`, `Site atual`, `JSON completo`.
- A coluna `JSON completo` contém **todas** as respostas do questionário.

## Como atualizar o formulário

1. Edite `index.html`.
2. Se alterar a estrutura das perguntas, atualize também o `formVersion` no payload (variável `sections` / função `buildPayload`).
3. Teste localmente com `python -m http.server 8000`.
4. Faça commit e push para a branch `main`.
5. O GitHub Pages atualiza automaticamente em poucos segundos.

## Como fazer novo deploy do Apps Script

1. Abra a planilha, vá em **Extensões > Apps Script**.
2. Edite o código se necessário.
3. Clique em **Deploy > New deployment** (ou **Manage deployments > Edit** para manter a mesma URL).
4. Tipo: **Web app**.
5. Execute as: **Me**.
6. Acesso: **Anyone** (qualquer pessoa, para permitir envio sem login).
7. Copie a URL `/exec` e substitua em `index.html` (constante `ENDPOINT_URL`).
8. Faça commit e push da alteração.

## Como verificar respostas

1. Acesse a planilha **Briefing - Tocantins Mil Graus**.
2. Abra a aba `Respostas`.
3. A última linha será a resposta mais recente.
4. Para ver todos os dados, copie o conteúdo da coluna `JSON completo` e cole em um visualizador JSON.

## Como restaurar/testar

- **Teste local:** na pasta do projeto, execute `python -m http.server 8000` e abra `http://localhost:8000`.
- **Limpar rascunho:** no navegador, abra as Ferramentas de Desenvolvedor → Aplicativo → Local Storage e remova a chave `tmg-briefing-v1`.
- **Resposta de teste:** use o nome `TESTE DEVIN - PODE SER EXCLUÍDO` para identificar facilmente entradas de teste.
