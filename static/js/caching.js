class Cache {
  constructor(name) {
    this.name = name;
    this.cache = localStorage.getItem(name)
      ? JSON.parse(localStorage.getItem(name))
      : {};
    this.limit = 25;
  }

  set(key, value) {
    this.cache[key] = value;
    if (Object.keys(this.cache).length > this.limit) {
      const keys = Object.keys(this.cache);
      delete this.cache[keys[0]];
    }
    localStorage.setItem(this.name, JSON.stringify(this.cache));
  }

  get(key) {
    return this.cache[key];
  }

  delete(key) {
    delete this.cache[key];
    localStorage.setItem(this.name, JSON.stringify(this.cache));
  }
}

const simpleCache = new Cache("cachedForYourConvenienceOnly");

export default simpleCache;
