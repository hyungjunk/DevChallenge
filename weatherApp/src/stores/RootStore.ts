import { action, autorun, makeObservable, observable } from "mobx";
import { enableStaticRendering } from "mobx-react";
import { Weather } from "../../pages/api/weather/model";
import { FetchImpl } from "../protocol/Fetcher";
import is from "@sindresorhus/is";
import { autobind } from "../helpers/autobind";

interface ChildStore {
  init: () => void;
}

export class RootStore {
  appStore: ObservableDataStore;
  authStore: AuthStore;

  constructor() {
    this.appStore = new ObservableDataStore(this);
    this.authStore = new AuthStore(this);
  }
}

// TODO(FUTURE): rootStore 패턴 적용
// https://dev.to/ivandotv/mobx-root-store-pattern-with-react-hooks-318d
// 참고: https://github.com/mobxjs/mobx/tree/main/packages/mobx-react#server-side-rendering-with-enablestaticrendering
enableStaticRendering(typeof window === "undefined");

export class ObservableDataStore implements ChildStore {
  _selectableCities: City[] = [];
  _currentCity?: City;
  _defaultCity?: City;
  _weather?: Weather;

  constructor(private rootStore: RootStore, private fetcher = new FetchImpl()) {
    makeObservable(this, {
      _selectableCities: observable,
      _currentCity: observable,
      _defaultCity: observable,
      _weather: observable,
      setDefaultCity: action,
      setSelectableCities: action,
    });
    autorun(() => {
      this.fetchWeather();
    });
    // makeAutoObservable(this);
  }

  init() {}

  get selectableCities() {
    return this._selectableCities;
  }

  set selectableCities(cities: City[]) {
    console.log("setter");
    this._selectableCities = cities;
  }

  get currentCity(): City {
    if (this._currentCity == null) {
      return { cityName: "", latlng: "" };
    }
    return this._currentCity;
  }

  set currentCity(city: City) {
    this._currentCity = city;
  }

  get defaultCity() {
    if (this._defaultCity == null) {
      return { cityName: "", latlng: "" };
    }
    return this._defaultCity;
  }

  set defaultCity(city: City) {
    this._defaultCity = city;
  }

  get weather() {
    return this._weather;
  }

  set weather(weather: any) {
    this._weather = weather;
  }

  setDefaultCity() {
    this.currentCity = this.defaultCity;
  }

  async fetchWeather() {
    if (is.emptyString(this.currentCity.cityName)) return;
    const response = await this.fetcher.get(
      `/api/weather?city=${this.currentCity.cityName}`,
    );
    const { weather } = response.data;
    this.weather = weather;
  }

  async initiate(navigator: Navigator) {
    navigator.geolocation.getCurrentPosition(this.setCurrentLocation);
  }

  @autobind
  private async setCurrentLocation(position: Position) {
    const response = await this.fetcher.get(
      `/api/coord?latlng=${position.coords.latitude},${position.coords.longitude}`,
    );
    this.setCity(
      {
        cityName: response.data.cityName,
        latlng: `${position.coords.latitude},${position.coords.longitude}`,
      },
      true,
    );
  }

  private setCity(city: City, changeDefaultCity: boolean = false) {
    if (changeDefaultCity) {
      this.defaultCity = city;
    }
    this.currentCity = city;
  }

  setSelectableCities(cities: City[]) {
    this.selectableCities = cities;
  }
}

class User {}

class AuthStore implements ChildStore {
  _user?: User | null = null;

  constructor(private rootStore: any) {
    this.rootStore = rootStore;
    makeObservable(this, {
      _user: observable,
    });
  }

  init() {
    // this.user = new User();
  }

  login(user) {
    this._user = user;
    window.localStorage.setItem("glogin", "yes");
  }

  logout() {
    this._user = null;
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log("User signed out.");
    });
    window.localStorage.removeItem("glogin");
  }

  get user() {
    return this._user;
  }

  set user(user) {
    this._user = user;
  }

  get isLoggedIn() {
    return this._user != null;
  }
}

type City = {
  cityName: string;
  latlng: string;
};

type Position = {
  coords: {
    latitude: number;
    longitude: number;
  };
};
