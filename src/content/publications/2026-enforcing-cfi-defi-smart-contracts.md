---
title: Enforcing Control Flow Integrity on DeFi Smart Contracts
authors:
  - Z. Chen
  - S. M. Beillahi
  - P. Barahimi
  - C. Minwalla
  - H. Du
  - A. Veneris
  - F. Long
ownerName: P. Barahimi
venue: 'IEEE/ACM International Conference on Software Engineering (ICSE) 2026, pp. 1993–2005'
year: 2026
abstract: >-
  Smart contracts power decentralized financial (DeFi) services but are vulnerable to security exploits that can lead to significant financial losses. Existing security measures often fail to adequately protect these contracts due to the composability of DeFi protocols and the increasing sophistication of attacks. Through a large-scale empirical study of historical transactions from the 37 hacked DeFi protocols, we discovered that while benign transactions typically exhibit a limited number of unique control flows, in stark contrast, attack transactions consistently introduce novel, previously unobserved control flows. Building on these insights, we developed CrossGuard, a novel framework that enforces control flow integrity onchain to secure smart contracts. Crucially, CrossGuard does not require prior knowledge of specific hacks. Instead, configured only once at deployment, it enforces control flow whitelisting policies and applies simplification heuristics at runtime. This approach monitors and prevents potential attacks by reverting all transactions that do not adhere to the established control flow whitelisting rules. Our evaluation demonstrates that CrossGuard effectively blocks 35 of the 37 analyzed attacks when configured only once at contract deployment, maintaining a low false positive rate of (0.26%) and minimal additional gas costs. These results underscore the efficacy of applying control flow integrity to smart contracts, significantly enhancing security beyond traditional methods and addressing the evolving threat landscape in the DeFi ecosystem.
bibtex: |
  @inproceedings{chen2026enforcing,
    author    = {Chen, Zhiyang and Beillahi, Sidi Mohamed and Barahimi, Pasha and Minwalla, Cyrus and Du, Han and Veneris, Andreas and Long, Fan},
    title     = {Enforcing Control Flow Integrity on DeFi Smart Contracts},
    year      = {2026},
    isbn      = {9798400720253},
    publisher = {Association for Computing Machinery},
    address   = {New York, NY, USA},
    url       = {https://doi.org/10.1145/3744916.3773266},
    doi       = {10.1145/3744916.3773266},
    abstract  = {Smart contracts power decentralized financial (DeFi) services but are vulnerable to security exploits that can lead to significant financial losses. Existing security measures often fail to adequately protect these contracts due to the composability of DeFi protocols and the increasing sophistication of attacks. Through a large-scale empirical study of historical transactions from the 37 hacked DeFi protocols, we discovered that while benign transactions typically exhibit a limited number of unique control flows, in stark contrast, attack transactions consistently introduce novel, previously unobserved control flows. Building on these insights, we developed CrossGuard, a novel framework that enforces control flow integrity onchain to secure smart contracts. Crucially, CrossGuard does not require prior knowledge of specific hacks. Instead, configured only once at deployment, it enforces control flow whitelisting policies and applies simplification heuristics at runtime. This approach monitors and prevents potential attacks by reverting all transactions that do not adhere to the established control flow whitelisting rules. Our evaluation demonstrates that CrossGuard effectively blocks 35 of the 37 analyzed attacks when configured only once at contract deployment, maintaining a low false positive rate of (0.26\%) and minimal additional gas costs. These results underscore the efficacy of applying control flow integrity to smart contracts, significantly enhancing security beyond traditional methods and addressing the evolving threat landscape in the DeFi ecosystem.},
    booktitle = {Proceedings of the 2026 IEEE/ACM 48th International Conference on Software Engineering},
    pages     = {1993–2005},
    numpages  = {13},
    keywords  = {runtime validation, control flow integrity, dynamic analysis},
    series    = {ICSE '26}
  }
links:
  pdf: https://dl.acm.org/doi/pdf/10.1145/3744916.3773266
  doi: https://doi.org/10.1145/3744916.3773266
  code: https://github.com/jeffchen006/CrossGuard-Artifact
  slides: https://docs.google.com/presentation/d/1kV8m1mVwKfd4_nTT8ZKtk1ZqaxkRFskgjx9XfUt12lI/
---
