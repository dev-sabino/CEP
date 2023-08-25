document.addEventListener("DOMContentLoaded", function() {
    const consultaButton = document.getElementById("consulta-button");
    const resultadoDiv = document.getElementById("resultado");
  
    consultaButton.addEventListener("click", function() {
      const cepInput = document.getElementById("cep").value;
      const viaCepUrl = `https://viacep.com.br/ws/${cepInput}/json/`;
  
      fetch(viaCepUrl)
        .then(response => response.json())
        .then(data => {
          if (data.erro) {
            resultadoDiv.textContent = "CEP não encontrado.";
          } else {
            resultadoDiv.innerHTML = `
              <p><strong>CEP:</strong> ${data.cep}</p>
              <p><strong>Logradouro:</strong> ${data.logradouro}</p>
              <p><strong>Bairro:</strong> ${data.bairro}</p>
              <p><strong>Cidade/UF:</strong> ${data.localidade}/${data.uf}</p>
            `;
          }
        })
        .catch(error => {
          console.error("Erro na consulta:", error);
          resultadoDiv.textContent = "Ocorreu um erro na consulta.";
        });
    });
  });