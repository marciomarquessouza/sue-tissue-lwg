---
title: "08 - Trail System"
description: ""
---

### 8.1 Overview

O Trail System é responsável exclusivamente pela progressão narrativa.

Ele organiza acontecimentos, interações, descobertas e condições em uma estrutura configurável.

Sua hierarquia conceitual é composta por:

**Trail → Rounds → Paths → Nodes**

Os Nodes podem utilizar Conditions para controlar sua disponibilidade e comportamento.

O progresso do Trail não está vinculado ao nível de aprendizagem ou à conclusão de módulos pedagógicos.

### 8.2 Trails

Um Trail representa uma etapa de progressão narrativa.

Cada Trail contém Rounds e seus respectivos Paths.

Quando o último Round de um Trail é concluído, o próximo Trail é ativado automaticamente.

As descobertas narrativas acumuladas permanecem registradas.

### 8.3 Rounds

Rounds organizam a progressão interna de um Trail.

Cada Round pode conter múltiplos Paths.

**Regras:**

* Apenas um acontecimento pode produzir `round pass` em determinado Round.
* Quando um Node produz `round pass`, o Round termina imediatamente.
* O jogo avança para o próximo Round.
* Os demais Nodes disponíveis deixam de ser executados naquele Round.
* Todos os Paths são reiniciados quando ocorre a mudança de Round.

As descobertas narrativas persistentes não são apagadas durante essa transição.

### 8.4 Paths

Paths organizam Nodes e acontecimentos dentro de um Round.

Um Round pode apresentar diferentes Paths, oferecendo possibilidades narrativas condicionadas às descobertas do jogador.

A configuração dos Paths determina quais interações podem acontecer e quais condições precisam ser satisfeitas.

### 8.5 Path Nodes

Os Nodes representam unidades executáveis de uma interação narrativa.

Cada Node possui:

* **Type:** Identifica seu tipo.
* **Configuration:** JSON com os parâmetros necessários.
* **Behavior:** Funcionalidades definidas pelo tipo e configuração.

Exemplos de tipos incluem:

* Dialogue
* Russian Roulette
* Reward

Cada Node possui apenas um Type, mas esse tipo pode executar múltiplas funcionalidades previstas em sua configuração.

**Regras de execução:**

* Nodes podem ser executados várias vezes dentro do mesmo Round.
* Permanecem disponíveis enquanto suas Conditions permitirem.
* Nodes que produzem `round pass` encerram imediatamente o Round.

### 8.6 Conditions

Conditions controlam a disponibilidade e o comportamento de Nodes.

Existem duas categorias principais.

**Round Conditions**

Verificam estados e acontecimentos do Round atual.

São reiniciadas quando o Round termina.

**Trail Conditions**

Verificam descobertas e estados acumulados ao longo do Trail.

Persistem entre Rounds.

Ambas representam condições booleanas.

### 8.7 Conditional Behavior

Conditions podem atuar em dois níveis.

**Node Availability**

Determinam se um Node pode ser executado.

**Internal Actions**

Modificam elementos específicos dentro de um Node.

Por exemplo, um diálogo pode apresentar quatro alternativas, mas uma delas permanecer oculta enquanto determinada Condition não for satisfeita.

A atualização dinâmica de Conditions durante a execução de Nodes será detalhada posteriormente.

### 8.8 Narrative Persistence

O sistema diferencia o estado temporário de execução dos Paths das descobertas narrativas permanentes.

Quando um Round é reiniciado ou encerrado, os registros de descobertas de Josef não são perdidos.

Esse comportamento permite que informações adquiridas em ciclos anteriores influenciem novas interações.
