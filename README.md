# Personal Pet — Landing Page + Link na Bio

Site da Personal Pet (banho e tosa em Cruz Alta/RS), groomer Juliana Fagundes. Site estático: `index.html` + `img/`.

## Onde editar
- **Cores da marca:** variáveis no `:root` dentro do `<style>` do `index.html`.
- **WhatsApp, mensagens, links e seções ligadas/desligadas:** objeto `CONFIG` no `<script>` no fim do `index.html`.
- **Fotos:** substitua os arquivos em `img/` mantendo os nomes (`hero.jpg`, `carinho.jpg`, `tosa.jpg`, `banho.jpg`, `gato.jpg`). As fotos atuais são de banco de imagens (provisórias).

Cada push na branch `main` publica automaticamente na Vercel.

## Link na bio (`/bio`)
Página mobile em `bio/index.html`. Links, WhatsApp e mensagens no objeto `CONFIG` no fim do arquivo.
Link para colocar no Instagram: `https://personal-pet-exemplo.vercel.app/bio`

## Modo demonstração
Barra fixa "Versão de demonstração", `noindex` (meta + header) e `robots.txt` com `Disallow`. Remover só quando a cliente aprovar e o site for publicado oficialmente.
