import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

const noop = () => { };

export const webmap = new WebMap({
    portalItem: {
        id: "974c6641665a42bf8a57da08e607bb6f"
    }
});

export const view = new MapView({
    map: webmap
});

export const initialize = (container) => {
    view.container = container;
    view
        .when()
        .then(_ => {
            console.log("Map and View are ready");
        })
        .catch(noop);
    return () => {
        view.container = null;
    };
};