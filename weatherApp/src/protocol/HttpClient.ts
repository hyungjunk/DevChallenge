import { ApiResponse } from "../../pages/api/types";
import { FetchImpl } from "./Fetcher";
import { SystemError } from "../errors/ClientError";

interface HttpClient {
  get: (url: string, options: RequestInit) => Promise<ApiResponse>;
}

interface RequestOptions {
  withTrailingApiKey: boolean;
}

class OpenWeatherClient implements HttpClient {
  private apiKey = process.env.OPENWEATHERAPIKEY ?? "";

  constructor(
    private baseUrl: string,
    private options: RequestOptions = {
      withTrailingApiKey: true,
    },
  ) {
    this.loadApiKey();
  }

  async get(
    url: string = this.baseUrl,
    fetchOptions?: RequestInit,
  ): Promise<ApiResponse> {
    const targetUrl = this.createUrl(url);
    return new FetchImpl().get(targetUrl, fetchOptions);
  }

  private loadApiKey() {
    if (process.env.OPENWEATHERAPIKEY == null) {
      throw new SystemError("OPENWEATHER API KEY NOT PREPARED");
    }
    this.apiKey = process.env.OPENWEATHERAPIKEY;
  }

  private createUrl(url: string) {
    return this.options.withTrailingApiKey
      ? `${this.baseUrl}/${url}&appid=${this.apiKey}`
      : `${this.baseUrl}/${url}`;
  }
}

class GoogleApiClient implements HttpClient {
  private apiKey = process.env.GOOGLEAPIKEY ?? "";

  constructor(
    private baseUrl: string,
    private options: RequestOptions = {
      withTrailingApiKey: true,
    },
  ) {
    this.loadApiKey();
  }

  private loadApiKey() {
    if (process.env.GOOGLEAPIKEY == null) {
      throw new SystemError("GOOGLE API KEY NOT PREPARED");
    }
    this.apiKey = process.env.GOOGLEAPIKEY;
  }

  private createUrl(url: string) {
    return this.options.withTrailingApiKey
      ? `${this.baseUrl}${url}&key=${this.apiKey}`
      : `${this.baseUrl}${url}`;
  }

  async get(url: string, fetchOptions?: RequestInit) {
    const targetUrl = this.createUrl(url);
    return new FetchImpl().get(targetUrl, fetchOptions);
  }
}

export const openWeatherClient = new OpenWeatherClient(
  "https://api.openweathermap.org",
);
export const googleClient = new GoogleApiClient(
  "https://maps.googleapis.com/maps/api/geocode/json",
);
