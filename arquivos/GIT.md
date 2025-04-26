```sh
# Se quiser fazer só uma vez, use --global em todos os git config, ex:
# git config --global user.name "Seu nome"
#
git config user.name "Seu nome"
git config user.email "seu@email.com"
git config core.autocrlf input
git config core.eol lf
git branch -m main
git remote add origin ENDERECO-DO-SEU-REPO
git add .
git commit -m "initial"
git push origin main -u

# Depois é o de sempre
git add .
git commit -m "sua mensagem"
git push
```
