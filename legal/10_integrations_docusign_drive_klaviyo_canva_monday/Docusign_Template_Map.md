# Docusign Template Map

Generated: 2026-06-27

**Template only - attorney review required before external use.**

| Packet | Trigger | Template placeholder | Envelope recipients | Blocking gate |
|---|---|---|---|---|
| Stitch operator onboarding | Request access approved | `STITCH_OPERATOR_MSA_V1` | Operator signer, Stitch signer | No deal room access until signed |
| Stitch NDA/non-circumvention | Before identity reveal | `STITCH_NDA_NONCIRCUMVENT_V1` | Buyer/supplier/broker as applicable | No identity reveal |
| Forge customer terms | Job posted | `FORGE_CUSTOMER_TERMS_V1` | Customer signer | No routed provider handoff |
| Forge provider agreement | Worker/provider signup | `FORGE_PROVIDER_AGREEMENT_V1` | Worker/provider signer | No provider matching |
| Money controls packet | Invoice/payout request | `MONEY_CONTROL_PACKET_V1` | Finance approvers | No payout |

Required env vars only: `DOCUSIGN_INTEGRATION_KEY`, `DOCUSIGN_USER_ID`, `DOCUSIGN_ACCOUNT_ID`, `DOCUSIGN_PRIVATE_KEY`.
