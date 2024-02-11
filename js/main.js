const perguntas = [
    {
    pergunta: "Qual é a função usada para exibir uma mensagem de alerta?",
    respostas: [
      "console.log()",
      "prompt()",
      "alert()",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
    respostas: [
      "variable x;",
      "var x;",
      "let x;",
    ],
    correta: 1
  },
  {
    pergunta: "Como você define uma função em JavaScript?",
    respostas: [
      "function = minhaFuncao() {}",
      "def minhaFuncao() {}",
      "function minhaFuncao() {}",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o operador de atribuição em JavaScript?",
    respostas: [
      "+=",
      "=",
      "==",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a maneira correta de escrever um comentário de linha única em JavaScript?",
    respostas: [
      "// Este é um comentário de linha única",
      "/* Este é um comentário de linha única */",
      "<!-- Este é um comentário de linha única -->",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "remove()",
      "pop()",
      "delete()",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a maneira correta de selecionar um elemento pelo ID em JavaScript?",
    respostas: [
      "selectElementById()",
      "$()",
      "getElementById()",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função usada para converter uma string em um número em JavaScript?",
    respostas: [
      "parseInt()",
      "stringToNumber()",
      "convertToNumber()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
    respostas: [
      "32",
      "5",
      "7",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a estrutura de controle de fluxo usada para executar código repetidamente em JavaScript?",
    respostas: [
      "if...else",
      "for",
      "switch",
    ],
    correta: 1
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta

    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)

    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }


    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()


  quiz.appendChild(quizItem)
}