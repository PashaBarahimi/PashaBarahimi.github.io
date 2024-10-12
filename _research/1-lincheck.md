---
title: "TruSt Implementation in Lincheck"
permalink: /research/lincheck/
excerpt: "Implementation of a stateless DPOR algorithm for a model-checking framework"
collection: research
daterange: Jul 2023 - Sep 2023
location: Max Planck Institute for Software Systems
role: Research Intern
---

This project was initiated as a research internship at the Max Planck Institute for Software Systems (MPI-SWS) in the summer of 2023, in collaboration with [Ava Mirmohammadmahdi](https://avamirm.github.io) and under the supervision of [Prof. Rupak Majumdar](https://people.mpi-sws.org/~rupak/).

## Purpose

This project involved the partial implementation of the TruSt algorithm within the Lincheck framework, a model-checking tool for concurrent data structures in JVM-based languages, developed by JetBrains. [TruSt](https://plv.mpi-sws.org/genmc/popl2022-trust.pdf) is a stateless dynamic partial order reduction (DPOR) algorithm designed to minimize the number of explored interleavings in concurrent programs using execution graphs.

## Implementation

The implementation was carried out in Kotlin and the repository for the implementation can be found [here](https://github.com/rupakm/lincheck).

## Challenges

We encountered several challenges, primarily due to the high-level characteristics of Java. The algorithm required identifying each shared object uniquely, which was challenging because of the garbage collection and the lack of a unique identifier for each object in Java. The details of these challenges and some possible solutions are further elaborated in the accompanying [report](https://github.com/rupakm/lincheck/blob/master/src/jvm/main/org/jetbrains/kotlinx/lincheck/strategy/managed/trust/README.md).

## Outcome

Unfortunately, the implementation was not completed due to time constraints. However, the work done so far has been documented in the repository and the accompanying report. The implementation can be further extended and integrated into the Lincheck framework to enhance its capabilities.
