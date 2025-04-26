# Request <-> Response

http://localhost:3000/posts -> 80 HTTP ou 443 HTTPS

O http é o esquema (HTTP, HTTPS, FTP, etc), localhost é o host (google.com,
otaviomiranda.com.br, etc), 3000 é a porta TCP usada para a conexão, e /post é o
path, o caminho do recurso.

```
Ler   Criar  Atualizar     Apagar
GET / POST / PATCH / PUT / DELETE / HEAD / OPTIONS / CONNECT / TRACE

/auth/login          POST        autenticar usuário      Aberta

/users/              POST        Criar usuário           Aberta
/users/me            PATCH       Atualizar usuário       JWT
/users/me            DELETE      Apagar usuário          JWT
/users/me            GET         Ver dados do usuário    JWT
/users/me/password   PATCH       Atualizar senha         JWT

/posts/              GET         Ver todos os posts      Aberta
/posts/[slug]        GET         Ver um post             Aberta
/posts/me            POST        Criar post              JWT
/posts/me            GET         Posts de um usuário     JWT
/posts/me/[id]       GET         Post de um usuário      JWT
/posts/me/[id]       PATCH       Atualizar um post       JWT
/posts/me/[id]       DELETE      Apagar um post          JWT

/upload              POST        Enviar imagem           JWT
/uploads/img.jpg     GET/NGINX   Ver imagem              Aberta
```
