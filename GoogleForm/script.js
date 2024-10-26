class PostGoogleForm {
    constructor(formId, googleCamp1, googleCamp2) {
        this.googleCamp1 = googleCamp1;
        this.googleCamp2 = googleCamp2;
        this.formId = formId;
        this.formUrl = `https://docs.google.com/forms/d/e/${this.formId}/formResponse`;
    }

    async submit(formData, campo1, campo2) {
        const data = {
            [this.googleCamp1]: formData.get(campo1),
            [this.googleCamp2]: formData.get(campo2)
        };

        const params = new URLSearchParams(data);
        try {
            await fetch(this.formUrl, {
                method: 'POST',
                mode: "no-cors",
                body: params,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            alert('Dados enviado com sucesso!')

        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            alert('Ocorreu um erro ao enviar o formulário.');
            return false;
        }
    }
}

// ================================================================
const formId = '1FAIpQLSfj5zO54myBswlPDSCpp2y8xWnHATEdsbek14fbBDgBqsJ0ag' // <---
const googleFormCampo1 = 'entry.786646442'; // <---
const googleFormCampo2 = 'entry.1161361964'; // <---
// ================================================================

const myform = new PostGoogleForm(formId, googleFormCampo1, googleFormCampo2)


document.getElementById('myForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const sucesso = await myform.submit(formData, 'name', 'email'); // <---------

    if (typeof sucesso === "undefined"){
        event.target.reset();
    }
});