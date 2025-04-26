# Request <-> Response

http://localhost:3000/posts -> 80 HTTP ou 443 HTTPS

O http é o esquema (HTTP, HTTPS, FTP, etc), localhost é o host (google.com,
otaviomiranda.com.br, etc), 3000 é a porta TCP usada para a conexão, e /post é o
path, o caminho do recurso.

```
Ler   Criar  Atualizar     Apagar
GET / POST / PATCH / PUT / DELETE / HEAD / OPTIONS / CONNECT / TRACE

/auth/login          POST        autenticar usuário      Aberta

/user/              POST        Criar usuário           Aberta
/user/me            PATCH       Atualizar usuário       JWT
/user/me            DELETE      Apagar usuário          JWT
/user/me            GET         Ver dados do usuário    JWT
/user/me/password   PATCH       Atualizar senha         JWT

/post/              GET         Ver todos os posts      Aberta
/post/[slug]        GET         Ver um post             Aberta
/post/me            POST        Criar post              JWT
/post/me            GET         Posts de um usuário     JWT
/post/me/[id]       GET         Post de um usuário      JWT
/post/me/[id]       PATCH       Atualizar um post       JWT
/post/me/[id]       DELETE      Apagar um post          JWT

/upload              POST        Enviar imagem           JWT
/uploads/img.jpg     GET/NGINX   Ver imagem              Aberta
```
