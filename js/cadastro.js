const masks={cpf:v=>v.replace(/\D/g,'').slice(0,11).replace(/^(\d{3})(\d)/,'$1.$2').replace(/^(\d{3})\.(\d{3})(\d)/,'$1.$2.$3').replace(/\.(\d{3})(\d)/,'.$1-$2'),telefone:v=>v.replace(/\D/g,'').slice(0,11).replace(/^(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d)/,'$1-$2'),cep:v=>v.replace(/\D/g,'').slice(0,8).replace(/^(\d{5})(\d)/,'$1-$2')};for(const [id,mask] of Object.entries(masks)){const field=document.getElementById(id);field.addEventListener('input',()=>{field.value=mask(field.value)})}
const form = document.getElementById('cadastro');
const fields = [...form.querySelectorAll('input, select, textarea')];
const errorAlert = document.getElementById('erros-cadastro');
const result = document.getElementById('resultado');
// Native validation remains available when JavaScript is disabled.
form.noValidate = true;
function validate(field) {
 field.classList.add('is-touched');
 let error = document.getElementById(field.id + '-erro');
 if (!error) { error = document.createElement('small'); error.id = field.id + '-erro'; error.className = 'field-error'; field.after(error); field.setAttribute('aria-describedby', [field.getAttribute('aria-describedby'), error.id].filter(Boolean).join(' ')); }
 const valid = field.validity.valid;
 field.setAttribute('aria-invalid', String(!valid));
 error.textContent = valid ? '' : (field.validity.valueMissing ? 'Preencha este campo.' : field.validity.typeMismatch ? 'Informe um e-mail válido.' : field.validity.patternMismatch ? (field.title || 'Confira o formato informado.') : field.validity.tooShort ? 'Informe pelo menos ' + field.minLength + ' caracteres.' : 'Confira o valor informado.');
 return valid;
}
for (const field of fields) {
 field.addEventListener('blur', () => validate(field));
 field.addEventListener('input', () => { result.hidden = true; errorAlert.hidden = true; if (field.classList.contains('is-touched')) validate(field); });
 field.addEventListener('change', () => { result.hidden = true; errorAlert.hidden = true; if (field.classList.contains('is-touched')) validate(field); });
}
form.addEventListener('submit', event => {
 event.preventDefault(); result.hidden = true;
 const invalid = fields.filter(field => !validate(field));
 errorAlert.hidden = invalid.length === 0;
 if (invalid.length) { errorAlert.querySelector('p').textContent = 'Não foi possível concluir. Corrija os ' + invalid.length + ' campos indicados abaixo.'; invalid[0].focus(); return; }
 result.querySelector('p').textContent = 'Formulário válido! Demonstração concluída; nenhum dado foi enviado ou armazenado.';
 result.hidden = false;
});
