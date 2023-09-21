# imagination-webui
## AI Image Generation Web UI. No API key required.

## Usage

To use this web UI, you can visit http://localhost:9001 in your web browser. You will then be able to select an AI image generation API provider and enter the parameters for your image. Once you have entered the parameters, you can click the "Generate" button to generate the image.

## Installation

### Prerequisites

- Node.js 16 or later
- npm 7 or later

1. Clone the repository

```sh
git clone https://github.com/scar17off/imagination-webui.git
```

2. Install dependencies

```sh
npm install
```

3. Start the server

```sh
npm start
```

## API

Send a POST request to the `/generate` endpoint with the following body:

```json
{
  "positive": "A beautiful painting of a unicorn galloping through a field of flowers",
  "negative": "A painting of a unicorn that is ugly and deformed",
  "service": "deepai"
}
```

The server will respond with a JSON array of image URLs.

### Services

The following services are currently supported:

- Deepai
- FreeImageGenerator
- Hotpot
- PixlrX

## Note
The ImaginationWebUI initiative employs multiple AI image generation API Providers that are freely available. Each of these Providers constitutes an API furnishing outputs created by distinct AI models. The source code pertaining to these services can be found in the services folder.

It's crucial to understand that owing to the widespread utilization of this project, the complimentary services enlisted here might encounter a substantial influx of requests, leading to momentary inaccessibility or usage restrictions. Consequently, it's usual to come across instances where these services are offline or exhibit instability.
