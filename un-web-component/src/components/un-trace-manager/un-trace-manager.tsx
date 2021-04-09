import { Component, Prop, h, State, Event, EventEmitter, Watch} from '@stencil/core';
import config from '@arcgis/core/config';
config.assetsPath = 'https://cdn.jsdelivr.net/npm/@arcgis/core@4.18.1/assets';
import {UnTraceHandler} from "./un-trace-handler";
import {GeometryHandler} from "./geometry_handler";
import "@esri/calcite-components";
import { defineCustomElements } from "@esri/calcite-components/dist/loader";

@Component({
  tag: 'un-trace-manager',
  styleUrl: 'un-trace-manager.scss',
  shadow: true,
})
export class UnTraceManager {
  @Prop() host: string = "";
  @Prop() name: string = "";
  @Prop() showTerminals: boolean;
  @Prop() appToken: string = "Cl8tJFi4nxyV8LIgXKBzpgoWO0XDlHhE-xlJ03-DxqZybCe0ug_qf11W6PDrCve7rUU8kzWNNPpPbubeNn39gLr69SdTKgqnlFPVOSz2KWslkKXqfuHsyyZRvScmhG8pkVTbn-onG9g4xvCCB9G412LLq0hJPe8Azx26FWU3jlVn3X1UNH70-5o-H9NCV5tc";
  @Prop() gdbVersion: string = "";
  @Prop() inAssets: any;
  @Prop() inTC: any = {tc:{}, action:"update"};
  @Prop() runIsoTraceTwice: boolean = true;
  @Prop() isBasic: boolean = true;

  @Watch('inAssets')
  watchHandler(newValue: any, oldValue: any, prop:any) {
    console.log(oldValue);
    this[prop] = newValue;
    if(prop === 'inAssets') {this.assetPropsChange();}
  }

  @Event({eventName: 'emitQueryTrace', composed: true, bubbles: true}) emitQueryTrace: EventEmitter<any>;
  @Event({eventName: 'emitSelectedTrace', composed: true, bubbles: true}) emitSelectedTrace: EventEmitter<any>;
  @Event({eventName: 'emitFlagChange', composed: true, bubbles: true}) emitFlagChange: EventEmitter<any>;
  @Event({eventName: 'emitTraceResults', composed: true, bubbles: true}) emitTraceResults: EventEmitter<any>;
  @Event({eventName: 'emitDrawComplete', composed: true, bubbles: true}) emitDrawComplete: EventEmitter<any>;

  @State() currentTab: string = "input";
  @State() unHandler: any;
  @State() geometryHandler: any;
  @State() searchByUser: string = "";
  @State() traceList: Array<any> = [];
  @State() activeStep: number = 1;
  @State() activeTrace: any = null;
  @State() traceResults: any = null;
  @State() loader: boolean = false;
  @State() flags: Array<any> = [];
  @State() terminals: Array<any> = [];
  @State() layersForFlagLookup: Array<any> = [];
  @State() controllerLayer: any;
  @State() traces:any;

  connectedCallback() {
    defineCustomElements(window);
  }

  componentWillLoad() {
    this.unHandler = new UnTraceHandler(this.host, this.name, this.gdbVersion, this.appToken);
    this.geometryHandler = new GeometryHandler();
    //this.unHandler.getToken().then((response:any) => {
    //  this.token = response.token;

      this.unHandler.queryDataElement().then(async(dataElement:any) => {
        this.controllerLayer = this.unHandler.findControllerLayer(dataElement);
        this.layersForFlagLookup = this.unHandler.queryLayersForFlag(this.controllerLayer);
        this.terminals = this.unHandler.queryATAGTerminals(this.controllerLayer);
        this.traces = await this.unHandler.getTraces();
        console.log(this.controllerLayer);
        console.log(this.layersForFlagLookup);
        console.log(this.terminals);
        console.log(this.traces);
      });

    //});
  }

