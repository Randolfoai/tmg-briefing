# Briefing Web — Tocantins Mil Graus

Questionário responsivo para coleta do briefing do Tocantins Mil Graus.

## Arquivos

- `index.html` — questionário responsivo, salvamento automático no navegador e envio final via `fetch`.
- `Code.gs` — receptor do Google Apps Script que grava as respostas em uma Planilha Google.
- `DEPLOYMENT.md` — instruções completas de arquitetura, deploy e manutenção.

## Arquitetura

```
Visitante
  → GitHub Pages (index.html)
  → fetch POST
  → Google Apps Script Web App
  → Google Sheets privado
```

O GitHub Pages hospeda **apenas** o site. As respostas NÃO ficam no repositório público.

## Configuração rápida

1. Crie uma Planilha Google e um projeto vinculado no Apps Script.
2. Copie o conteúdo de `Code.gs` para o Apps Script e substitua `SPREADSHEET_ID`.
3. Faça deploy como **Web app** com acesso **Anyone**.
4. Copie a URL `/exec` para a constante `ENDPOINT_URL` em `index.html`.
5. Publique no GitHub Pages a partir da raiz (`/root`) da branch `main`.

Instruções detalhadas estão em `DEPLOYMENT.md`.

## Segurança e privacidade

- Não coloque respostas no repositório GitHub.
- A planilha permanece privada.
- O formulário informa que as respostas são usadas exclusivamente para planejamento do produto.
- Esta solução é adequada para a fase de descoberta/briefing. Para o produto final, usar autenticação, banco próprio e controles de acesso robustos.

## Recursos

- Layout responsivo (desktop, tablet, celular).
- 10 etapas com barra de progresso.
- Salvamento automático (`localStorage`) com possibilidade de continuar depois.
- Validação de perguntas obrigatórias.
- Campos de texto, múltipla escolha e respostas abertas.
- Botões Voltar, Continuar e Enviar.
- Download do JSON completo como cópia de segurança.
- Prevenção de envio duplicado com feedback visual.
