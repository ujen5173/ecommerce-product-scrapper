const data = {
  naming: {
    brand: "Apple",
    phone: document.querySelector(".specs-phone-name-title")
      ? document.querySelector(".specs-phone-name-title").textContent
      : null,
  },
  network: {
    notes: document.querySelector("[data-spec='comment']")
      ? document.querySelector("[data-spec='comment']").textContent
      : null,
    technology: document.querySelector("[data-spec='technologynettech']")
      ? document.querySelector("[data-spec='technologynettech']").textContent
      : null,
    network_2G_bands: document.querySelector("[data-spec='net2g']")
      ? document.querySelector("[data-spec='net2g']").textContent
      : null,
    network_3G_bands: document.querySelector("[data-spec='net3g']")
      ? document.querySelector("[data-spec='net3g']").textContent
      : null,
    network_4G_bands: document.querySelector("[data-spec='net4g']")
      ? document.querySelector("[data-spec='net4g']").textContent
      : null,
    network_5G_bands: document.querySelector("[data-spec='net5g']")
      ? document.querySelector("[data-spec='net5g']").textContent
      : null,
    speed: document.querySelector("[data-spec='speed']")
      ? document.querySelector("[data-spec='speed']").textContent
      : null,
    GPRS: document.querySelector("[data-spec='gprstext']")
      ? document.querySelector("[data-spec='gprstext']").textContent
      : null,
    network_edge: document.querySelector("[data-spec='edge']")
      ? document.querySelector("[data-spec='edge']").textContent
      : null,
  },
  launch: {
    announced: document.querySelector("[data-spec='year']")
      ? document.querySelector("[data-spec='year']").textContent
      : null,
    status: document.querySelector("[data-spec='status']")
      ? document.querySelector("[data-spec='status']").textContent
      : null,
  },
  body: {
    dimension: document.querySelector("[data-spec='dimensions']")
      ? document.querySelector("[data-spec='dimensions']").textContent
      : null,
    weight: document.querySelector("[data-spec='weight']")
      ? document.querySelector("[data-spec='weight']").textContent
      : null,
    built: document.querySelector("[data-spec='built']")
      ? document.querySelector("[data-spec='built']").textContent
      : null,
    keyboard: document.querySelector("[data-spec='keyboard']")
      ? document.querySelector("[data-spec='keyboard']").textContent
      : null,
    sim: document.querySelector("[data-spec='sim']")
      ? document.querySelector("[data-spec='sim']").textContent
      : null,
    others: document.querySelector("[data-spec='bodyother']")
      ? document.querySelector("[data-spec='bodyother']").textContent
      : null,
  },

  display: {
    type: document.querySelector("[data-spec='displaytype']")
      ? document.querySelector("[data-spec='displaytype']").textContent
      : null,
    size: document.querySelector("[data-spec='displaysize']")
      ? document.querySelector("[data-spec='displaysize']").textContent
      : null,
    resolution: document.querySelector("[data-spec='displayresolution']")
      ? document.querySelector("[data-spec='displayresolution']").textContent
      : null,
  },

  platform: {
    os: document.querySelector("[data-spec='os']")
      ? document.querySelector("[data-spec='os']").textContent
      : null,
    chipset: document.querySelector("[data-spec='chipset']")
      ? document.querySelector("[data-spec='chipset']").textContent
      : null,
    cpu: document.querySelector("[data-spec='cpu']")
      ? document.querySelector("[data-spec='cpu']").textContent
      : null,
  },
  memory: {
    card_slot: document.querySelector("[data-spec='memoryslot']")
      ? document.querySelector("[data-spec='memoryslot']").textContent
      : null,
    internal: document.querySelector("[data-spec='internalmemory']")
      ? document.querySelector("[data-spec='internalmemory']").textContent
      : null,
  },
  mainCamera: {
    single: document.querySelector("[data-spec='cam1modules']")
      ? document.querySelector("[data-spec='cam1modules']").textContent
      : null,
    video: document.querySelector("[data-spec='cam1video']")
      ? document.querySelector("[data-spec='cam1video']").textContent
      : null,
  },
  selfieCamera: {
    single: document.querySelector("[data-spec='cam2modules']")
      ? document.querySelector("[data-spec='cam2modules']").textContent
      : null,
    video: document.querySelector("[data-spec='cam2video']")
      ? document.querySelector("[data-spec='cam2video']").textContent
      : null,
  },
  sound: {
    loudspeaker: document.querySelector("[data-spec='cam2modules']")
      ? document.querySelector("[data-spec='cam2modules']").textContent
      : null,
    "sound_3.5mm_jack": document.querySelector("[data-spec='cam2video']")
      ? document.querySelector("[data-spec='cam2video']").textContent
      : null,
  },
  comms: {
    wlan: document.querySelector("[data-spec='wlan']")
      ? document.querySelector("[data-spec='wlan']").textContent
      : null,
    bluetooth: document.querySelector("[data-spec='bluetooth']")
      ? document.querySelector("[data-spec='bluetooth']").textContent
      : null,
    gps: document.querySelector("[data-spec='gps']")
      ? document.querySelector("[data-spec='gps']").textContent
      : null,
    nfc: document.querySelector("[data-spec='nfc']")
      ? document.querySelector("[data-spec='nfc']").textContent
      : null,
    radio: document.querySelector("[data-spec='radio']")
      ? document.querySelector("[data-spec='radio']").textContent
      : null,
    usb: document.querySelector("[data-spec='usb']")
      ? document.querySelector("[data-spec='usb']").textContent
      : null,
  },
  features: {
    sensors: document.querySelector("[data-spec='sensors']")
      ? document.querySelector("[data-spec='sensors']").textContent
      : null,
  },
  battery: {
    type: document.querySelector("[data-spec='batdescription1']")
      ? document.querySelector("[data-spec='batdescription1']").textContent
      : null,
    timeTalk: document.querySelector("[data-spec='battalktime1']")
      ? document.querySelector("[data-spec='battalktime1']").textContent
      : null,
  },
  misc: {
    colors: document.querySelector("[data-spec='colors']")
      ? document.querySelector("[data-spec='colors']").textContent
      : null,
    price: document.querySelector("[data-spec='price']")
      ? document.querySelector("[data-spec='price']").textContent
      : null,
  },
};

module.exports = data;
