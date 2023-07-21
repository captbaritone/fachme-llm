# FachMe-LLM

This project is an exploration of implementing FachMe's API backed by an [LLM](https://en.wikipedia.org/wiki/Large_language_model) using [TypeChat](https://microsoft.github.io/TypeChat/). The goal is to answer the question: "Could we replace FachMe's current algorithm with a language model?". Given that language models probably have a rich "understanding" of the nuances of many opera roles it seems possible that it could!

## Setup

1. Clone the repo
2. Install dependencies (`npm install` or `pnpm install`)
3. Build the project (`npm run build` or `pnpm run build`)
4. Add OpenAI API keys to `.env` (see `.env.example`).
    - API keys can be found here: https://platform.openai.com/account/api-keys
    - You will need a paid account with a credit card on file
    - Your API key must be generated _after_ you setup the payment method
    - If you want an API key to experiment with, I'm happy to give you one on my account. Just ask!
4. Run the project (`npm run go` or `pnpm run go`)

Notes:

* I needed a pretty modern version of Node (16 didn't work, 18 did)

