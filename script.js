// ARRAY DE STRINGS

let combinacoes = [
    "Blusa rosa + saia midi + sapatilha",
    "Vestido floral + jaqueta jeans + tênis branco",
    "Camisa branca + calça preta + salto nude"
];

// LOGIN

function efetuarLogin() {

    const userIn =
        document.getElementById("username").value;

    const passIn =
        document.getElementById("password").value;

    const erroDiv =
        document.getElementById("login-error");

    erroDiv.classList.add("hidden");

    if (
        userIn.trim() === "" ||
        passIn.trim() === ""
    ) {

        erroDiv.textContent =
            "Preencha usuário e senha.";

        erroDiv.classList.remove("hidden");

        return;
    }

    if (
        userIn === "aluno" &&
        passIn === "fiap2025"
    ) {

        document
            .getElementById("login-section")
            .classList.add("hidden");

        document
            .getElementById("crud-section")
            .classList.remove("hidden");

        atualizarInterface();

    } else {

        erroDiv.textContent =
            "Usuário ou senha incorretos.";

        erroDiv.classList.remove("hidden");
    }
}

// ATUALIZAR TELA

function atualizarInterface() {

    const containerLista =
        document.getElementById("lista-combinacoes");

    const contador =
        document.getElementById("contador");

    containerLista.innerHTML = "";

    contador.textContent =
        `${combinacoes.length} combinação(ões) cadastrada(s)`;

    combinacoes.forEach((item, index) => {

        const itemDiv =
            document.createElement("div");

        itemDiv.className =
            "combinacao-item";

        itemDiv.innerHTML = `
            <span>👚 ${item}</span>

            <div class="item-buttons">

                <button
                    class="btn-edit"
                    onclick="alterarCombinacao(${index})">

                    Editar

                </button>

                <button
                    class="btn-delete"
                    onclick="excluirCombinacao(${index})">

                    Excluir

                </button>

            </div>
        `;

        containerLista.appendChild(itemDiv);
    });
}

// PEGAR INPUT

function obterValorInput() {

    const input =
        document.getElementById("input-combinacao");

    const erroCrud =
        document.getElementById("crud-error");

    erroCrud.classList.add("hidden");

    const valor =
        input.value.trim();

    if (valor === "") {

        erroCrud.textContent =
            "Digite uma combinação válida.";

        erroCrud.classList.remove("hidden");

        return null;
    }

    input.value = "";

    return valor;
}

// ADICIONAR NO INÍCIO

function adicionarNoTopo() {

    const novaCombinacao =
        obterValorInput();

    if (novaCombinacao !== null) {

        combinacoes.unshift(
            novaCombinacao
        );

        atualizarInterface();
    }
}

// ADICIONAR NO FINAL

function adicionarNoFinal() {

    const novaCombinacao =
        obterValorInput();

    if (novaCombinacao !== null) {

        combinacoes.push(
            novaCombinacao
        );

        atualizarInterface();
    }
}

// EDITAR

function alterarCombinacao(index) {

    const valorAtual =
        combinacoes[index];

    const novoValor =
        prompt(
            "Editar combinação:",
            valorAtual
        );

    if (
        novoValor === null ||
        novoValor.trim() === ""
    ) {
        return;
    }

    combinacoes[index] =
        novoValor.trim();

    atualizarInterface();
}

// EXCLUIR

function excluirCombinacao(index) {

    combinacoes.splice(index, 1);

    atualizarInterface();
}