  render() {

      return(
        <div style={{display:'flex', flexDirection:'row', flex:"1"}}>
          <calcite-tabs position="above" layout="center">
            <calcite-tab-nav slot="tab-nav">
              <calcite-tab-title active={(this.currentTab === 'input')?true:false} onClick={()=>{this.widgetTabChange('input')}}>Inputs</calcite-tab-title>
              <calcite-tab-title active={(this.currentTab === 'output')?true:false} onClick={()=>{this.widgetTabChange('output')}}>Outputs</calcite-tab-title>
            </calcite-tab-nav>

            <calcite-tab active={(this.currentTab === 'input')?true:false} style={{backgroundColor:"#f8f8f8"}}>
              {this.renderUIFlags()}
              {this.renderUITraceSelector()}
              {this.renderUIExecute()}
            </calcite-tab>
            <calcite-tab active={(this.currentTab === 'output')?true:false} style={{backgroundColor:"#f8f8f8"}}>
              {this.renderUITraceSelector()}
              {this.renderUIExecute()}
            </calcite-tab>
          </calcite-tabs>
        </div>);
  }

  renderUIFlags() {
    return(
      <div>
        <div style={{height:"10px", width:"100%"}}></div>
        <calcite-card>
          <h3 slot="title">Starting points (0)</h3>
          <span slot="subtitle">Add points to the map where the trace should start.</span>
          <div class="flex-row-center">
            <calcite-button scale="s" color="light" icon-start="plus">Add</calcite-button>
          </div>
          <div style={{height:"10px", width:"100%"}}></div>
        </calcite-card>
        <div style={{height:"10px", width:"100%"}}></div>
        <calcite-card>
          <h3 slot="title">Barriers (0)</h3>
        </calcite-card>
      </div>
    );
  }

  renderUITraceSelector() {
    return (
      <div>
      <div style={{height:"10px", width:"100%"}}></div>
      <calcite-card>
        <div style={{height:"10px", width:"100%"}}></div>
        <calcite-label
          class="sc-calcite-label-h sc-calcite-label-s"
          dir="ltr"
          status="idle"
          scale="m"
          layout="default"
          calcite-hydrated=""
        >
          <label class="sc-calcite-label-h sc-calcite-label-s sc-calcite-label">
            Select a trace operation
            <calcite-select
              label="Select a trace group"
              dir="ltr"
              scale="m"
              theme="light"
              width="auto"
              calcite-hydrated=""
            >
              <calcite-option selected={true} calcite-hydrated="">Isolation Trace Group</calcite-option>
            </calcite-select>
          </label>
          <label class="sc-calcite-label-h sc-calcite-label-s sc-calcite-label">
            This trace will select isolating and isolated features.
          </label>
        </calcite-label>
      </calcite-card>
      </div>
    );
  }

  renderUIExecute() {
    return (
      <div>
        <div style={{height:"10px", width:"100%"}}></div>
        <calcite-card>
          <div style={{height:"10px", width:"100%"}}></div>
          <calcite-notice
            theme="light"
            icon=""
            active={true}
            dismissible={true}
            scale="m"
            width="auto"
            color="red"
          >
            <div slot="notice-title">Add starting point</div>
            <div slot="notice-message">You first need to add a starting point to run the trace.</div>
          </calcite-notice>
          <div style={{height:"10px", width:"100%"}}></div>
          <calcite-button scale="s" color="blue"  width="full">Run</calcite-button>
          <div style={{height:"10px", width:"100%"}}></div>
        </calcite-card>
      </div>
    );
  }

  widgetTabChange = (tab:string) => {
    this.currentTab = tab;
  }

