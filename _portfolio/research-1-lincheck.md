---
title: "TruSt Implementation in Lincheck"
permalink: /portfolio/lincheck/
excerpt: "Implementation of a stateless DPOR algorithm for a model-checking framework at Max Planck for Software Systems"
collection: portfolio
type: research
---

This is the implementation of the TruSt algorithm in the Lincheck framework. Lincheck is a model-checking framework for concurrent data structures in JVM-based languages, developed by JetBrains. The [TruSt](https://plv.mpi-sws.org/genmc/popl2022-trust.pdf) algorithm is a stateless dynamic partial order reduction (DPOR) algorithm that is used to reduce the number of explored interleavings in a concurrent program.

The project was started as a research internship at the Max Planck Institute for Software Systems (MPI-SWS) in collaboration with [Ava Mirmohammadmahdi](https://github.com/avamirm) in the summer of 2023 and was supervised by [Prof. Rupak Majumdar](https://people.mpi-sws.org/~rupak/). The repository for the project can be found [here](https://github.com/rupakm/lincheck). We faced many challenges during the implementation, which emerged from the high-level characteristics of Java. Some of these challenges can be found in the [report](https://github.com/rupakm/lincheck/blob/master/src/jvm/main/org/jetbrains/kotlinx/lincheck/strategy/managed/trust/README.md).
