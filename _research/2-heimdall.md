---
title: "Enforcing Control Flow Integrity on Smart Contracts"
permalink: /research/heimdall/
excerpt: "Detecting self-reverting storage slots in Ethereum smart contracts"
collection: research
daterange: Aug 2024 - Sep 2024
location: University of Toronto (Remote)
role: Research Intern
---

This project was initiated by [Zhiyang Chen](https://jeffchen006.github.io/), a Ph.D. student at the University of Toronto, under the supervision of [Prof. Fan Long](https://www.cs.toronto.edu/~fanl/). I contributed to this project as a research intern.

## Purpose

The purpose of this project was to enforce control flow integrity on Ethereum smart contracts by analyzing the control flow of the contract using the bytecode. The project is implemented as a plugin for the [Heimdall](https://github.com/Jon-Becker/heimdall-rs) toolkit, which contains a symbolic execution engine for Ethereum smart contracts.

My role in this project was to implement an algorithm that detects self-reverting storage slots in Ethereum smart contracts. A self-reverting storage slot is a storage slot that is modified in a transaction and then reverted back to its original value in the same transaction. [Reentrancy guards](https://docs.openzeppelin.com/contracts/4.x/api/security#ReentrancyGuard) and cache storage slots are examples of self-reverting storage slots.

## Implementation

The implementation was carried out in Rust and the repository for the implementation can be found [here](https://github.com/jeffchen006/heimdall-rs). My contributions to the project are available in the `feat/reentrancy-detection` branch of the repository.

## Challenges

I encountered several challenges during the algorithm's implementation. First, the algorithm needed to be flexible enough to detect various types of self-reverting storage slots with different access patterns. Second, since the contract's execution is symbolic, the initial values of the storage slots are unknown, and all unknown values are interpreted as zero. This made it difficult to distinguish between the original value of a storage slot and an actual zero value.

To address this challenge, we provided the initial values of the storage slots as input to the symbolic execution engine. This allowed us to differentiate between the original value of a storage slot and a real zero value.

## Outcome

The algorithm successfully detected self-reverting storage slots in Ethereum smart contracts. My role in this project focused on a specific aspect of the larger goal of enforcing control flow integrity in smart contracts, which involved several other components and challenges.

The project has now been completed, and the paper, titled "Enforcing Control Flow Integrity on DeFi Smart Contracts," has been submitted for publication at FSE 2025.