  //Prop change updates
  assetPropsChange() {
    this.flags = [];
    if(this.inAssets.length > 0) {
      console.log(this.inAssets);
      let assetList = [];
      this.inAssets.map(async (a:any) => {
        if(a.layers.length > 0) {
          a.layers.map((lyr:any) => {
            assetList.push(this.lookupAsset(lyr, a.geometry));
          });
        } else {
          // only geom is provided.  do lookup
          this.layersForFlagLookup.map((lyr:any) => {
            const usage = lyr.utilityNetworkFeatureClassUsageType;
            if(usage === 'esriUNFCUTJunction' || usage === 'esriUNFCUTDevice' || usage === 'esriUNFCUTLine') {
              const lyrObj = {layerId: lyr.layerId, ids:[], subtypes:[]};
              assetList.push(this.lookupAsset(lyrObj, a.geometry));
            }
          });
        }
      });
      Promise.all(assetList).then((response:any) => {
        if(response.length > 0) {
          response.map((res:any) => {
            if(res.result.features.length > 0) {
              res.result.features.map(async(feat:any) => {
                if(res.result.geometryType === 'esriGeometryPolyline') {
                  //get percent along
                  const perct = await this.geometryHandler.getPercentageAlong(feat.geometry,  res.flagGeom, res.result.spatialReference);
                  console.log(perct);
                  const flagExists = this.flags.indexOf((f:any) => {
                    return f.globalId === feat.attributes.globalid;
                  });
                  if(flagExists === -1) {
                    this.flags.push(
                      {traceLocationType:'startingPoint',globalId: feat.attributes.globalid, percentAlong:perct[0]}
                    );
                  }
                  //if line on line, send back the intersected point for flag graphic
                  if(res.flagGeom.type === "polyline") {
                    const points = await this.geometryHandler.intersectToPoint(feat.geometry, res.flagGeom, res.result.spatialReference);
                    this.emitDrawComplete.emit({type:'start', geometry: points});
                  } else {
                    this.emitDrawComplete.emit({type:'start', geometry: res.flagGeom});
                  }
                } else if(res.result.geometryType === 'esriGeometryPoint') {
                  //get terminals
                  const terminalList = this.terminals.filter((t:any) => {
                    return (
                      t.assetGroupCode === feat.attributes.assetgroup &&
                      t.assetTypeCode === feat.attributes.assettype &&
                      t.layerId === res.layerId
                    )
                  });
                  if(terminalList.length > 0) {
                    const flagExists = this.flags.indexOf((f:any) => {
                      return f.globalId === feat.attributes.globalid;
                    });
                    if(flagExists === -1) {
                      this.flags.push(
                        {traceLocationType:'startingPoint', globalId: feat.attributes.globalid, terminal:terminalList[0].terminalConfiguration.terminals[0], allTerminals:terminalList[0].terminalConfiguration}
                      );
                      this.emitDrawComplete.emit({type:'start', geometry: res.flagGeom});
                    }
                  }
                } else {
                  //do nothing, it might be a polygon or invalid type
                }
              });
            }
          });
          setTimeout(()=> {
            this.executeTrace();
          },1000);
        }
      });
    }
  }

  //SUPPORT FUNCTIONS
  lookupAsset(lyr?:any, geom?: any): Promise<any> {
    return new Promise(async(resolve) => {
      let geomObj = (geom)?geom:null;
      if(geomObj !== null) {
        if(geomObj.type === "polygon") {
          //convert it to polyline and reproject it.
          const rings = geomObj.rings;
          geomObj = await this.geometryHandler.createPolyline(rings, geomObj.spatialReference.wkid);
        } else {
          //polyline and point, just reproject
        }
      }
      this.unHandler.queryForFeature(lyr, geomObj).then((response:any)=> {
        //console.log(response);
        const resObj = {
          "result": response,
          "flagGeom": geomObj,
          "layerId": lyr.layerId
        }
        resolve(resObj);
      })
      .catch((e: any) => {
        resolve(e);
      });
    });
  }

  executeTrace() {
    if(this.traces.hasOwnProperty('traceConfigurations')) {
      if(this.traces.traceConfigurations.length > 0) {
        this.traces.traceConfigurations.map((tc:any) => {
          if(tc.traceType === 'isolation') {
            this.unHandler.executeTrace(tc.traceType, this.flags, '', tc.globalId).then((results:any) => {
              this.processResults(tc.traceConfiguration.includeIsolated, results.traceResults);
              //this.emitTraceResults.emit({isIsolated:tc.traceConfiguration.includeIsolated, results:results.traceResults});
            });
          }
        });
      }
    }
  }

  processResults(isIsolated:boolean, results:any) {
    if(results.hasOwnProperty("elements")) {
      if(results.elements.length > 0) {
        const grouped = [];
        results.elements.map((el:any) => {
          if(grouped[el.networkSourceId]) {
            grouped[el.networkSourceId].push(el.objectId);
          } else {
            grouped[el.networkSourceId] = [];
            grouped[el.networkSourceId].push(el.objectId);
          }
        });
        for(const key in grouped) {
          const findLayer = this.layersForFlagLookup.filter((lyr:any) => {
            return(lyr.sourceId === parseInt(key));
          });
          if(findLayer.length > 0) {
            const layerObj = {"layerId":findLayer[0].layerId, "subtypes":[], "ids":grouped[key]};
            this.lookupAsset(layerObj).then((results:any) => {
              console.log("results records");
              console.log(results);
              this.emitTraceResults.emit({isIsolated:isIsolated, results:results});
            });
          }
        }

      }
    }
  }


}
