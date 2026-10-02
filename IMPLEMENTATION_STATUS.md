# Tocantins Mil Graus — Briefing Web

## Concluído
- Cópia dos arquivos originais preservada no workspace.
- Code.gs criado/atualizado com receptor CORS, planilha privada e colunas resumidas + JSON completo.
- index.html revisado com envio via `fetch`, prevenção de duplo envio, feedback visual e aviso de privacidade.
- Teste local realizado: 10 etapas, localStorage, validação, download JSON e envio para Google Sheets.
- Planilha Google privada criada e recebendo respostas.

## URLs
- Site: `https://randolfoai.github.io/tmg-briefing/`
- GitHub: `https://github.com/Randolfoai/tmg-briefing`
- Endpoint: `https://script.google.com/macros/s/AKfycbwhiebFWbuKJ0ryWqxfFcg3umv4cJkBU94RaWDTVjSbijLlbgS1GK-Z3BLYM-1Ru4ih0Q/exec`

## Testes realizados
- Desktop: navegação pelas 10 etapas, salvamento, validação e download OK.
- Mobile: envio e layout testados no celular real; respostas chegaram corretamente.
- Produção: formulário enviado via GitHub Pages → Apps Script → Google Sheets com sucesso.
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

## Sessão 29/09/2026 — Follow-up e fechamento de escopo
- `followup.html` criado e publicado em `https://randolfoai.github.io/tmg-briefing/followup.html` — rodada complementar com as 7 respostas vagas + sugestões pré-preenchidas; envia para o mesmo endpoint/planilha marcado com `round:"followup"` no JSON.
- Respostas do follow-up recebidas e confirmadas na planilha (21:45). Detalhes consolidados em `DISCOVERY_ESCOPO.md` (interno, gitignored).
- **Decisão do cliente:** canal de secretaria/aprovação = **Telegram Bot** (R$0). WhatsApp Cloud API adiada para fase posterior; gateways não-oficiais descartados (risco de ban).
- Estimativa Fase 1 entregue: 5–6 semanas (radar → draft IA → arte/legenda → aprovação Telegram → publicação).

## Sessão 01/10/2026 — Blueprint Fase 1
- `BLUEPRINT_FASE1.md` criado (interno, gitignored): arquitetura Next.js + Supabase + n8n/VPS + R2 + Telegram, modelo de dados, engenharia anti-estouro, backlog de 6 semanas.
- Deliberação de custos: fixo mínimo ~R$30/mês (VPS + domínio); Oracle Free Tier mantido como alternativa R$0 com risco gerenciado.

## Pendências
- Decisão: Oracle Free (R$0) vs Hetzner (~R$28/mês).
- Decisão: domínio final do portal.
- Questões em aberto não-bloqueantes: modelo de publicidade, orçamento de infra, meta numérica de seguidores/visitas.

## Próximos passos sugeridos
- Semana 1 do blueprint: repo Next.js, schema Supabase, VPS/Docker, abrir apps Meta/TikTok developers (bloqueio externo).
- Criar bot Telegram (BotFather) quando iniciar a semana 4 ou adiantar para testes.
- Definir chave/plano de LLM para reescrita de matérias (Gemini free tier cobre o início).
