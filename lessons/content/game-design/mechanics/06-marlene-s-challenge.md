---
title: "06 - Marlene's Challenge"
description: ""
---

### 6.1 Overview

O desafio de Marlene é a principal avaliação obrigatória para a progressão pedagógica.

Na primeira versão do jogo, será composto por uma sequência de exercícios simples.

O desafio poderá incluir conhecimentos da lição atual e conteúdos estudados anteriormente.

### 6.2 Passing Score

Cada lição possui uma nota mínima necessária para aprovação.

Essa nota é definida no arquivo `lesson.json`.

**Regras:**

* Pontuação igual ou superior à nota de corte: aprovação.
* Pontuação inferior: reprovação.
* A reprovação exige uma nova tentativa, exceto quando o Skip estiver disponível.

A nota de corte pode variar entre lições.

### 6.3 Adaptive Review

Uma parte das questões pode utilizar conteúdos de lições anteriores.

O percentual de revisão é configurável no `lesson.json`.

Caso não exista uma configuração específica, o jogo utiliza um valor padrão.

**Prioridade de seleção:**

1. Conhecimentos nos quais o jogador apresentou erros anteriormente.
2. Caso não existam erros registrados, seleção aleatória entre os conteúdos já estudados.

O objetivo é reforçar conhecimentos que apresentam maior dificuldade.

Os critérios exatos para considerar um conhecimento completamente recuperado serão definidos posteriormente.

### 6.4 Failure & Repetition

Quando Josef falha no desafio:

1. O ciclo termina com sua morte.
2. Josef renasce.
3. O progresso educacional adquirido permanece preservado.
4. O jogador pode repetir a lição ou utilizar Insomnia.
5. O desafio de Marlene precisa ser realizado novamente.

Após duas falhas no desafio, o jogador recebe a possibilidade de utilizar Skip.

### 6.5 Skip

Skip permite avançar pedagogicamente sem atingir a nota mínima do desafio, após duas tentativas malsucedidas.

O objetivo é evitar que dificuldades em uma única avaliação impeçam indefinidamente a continuidade do aprendizado.

### 6.6 Death Sequence

Ao final do desafio, Marlene pergunta a Josef qual alimento ele deseja.

O jogador seleciona uma das respostas disponíveis.

Essa escolha determina a maneira como Marlene matará Josef naquele ciclo.

A antiga mecânica de alimentação como recompensa ou recurso de sobrevivência foi removida.
