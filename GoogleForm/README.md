# Formulário com Envio Automático em JavaScript 🚀

Este projeto é uma aplicação simples que captura dados de um formulário HTML e os envia automaticamente para o Google Forms usando JavaScript puro. Utilizamos a API `fetch` e `FormData` para realizar a integração, sem recarregar a página, proporcionando uma experiência mais fluida para o usuário.

## 🎯 Funcionalidades

- **JavaScript Modular**: A lógica de envio está encapsulada em uma classe separada (`FormHandler`), tornando o código organizado e fácil de manter.
- **Integração com Google Forms**: Envio direto de dados para o Google Forms usando a URL do formulário e IDs específicos dos campos.
- **Feedback do Usuário**: Notificações de sucesso ou erro para informar ao usuário se o envio foi realizado com sucesso ou se houve algum problema.
- **Estrutura Separada**: Arquivos de HTML e JavaScript independentes, seguindo boas práticas de organização de código.

## 🚀 Tecnologias Utilizadas

- **HTML5** para estrutura do formulário
- **CSS3** para estilização (opcional, não incluído neste exemplo)
- **JavaScript (ES6)** para captura e envio de dados com `fetch` e `FormData`

## 📁 Estrutura do Projeto

```
project/
├── index.html       # Arquivo HTML com o formulário
└── formHandler.js   # Arquivo JavaScript com a classe de manipulação de formulário
```

## 🔧 Configuração

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. Abra o arquivo `index.html` em seu navegador.

3. Substitua os valores das variaveis
   - `formId`: ID do seu formulário do Google Forms.
   - `googleFormCampo1` e `googleFormCampo2`: entry do seu Google Forms.

4. Teste o envio do formulário para garantir que os dados estão sendo capturados e enviados corretamente.

## 💻 Uso

Ao preencher o formulário e clicar em "Enviar", o JavaScript:
1. Captura os dados usando a interface `FormData`.
2. Formata os dados como `URLSearchParams` para facilitar o envio.
3. Envia os dados para o Google Forms via `fetch` com o método `POST`.

O formulário exibirá uma mensagem de sucesso ou erro, dependendo do resultado da requisição.

## ⚙️ Classe `PostGoogleForm`

A classe `PostGoogleForm` encapsula a lógica de envio de dados:


## 📝 Notas

- Certifique-se de configurar corretamente os IDs do Google Forms para garantir o envio dos dados.
- `myform.submit(formData, 'name', 'email');` Certifique-se de configurar corretamente os nomes dos campos 
- O projeto não inclui estilização CSS; sinta-se à vontade para personalizar o estilo do formulário como preferir.

---

**Autor**: Edgar Junior

**Licença**: Este projeto está sob a licença MIT.

