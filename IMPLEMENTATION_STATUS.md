# Tocantins Mil Graus — Briefing Web

## Concluído
- Cópia dos arquivos originais preservada no workspace.
- Code.gs criado/atualizado com receptor CORS, planilha privada e colunas resumidas + JSON completo.
- index.html revisado com envio via `fetch`, prevenção de duplo envio, feedback visual e aviso de privacidade.
- Teste local realizado: 10 etapas, localStorage, validação, download JSON e envio para Google Sheets.
- Planilha Google privada criada e recebendo respostas.

## URLs
- Site: `https://SEU-USUARIO.github.io/tmg-briefing/`
- GitHub: `https://github.com/SEU-USUARIO/tmg-briefing`
- Endpoint: `https://script.google.com/macros/s/AKfycbwhiebFWbuKJ0ryWqxfFcg3umv4cJkBU94RaWDTVjSbijLlbgS1GK-Z3BLYM-1Ru4ih0Q/exec`

> Substitua `SEU-USUARIO` pelo nome de usuário real após a criação do repositório.

## Testes realizados
- Desktop: navegação pelas 10 etapas, salvamento, validação e download OK.
- Mobile: testado em viewport estreito; layout responsivo OK.
- Envio: resposta de teste chegou à planilha.
- Sheets: aba `Respostas` criada com colunas resumidas e JSON completo.
- JSON: download do payload completo funcionou.
- localStorage: respostas preservadas após refresh.

## Ajustes realizados
- Envio por `fetch` substituindo o iframe/form para feedback confiável.
- Botão "Enviar" desabilitado e com spinner durante o envio.
- Em caso de erro, o localStorage é preservado e é oferecida nova tentativa + download JSON.
- Aviso de privacidade inserido de forma discreta na interface.
- CSS de foco aprimorado para acessibilidade.

## Problemas encontrados
- Tentativa inicial com `ContentService.setHeaders` falhou; corrigido removendo headers manuais e usando `text/plain` no frontend.
- Redirecionamento padrão do Apps Script exigiu teste no navegador real; o `fetch` do navegador seguiu o redirect corretamente.

## Pendências
- Criar repositório `tmg-briefing` no GitHub.
- Publicar via GitHub Pages.
- Teste final em produção com envio real pelo link público.

## Próximos passos sugeridos
- Enviar o link público ao cliente.
- Monitorar a planilha para novas respostas.
- Após coleta, analisar o JSON completo para alimentar a próxima fase de Discovery.
