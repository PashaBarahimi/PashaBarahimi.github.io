---
title: "TruSt Implementation in Lincheck"
permalink: /projects/lincheck/
excerpt: "Implementation of a stateless DPOR algorithm for a model-checking framework"
collection: projects
type: research
daterange: July 2023 - September 2023
location: Max Planck Institute for Software Systems
---

This project involved the partial implementation of the TruSt algorithm within the Lincheck framework, a model-checking tool for concurrent data structures in JVM-based languages, developed by JetBrains. [TruSt](https://plv.mpi-sws.org/genmc/popl2022-trust.pdf) is a stateless dynamic partial order reduction (DPOR) algorithm designed to minimize the number of explored interleavings in concurrent programs.

The project was initiated as a research internship at the Max Planck Institute for Software Systems (MPI-SWS) in the summer of 2023, in collaboration with [Ava Mirmohammadmahdi](https://avamirm.github.io) and under the supervision of [Prof. Rupak Majumdar](https://people.mpi-sws.org/~rupak/). The project’s repository is available [here](https://github.com/rupakm/lincheck). Although the implementation was not completed, we encountered several challenges, primarily due to the high-level characteristics of Java, which are further detailed in the accompanying [report](https://github.com/rupakm/lincheck/blob/master/src/jvm/main/org/jetbrains/kotlinx/lincheck/strategy/managed/trust/README.md).
